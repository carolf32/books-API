import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsBookAlreadyRegistered {
  static execute(req: Request, res: Response, next: NextFunction) {
    const registeredBook = booksDatabase.some(
      (book) => book.name === req.body.name
    );

    if (registeredBook) {
      throw new AppError("Book already registered.", 409);
    }

    next();
  }
}
