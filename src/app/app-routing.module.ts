import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/**
 * Lazy load module
 */
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then((m) => m.BookModule),
  },
  {
    path: "author",
    loadChildren: () =>
      import("./author/author.module").then((m) => m.AuthorModule),
  },
  {
    path: "search",
    loadChildren: () =>
      import("./search/search.module").then((m) => m.SearchModule),
  },
  {
    path: "wishlist",
    loadChildren: () =>
      import("./wishlist/wishlist.module").then((m) => m.WishlistModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
