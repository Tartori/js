import { BookBinding } from './book-binding';

export class Book {
  constructor(
    public isbn: string,
    public author: string,
    public title: string,
    public price: number,
    public publisher: string,
    public year: number,
    public binding: BookBinding,
    public numberOfPages: number,
    public description: string,
    public imgUrl: string) { }

}