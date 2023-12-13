import { booksDatabase } from "../database/database";
import {
  Book,
  UpdadeBookReq,
  CreateBookReq,
} from "../interfaces/book.interface";
import { generateId } from "./utils";

class BookServices {
  static createBook = (data: CreateBookReq): Book => {
    const newBook: Book = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    booksDatabase.push(newBook);
    return newBook;
  };

  static getBooks = (): Book[] => booksDatabase;

  static retrieveBook = (index: string): Book => booksDatabase[Number(index)];

  static updateBook = (index: string, data: UpdadeBookReq): Book => {
    const idx = Number(index);

    booksDatabase[idx] = {
      ...booksDatabase[idx],
      ...data,
      updatedAt: new Date(),
    };
    
    return booksDatabase[idx];
  };

  static deleteBook = (index: string): void => {
    const idx = Number(index);
    booksDatabase.splice(idx, 1);
  };
}

export { BookServices };
