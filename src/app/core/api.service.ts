import { ErrorHandlerService } from "./error-handler.service";
import { Injectable } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BookResponseModel } from "../models/book-response.model";
import { BookModel } from "../models/book.model";

/**
 * Service responsible for fetching book data from openlibrary API.
 */
@Injectable({
  providedIn: "root",
})
export class ApiService {
  /**
   * Constructor for ApiService.
   * @param http Angular HttpClient for making HTTP requests.
   * @param errorHandler Service for handling API errors.
   */
  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  /**
   * Retrieves a list of books based on the provided subject.
   * @param subject The subject for which to fetch books.
   * @returns An observable of BookModel array representing the fetched books.
   */
  getBooksBySubject(subject: string): Observable<BookModel[]> {
    // The URL for fetching books by subject
    const url = `https://openlibrary.org/subjects/${subject}.json`;

    return this.http.get<BookResponseModel>(url).pipe(
      // Extract and map the works array from the response, taking only the first 9 books
      map((data) => (data.works ? data.works.slice(0, 9) : [])),
      // Handle any errors that occur during the HTTP request
      catchError(this.errorHandler.handle)
    );
  }
}
