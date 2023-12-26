import { Request, Response } from "express";
import { BookServices } from "../services/books.services";
import { booksDatabase } from "../database/database";
import { GetBookReq } from "../interfaces/book.interface";

class BookControllers {
  static createBook = (req: Request, res: Response): Response => {
    const newBook = BookServices.createBook(req.body);
    return res.status(201).json(newBook);
  };

  static getBooks = (req: Request, res: Response): Response => {
    const booksList = BookServices.getBooks();
    return res.status(200).json(booksList);
  };

  static retrieveBook = (req: Request, res: Response): Response => {
    const bookFound = BookServices.retrieveBook(res.locals.bookIndex);
    return res.status(200).json(bookFound);
  };

  static updateBook = (req: Request, res: Response): Response => {
    const bookIndex = res.locals.bookIndex;
    BookServices.updateBook(bookIndex, req.body);
    return res.status(200).json(booksDatabase[bookIndex]);
  };

  static deleteBook = (req: Request, res: Response): Response => {
    const bookIndex = res.locals.bookIndex;
    BookServices.deleteBook(bookIndex);
    return res.sendStatus(204);
  };
}

export { BookControllers };
