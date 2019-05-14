import { Book } from '../shared/book';
import { Injectable } from '@angular/core';
import { BOOK_DATA } from '../shared/book-data';

@Injectable()
export class CatalogService {
    public searchBooks(keywords: string): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var keywordArray = keywords.split(';');
                var result = BOOK_DATA.filter(book =>
                    this._filter(book.title, keywordArray) ||
                    this._filter(book.author, keywordArray) ||
                    this._filter(book.publisher, keywordArray) ||
                    this._filter(book.isbn, keywordArray) ||
                    this._filter(book.price.toString(), keywordArray) ||
                    this._filter(book.numberOfPages.toString(), keywordArray));
                if (result.length > 0) {
                    resolve(result);
                }
                else {
                    reject('no matching books found');
                }
            }, 500);
        });
    }

    _filter(field: string, keywords: string[]) {
        return keywords.some(keyword => field.includes(keyword));
    }
}