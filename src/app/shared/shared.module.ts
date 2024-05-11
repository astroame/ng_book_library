import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoverUrlPipe } from "./pipes/cover-url.pipe";
import { AuthorNamePipe } from './pipes/author-name.pipe';
import { BookCardComponent } from './components/book-card/book-card.component';

/**
 * House all the reusable components, pipes etc which can be imported by other modules.
 */
@NgModule({
  declarations: [NavbarComponent, CoverUrlPipe, AuthorNamePipe, BookCardComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, CoverUrlPipe, AuthorNamePipe, BookCardComponent],
})
export class SharedModule {}