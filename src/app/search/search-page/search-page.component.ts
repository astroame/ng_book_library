import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/core/api.service";
import { LoadingIndicatorService } from "src/app/core/loading-indicator.service";
import { BookModel } from "src/app/models/book.model";

/**
 * Component for displaying the search page of the book library application.
 * Displays a grid of books related to the search query & category.
 */
@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.sass"],
})
export class SearchPageComponent implements OnInit {
  /**
   * Array of books to be displayed on the home page.
   */
  books: BookModel[] = [];
  category: string = "title";
  query: string = "";
  searchTimeout!: ReturnType<typeof setTimeout>; 

  constructor(
    private apiService: ApiService,
    private loadingIndicatorService: LoadingIndicatorService,
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  /**
   * Load books related to the "Finance" subject from the API.
   */
  loadBooks() {
    this.loadingIndicatorService.show();
    // Fetch books from API
    this.apiService.getBooksBySubject("finance").subscribe({
      next: (data) => {
        this.books = data;
        this.loadingIndicatorService.hide();
      },
      error: (error) => {
        this.loadingIndicatorService.hide();
        console.error("Error fetching finance books", error);
      },
    });
  }

  //Execute the searchBooks only when the user stops typing for 3000 milliseconds.
  onSearchInput() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.searchBooks();
    }, 3000); 
  }

  searchBooks() {
    if (this.category && this.query) {
      this.loadingIndicatorService.show();
      this.apiService
        .getBooksByKeyGroupAndQuery(this.category, this.query, 0, 30)
        .subscribe({
          next: (data) => {
            this.loadingIndicatorService.hide();
            this.books = data;
          },
          error: (error) => {
            this.loadingIndicatorService.hide();
            console.error("Error fetching books", error);
          },
        });
    }
  }
}
