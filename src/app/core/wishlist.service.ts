import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { WishlistState } from "../shared/state/reducers/wishlist.reducer";
import { BookModel } from "../models/book.model";
import {
  addToWishlist,
  removeFromWishlist,
} from "../shared/state/actions/wishlist.actions";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  constructor(
    private toastService: ToastService,
    private store: Store<{ wishlist: WishlistState }>
) {}

  toggleWishlist(book: BookModel): void {
    this.isBookInWishlist(book)
      .pipe(take(1))
      .subscribe((inWishlist) => {
        if (inWishlist) {
             // If book is already in wishlist, remove it
          this.store.dispatch(removeFromWishlist({ bookKey: book.key }));
          this.toastService.show("Book removed from wishlist");
        } else {
             // If book is not in wishlist, add it
          this.store.dispatch(addToWishlist({ book }));
          this.toastService.show("Book added to wishlist");
        }
      });
  }

  isBookInWishlist(book: BookModel): Observable<boolean> {
    // Check if the book is already in the wishlist
    return this.store.select((state) =>
      state.wishlist.books.some((b) => b.key === book.key)
    );
  }

  getWishlistCount(): Observable<number> {
    return this.store.select(state => state.wishlist.books.length);
  }
}
