import { Book } from '../shared/book';
import { Injectable } from '@angular/core';
import { BOOK_DATA } from '../shared/book-data';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CatalogService {
    constructor(private httpClient: HttpClient) { }
    private kwBooks: [string, Book[]][] = [];
    private url: string = '/api/books';
    public searchBooks(keywords: string): Promise<Book[]> {
        if (this.kwBooks.some(element => element[0] == keywords)) {
            return new Promise<Book[]>((resolve, reject) => resolve(this.kwBooks.find(element => element[0] == keywords)[1]));
        }
        let options = { params: new HttpParams().set('keywords', keywords) };
        return this.httpClient.get<Book[]>(this.url, options).toPromise()
            .then(books => {
                console.log(books.length + ' books found');
                this.kwBooks.push([keywords, books]);
                return books;
            })
            .catch((response: HttpErrorResponse) => {
                throw response.statusText + ': ' + response.error.message;
            });
    }

    _filter(field: string, keywords: string[]) {
        return keywords.some(keyword => field.includes(keyword));
    }
}