import { BookModel } from "./../../models/book.model";
import { ApiService } from "./../../core/api.service";
import { Component, OnInit } from "@angular/core";

/**
 * Component for displaying the home page of the book library application.
 * Displays a grid of books related to the "Finance" subject.
 */
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"],
})
export class HomePageComponent implements OnInit {
  /**
   * Array of books to be displayed on the home page.
   */
  books: BookModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadBooks();
  }

   /**
   * Load books related to the "Finance" subject from the API.
   */
  loadBooks() {
    // Fetch books from API
    this.apiService.getBooksBySubject("finance").subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error("Error fetching finance books", error);
      },
    });
  }

}
