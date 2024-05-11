import { AuthorModel } from "./author.model";

/**
 * Represents the book model for book data received from https://openlibrary.org/subjects/${subject}.json API.
 */
export interface BookModel {
    key: string;
    title: string;
    first_publish_year?: number;
    authors?: AuthorModel[];
    cover_id?: number;  // Cover image ID used to build the image URL. https://covers.openlibrary.org/b/$key/$value-$size.jpg
    edition_count?: number;
    number_of_pages?: number;//??
  }