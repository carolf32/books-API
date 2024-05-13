export interface IBooks {
  id: number;
  name: string;
  pages: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookServices {
  createBook(data: Pick<IBooks, "name" | "pages" | "category">): IBooks;
  getBooks(): IBooks[];
  getOneBook(id: number): IBooks;
  updateBook(
    id: number,
    data: Partial<Pick<IBooks, "name" | "pages" | "category">>
  ): IBooks;
  deleteBook(id: number): void;
}
