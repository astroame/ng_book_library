import { ToastService } from "./../../core/toast.service";
import { ApiService } from "./../../core/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookModel } from "src/app/models/book.model";
import { WishlistService } from "src/app/core/wishlist.service";
import { LoadingIndicatorService } from "src/app/core/loading-indicator.service";

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

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    public wishlistService: WishlistService,
    private toastService: ToastService,
    private loadingIndicatorService: LoadingIndicatorService
  ) {}

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
    this.loadingIndicatorService.show();
    this.apiService
      .getBooksByKeyGroupAndQuery("title", this.bookTitle, 0, 50)
      .subscribe({
        next: (data) => {
          this.loadingIndicatorService.hide();
          // Find the book in the data array where the key matches the bookKey value
          const foundBook = data.find((book) => book.key == this.bookKey);
          // Set the book property to the found book, if available
          if (foundBook) {
            this.book = foundBook;
          } else {
            this.toastService.show(`Book with key ${this.bookKey} not found`);
            console.error(`Book with key ${this.bookKey} not found`);
          }
        },
        error: (error) => {
          this.loadingIndicatorService.hide();
          this.toastService.show(
            `Error fetching books with  ${this.bookTitle}`
          );
          console.error("Error fetching books with " + this.bookTitle, error);
        },
      });
  }

  toggleWishlist(book: BookModel) {
    this.wishlistService.toggleWishlist(book);
  }
}
