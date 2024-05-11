import { Pipe, PipeTransform } from "@angular/core";
import { AuthorModel } from "src/app/models/author.model";

@Pipe({
  name: "authorName",
})
export class AuthorNamePipe implements PipeTransform {
  transform(authors?: AuthorModel[]): string {
    if (!authors || authors.length === 0) {
      return "";
    }

    return authors.map((author) => author.name).join(", ");
  }
}
