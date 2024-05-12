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
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
