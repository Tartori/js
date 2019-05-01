import { BookBinding } from './book-binding';

export class Book {
  constructor(public isbn: String, public author: String, public title: String, public price: number, public publisher: String, public year: number, public binding: BookBinding, public numberOfPages: number, public description: String, public imgUrl: String) { }

}