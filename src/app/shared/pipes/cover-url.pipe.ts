import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coverUrl'
})
export class CoverUrlPipe implements PipeTransform {
  transform(url?: number, fallback: string = 'assets/img/default-book-cover.png'): string {
    return url ? `http://covers.openlibrary.org/b/id/${url}-M.jpg` : fallback;
  }

}