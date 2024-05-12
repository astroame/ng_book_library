import { createAction, props } from '@ngrx/store';
import { BookModel } from 'src/app/models/book.model';

export const addToWishlist = createAction('[Wishlist] Add to Wishlist', props<{ book: BookModel }>());
export const removeFromWishlist = createAction('[Wishlist] Remove from Wishlist', props<{ bookKey: string }>());
