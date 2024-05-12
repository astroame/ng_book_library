import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WishlistService } from 'src/app/core/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  wishlistCount$!: Observable<number>;

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistCount$ = this.wishlistService.getWishlistCount();
  }

}
