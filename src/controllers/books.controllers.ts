import { Request, Response } from "express";
import { BookServices } from "../services/books.services";

export class BooksController {
  create(req: Request, res: Response) {
    const bookService = new BookServices();

    const book = bookService.createBook(req.body);
    return res.status(201).json(book);
  }

  getMany(req: Request, res: Response) {
    const bookService = new BookServices();

    const books = bookService.getBooks(req.query.search as string);
    return res.status(200).json(books);
  }

  getOne(req: Request, res: Response) {
    const bookService = new BookServices();

    const book = bookService.getOneBook(+req.params.id);
    return res.status(200).json(book);
  }

  update(req: Request, res: Response) {
    const bookService = new BookServices();

    const book = bookService.updateBook(+req.params.id, req.body);
    return res.status(200).json(book);
  }

  remove(req: Request, res: Response) {
    const bookService = new BookServices();

    const book = bookService.deleteBook(+req.params.id);
    return res.status(204).json();
  }
}
