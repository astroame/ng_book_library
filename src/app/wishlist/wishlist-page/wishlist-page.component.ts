import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/core/wishlist.service';
import { BookModel } from 'src/app/models/book.model';

/**
 * Component for displaying wish list.
 * Displays a grid of books added to the wishlist.
 */
@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.sass']
})
export class WishlistPageComponent implements OnInit{
   /**
   * Array of books to be displayed on the wish list page.
   */
   books: BookModel[] = [];

   constructor(
    private wishlistService: WishlistService
   ) {}
 
   ngOnInit() {
     this.loadBooks();
   }

   loadBooks(): void {
    this.wishlistService.getWishlistBooks().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        console.error('Error fetching books from wishlist', error);
      }
    });
  }

}
