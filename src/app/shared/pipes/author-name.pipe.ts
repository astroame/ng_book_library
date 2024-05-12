import { Pipe, PipeTransform } from "@angular/core";
import { AuthorModel } from "src/app/models/author.model";

@Pipe({
  name: "authorName",
})
export class AuthorNamePipe implements PipeTransform {
  transform(authors?: AuthorModel[] | string[]): string {
    if (!authors || authors.length === 0) {
      return "";
    }

    // Check the type of authors input
    if (Array.isArray(authors) && typeof authors[0] === "string") {
      // If it's an array of strings, return the joined string
      return authors.join(", ");
    } else if (
      Array.isArray(authors) &&
      typeof authors[0] === "object" &&
      "name" in authors[0]
    ) {
      // If it's an array of AuthorModel objects, map to author names and join
      return (authors as AuthorModel[]).map((author) => author.name).join(", ");
    } else {
      // If the input type is not recognized, return an empty string
      console.error("Invalid input type for AuthorNamePipe");
      return "";
    }
  }
}
