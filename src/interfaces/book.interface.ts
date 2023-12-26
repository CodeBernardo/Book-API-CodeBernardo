import { AnyZodObject } from "zod";

interface Book {
  id: number;
  name: string;
  pages: number;
  category?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

type CreateBookReq = Pick<Book, "name" | "pages" | "category">;
type UpdadeBookReq = Partial<CreateBookReq>;
type GetBookReq = Pick<Book, "name">

interface RequestSchema {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export { Book, CreateBookReq, UpdadeBookReq, RequestSchema, GetBookReq };
