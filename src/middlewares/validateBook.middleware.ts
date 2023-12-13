import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { booksDatabase } from "../database/database";

class BookMiddlewares {
  static validateId = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void => {
    const bookFound = booksDatabase.find(
      (book) => book.id === Number(req.params.id),
    );
    if (!bookFound) {
      throw new AppError(404, "Book not found.");
    } else {
      const bookIndex = booksDatabase.findIndex(
        (book) => book.id === Number(req.params.id),
      );
      res.locals.bookIndex = bookIndex;
    }
    return next();
  };

  static checkDuplicity = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void => {
    const bookFound = booksDatabase.some((book) => book.name === req.body.name);
    if (bookFound) {
      throw new AppError(409, "Book already registered.");
    }
    return next();
  };
}
export { BookMiddlewares };
