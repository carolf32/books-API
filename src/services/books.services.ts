import { booksDatabase, generateId } from "../database/database";
import { IBookServices, IBooks } from "../interfaces/books.interface";

export class BookServices implements IBookServices {
  createBook(data: Pick<IBooks, "name" | "pages" | "category">): IBooks {
    const now = new Date();
    const newBook: IBooks = {
      id: generateId(),
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  getBooks(search?: string): IBooks[] {
    if (search) {
      const wantedBook = booksDatabase.filter((book) =>
        book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      return wantedBook;
    }

    return booksDatabase;
  }

  getOneBook(id: number): IBooks {
    const currentBook = booksDatabase.find((book) => book.id === id);

    return currentBook as IBooks;
  }

  updateBook(
    id: number,
    data: Partial<Pick<IBooks, "name" | "pages" | "category">>
  ): IBooks {
    const index = booksDatabase.findIndex((book) => book.id === id);
    const now = new Date();

    const updatedBook = {
      ...booksDatabase[index],
      ...data,
      updatedAt: now,
    };

    booksDatabase.splice(index, 1, updatedBook);

    return updatedBook;
  }

  deleteBook(id: number): void {
    const index = booksDatabase.findIndex((book) => book.id === id);

    booksDatabase.splice(index, 1);
  }
}
