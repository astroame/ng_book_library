import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "coverUrl",
})
export class CoverUrlPipe implements PipeTransform {
  transform(key?: string | number, type: string = "b"): string {
    const fallback: string =
      type === "a"
        ? "assets/img/default-author-cover.png"
        : "assets/img/default-book-cover.png";
    const k = type === "a" ? "olid" : "id";
    // const keyString: string = typeof key === 'number' ? key.toString() : key;
    return key
      ? `https://covers.openlibrary.org/${type}/${k}/${key}-M.jpg`
      : fallback;
  }
}
