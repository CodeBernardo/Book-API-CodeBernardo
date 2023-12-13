import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { BookMiddlewares } from "../middlewares/validateBook.middleware";

const booksRouter = Router();

booksRouter.get("/", BookControllers.getBooks);
booksRouter.use("/:id", BookMiddlewares.validateId)

booksRouter.post(
  "/",
  BookMiddlewares.checkDuplicity,
  BookControllers.createBook,
);

booksRouter.get(
  "/:id",
  BookControllers.retrieveBook,
);

booksRouter.patch(
  "/:id",
  BookMiddlewares.checkDuplicity,
  BookControllers.updateBook,
);

booksRouter.delete(
  "/:id",
  BookControllers.deleteBook,
);

export { booksRouter };
