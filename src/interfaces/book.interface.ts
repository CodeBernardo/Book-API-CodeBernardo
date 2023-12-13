interface Book {
  id: number;
  name: string;
  pages: number;
  category?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export { Book };
