import { iterator } from "./iterator";

type Book = {
  title: string;
};

export class BookCollection {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): BookIterator {
    return new BookIterator(this.books);
  }
}

class BookIterator implements iterator<Book> {
  private index = 0;
  constructor(private books: Book[]) {}

  next(): Book | null {
    return this.index < this.books.length
      ? this.books[this.index++]
      : null;
  }

  hasNext(): boolean {
    return this.index < this.books.length;
  }
}
