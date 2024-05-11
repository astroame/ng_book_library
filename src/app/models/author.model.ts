export interface AuthorModel {
    key: string;
    name: string;
    birth_date?: string;
    top_work?: string;
    work_count?: number;
    top_subjects?: string[];//limit to first 5
    // photo?: string; //https://covers.openlibrary.org/a/$key/$value-$size.jpg
  }