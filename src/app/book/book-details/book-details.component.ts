import { ApiService } from "./../../core/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookModel } from "src/app/models/book.model";

/**
 * Component for displaying the book details.
 */
@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.sass"],
})
export class BookDetailsComponent implements OnInit {
  book?: BookModel;
  bookTitle: string = "";
  bookKey: string = "";

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Retrieve route parameters for 'key' and 'title'
    this.route.params.subscribe((params) => {
      this.bookKey = params["key"];
      this.bookTitle = params["title"];
      // Call searchBook method to search for the book
      this.searchBook();
    });
  }

  /**
   * search for books with the given book title from the API.
   */
  searchBook() {
    this.apiService
      .getBooksByKeyGroupAndQuery("title", this.bookTitle)
      .subscribe({
        next: (data) => {
          // Find the book in the data array where the key matches the bookKey value
          const foundBook = data.find((book) => book.key == this.bookKey);
          // Set the book property to the found book, if available
          if (foundBook) {
            this.book = foundBook;
          } else {
            console.error(`Book with key ${this.bookKey} not found`);
          }
        },
        error: (error) => {
          console.error("Error fetching books with " + this.bookTitle, error);
        },
      });
  }

  //TODO:
  toggleWishlist(book: BookModel) {
    console.log(book);
  }
}
