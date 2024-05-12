import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

/**
 * Service for handling errors that occur during API calls.
 */
@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {
  constructor() {}
  /**
   * Handles the specified HTTP error response.
   * @param error The HTTP error response to handle.
   * @returns An observable that emits an Error object with an error message.
   */
  handle(error: HttpErrorResponse) {
    console.error("API call failed:", error);
    let message = "An unexpected error occurred";
    if (error.error instanceof ErrorEvent) {
      message = `An error occurred: ${error.error.message}`;
    } else {
      message = `Server returned code ${error.status}, error message is: ${error.message}`;
    }
    // Return an observable that emits an Error object with the error message
    return throwError(() => new Error(message));
  }
}
