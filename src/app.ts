import { HandleErrors } from "./middlewares/handleErrors.middleware";
import { booksRouter } from "./routes/books.routes";
import express, { json } from "express";
import "express-async-errors"
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.exe);
