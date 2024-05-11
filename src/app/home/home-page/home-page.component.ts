import { BookModel } from "./../../models/book.model";
import { ApiService } from "./../../core/api.service";
import { Component, OnInit } from "@angular/core";

/**
 * Component for displaying the home page of the book library application.
 * Displays a grid of books related to the "Finance" subject.
 */
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.sass"],
})
export class HomePageComponent implements OnInit {
  /**
   * Array of books to be displayed on the home page.
   */
  books: BookModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.loadBooks();//TODO: Uncomment & remove mocked data
    this.books.push({
      key: "1",
      title: "Book One",
      first_publish_year: 2000,
      authors: [{ key: "1", name: "Author One" }],
      cover_id: 123,
      edition_count: 1,
      number_of_pages: 300,
    });

    this.books.push({
      key: "2",
      title: "Book Two",
      first_publish_year: 2010,
      authors: [
        { key: "2", name: "Author Two" },
        { key: "3", name: "Author Three" },
      ],
      cover_id: 456,
      edition_count: 2,
      number_of_pages: 250,
    });

    this.books.push({
      key: "3",
      title: "Book Three",
      first_publish_year: 2015,
      authors: [{ key: "4", name: "Author Four" }],
      cover_id: 789,
      edition_count: 1,
      number_of_pages: 400,
    });

    this.books.push({
      key: "4",
      title: "Book Four",
      first_publish_year: 2005,
      authors: [{ key: "5", name: "Author Five" }],
      cover_id: 101,
      edition_count: 1,
      number_of_pages: 350,
    });

    this.books.push({
      key: "5",
      title: "Book Five",
      first_publish_year: 2018,
      authors: [{ key: "6", name: "Author Six" }],
      cover_id: 112,
      edition_count: 1,
      number_of_pages: 280,
    });

    this.books.push({
      key: "6",
      title: "Book Six",
      first_publish_year: 2002,
      authors: [{ key: "7", name: "Author Seven" }],
      cover_id: 113,
      edition_count: 1,
      number_of_pages: 320,
    });

    this.books.push({
      key: "7",
      title: "Book Seven",
      first_publish_year: 2007,
      authors: [{ key: "8", name: "Author Eight" }],
      cover_id: 114,
      edition_count: 1,
      number_of_pages: 370,
    });

    this.books.push({
      key: "8",
      title: "Book Eight",
      first_publish_year: 2012,
      authors: [{ key: "9", name: "Author Nine" }],
      cover_id: 115,
      edition_count: 1,
      number_of_pages: 310,
    });

    this.books.push({
      key: "9",
      title: "Book Nine",
      first_publish_year: 2009,
      authors: [{ key: "10", name: "Author Ten" }],
      cover_id: 116,
      edition_count: 1,
      number_of_pages: 390,
    });
  }

   /**
   * Load books related to the "Finance" subject from the API.
   */
  loadBooks() {
    // Fetch books from API
    this.apiService.getBooksBySubject("finance").subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        console.error("Error fetching finance books", error);
      },
    });
  }

}
