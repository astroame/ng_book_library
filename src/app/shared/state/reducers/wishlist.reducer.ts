// wishlist.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as WishlistActions from './../actions/wishlist.actions';
import { BookModel } from 'src/app/models/book.model';

export interface WishlistState {
  books: BookModel[];
}

export const initialState: WishlistState = {
  books: []
};

export const wishlistReducer = createReducer(
  initialState,

  on(WishlistActions.addToWishlist, (state, { book }) => ({
    ...state,
    books: [...state.books, book]
  })),

  on(WishlistActions.removeFromWishlist, (state, { bookKey }) => ({
    ...state,
    books: state.books.filter(book => book.key !== bookKey)
  }))
);
