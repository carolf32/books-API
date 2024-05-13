import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsBookIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const isBookValid = booksDatabase.some(
      (book) => book.id === +req.params.id
    );

    if (!isBookValid) {
      throw new AppError("Book not found.", 404);
    }

    next();
  }
}
