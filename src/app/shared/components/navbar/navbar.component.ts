import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LoadingIndicatorService } from "src/app/core/loading-indicator.service";
import { WishlistService } from "src/app/core/wishlist.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"],
})
export class NavbarComponent implements OnInit {
  wishlistCount$!: Observable<number>;

  constructor(
    private wishlistService: WishlistService,
    public loadingIndicatorService: LoadingIndicatorService
  ) {}

  ngOnInit(): void {
    this.wishlistCount$ = this.wishlistService.getWishlistCount();
  }
}
