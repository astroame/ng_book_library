import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoverUrlPipe } from "./pipes/cover-url.pipe";
import { AuthorNamePipe } from './pipes/author-name.pipe';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CoreModule } from "../core/core.module";
import { ToastComponent } from './components/toast/toast.component';

/**
 * House all the reusable components, pipes etc which can be imported by other modules.
 */
@NgModule({
  declarations: [NavbarComponent, CoverUrlPipe, AuthorNamePipe, BookCardComponent, ToastComponent],
  imports: [CommonModule, CoreModule],
  exports: [NavbarComponent, CoverUrlPipe, AuthorNamePipe, BookCardComponent, CoreModule, ToastComponent],
})
export class SharedModule {}
