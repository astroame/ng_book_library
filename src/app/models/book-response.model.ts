import { BookModel } from "./book.model";

/**
 * Represents the response model for book data received from https://openlibrary.org/subjects/${subject}.json API.
 */
export interface BookResponseModel {
    key?: string;
    name?: string;
    subject_type?: string;
    work_count?: number;
    works?: BookModel[];
  }
  