import { Component, Input } from "@angular/core";
import { WishlistService } from "src/app/core/wishlist.service";
import { BookModel } from "src/app/models/book.model";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.sass"],
})
export class BookCardComponent {
  @Input()
  book!: BookModel;

  constructor(private wishlistService: WishlistService) {}

  addToWishlist(book: BookModel) {
    this.wishlistService.toggleWishlist(book);
  }
}
