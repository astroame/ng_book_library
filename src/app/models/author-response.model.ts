import { AuthorModel } from "./author.model";

/**
 * Represents the response model for authors data received from https://openlibrary.org/search/authors.json API.
 */
export interface AuthorResponseModel {
  numFound?: number;
  docs?: AuthorModel[];
}
