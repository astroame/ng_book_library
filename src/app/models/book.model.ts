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

    //search query - https://openlibrary.org/search.json?q=${keyGroup}:${q}&fields=key,first_publish_year,title,author_name,edition_count,number_of_pages_median,cover_i
    number_of_pages_median?: number;
    cover_i?: number;  
    author_name?: string[];
  }