interface Book {
  id: number;
  name: string;
  pages: number;
  category?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

type CreateBookReq = Pick<Book, "name" | "pages" | "category">
type UpdadeBookReq = Partial<CreateBookReq>

export { Book, CreateBookReq, UpdadeBookReq };
