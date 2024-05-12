import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/core/api.service";
import { LoadingIndicatorService } from "src/app/core/loading-indicator.service";
import { ToastService } from "src/app/core/toast.service";
import { AuthorModel } from "src/app/models/author.model";

@Component({
  selector: "app-author-details",
  templateUrl: "./author-details.component.html",
  styleUrls: ["./author-details.component.sass"],
})
export class AuthorDetailsComponent implements OnInit {
  author?: AuthorModel;
  authorKey: string = "";
  authorName: string = "";

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastService: ToastService,
    private loadingIndicatorService: LoadingIndicatorService
  ) {}

  ngOnInit(): void {
    // Retrieve route parameters for 'key' and 'name'
    this.route.params.subscribe((params) => {
      this.authorKey = params["key"];
      this.authorName = params["name"];
      // Call searchAuthor method to search for the author
      this.searchAuthor();
    });
  }

  /**
   * search for author with the given name from the API.
   */
  searchAuthor() {
    this.loadingIndicatorService.show();
    this.apiService.getAuthorByName(this.authorName, 0, 50).subscribe({
      next: (data) => {
        this.loadingIndicatorService.hide();
        const authorKeyId = this.authorKey ? this.authorKey.split("/")[2] : ""; //['', 'authors', 'OL4489781A']
        // Find the author in the data array where the key matches the authorKey value
        const foundAuthor = data.find((author) => author.key == authorKeyId);
        // Set the author property to the found author, if available
        if (foundAuthor) {
          this.author = foundAuthor;
        } else {
          this.toastService.show(`Author with key ${this.authorKey} not found`);
          console.error(`Author with key ${this.authorKey} not found`);
        }
      },
      error: (error) => {
        this.loadingIndicatorService.hide();
        this.toastService.show(
          `Error fetching authors with  ${this.authorName}`
        );
        console.error("Error fetching authors with " + this.authorName, error);
      },
    });
  }
}
