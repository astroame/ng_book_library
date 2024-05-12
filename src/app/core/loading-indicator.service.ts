import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoadingIndicatorService {
  isLoading: boolean = false;

  constructor() {}

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }
}
