import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  toasts: any[] = [];

  show(text: string, options: any = {}) {
    const toast = { text, ...options };
    this.toasts.push(toast);
    setTimeout(() => this.remove(toast), options.delay || 6000);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}
