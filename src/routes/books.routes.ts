import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { BookMiddlewares } from "../middlewares/validateBook.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createBookSchema, updateBookSchema } from "../schemas/Book.schema";

const booksRouter = Router();

booksRouter.get("/", BookControllers.getBooks);

booksRouter.post(
  "/",
  ValidateRequest.exe({ body: createBookSchema }),
  BookMiddlewares.checkDuplicity,
  BookControllers.createBook,
);

booksRouter.use("/:id", BookMiddlewares.validateId);
booksRouter.get("/:id", BookControllers.retrieveBook);

booksRouter.patch(
  "/:id",
  ValidateRequest.exe({ body: updateBookSchema }),
  BookMiddlewares.checkDuplicity,
  BookControllers.updateBook,
);

booksRouter.delete("/:id", BookControllers.deleteBook);

export { booksRouter };
