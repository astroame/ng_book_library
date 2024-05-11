import { Component, Input } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass']
})
export class BookCardComponent {
  @Input()
  book!: BookModel;


  addToWishlist(book: BookModel) {
    console.log("Adding book to wishlist", book);
  }
}
