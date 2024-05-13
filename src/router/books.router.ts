import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/IsBookIdValid.middleware";
import { IsBookAlreadyRegistered } from "../middlewares/isBookAlreadyRegistered.middleware";
import { ValidateBody } from "../middlewares/ValidateBody.middleware";
import { createBookSchema, updateBookSchema } from "../schemas/books.schema";

export const booksRouter = Router();

const booksController = new BooksController();

booksRouter.post(
  "/",
  ValidateBody.execute(createBookSchema),
  IsBookAlreadyRegistered.execute,
  booksController.create
);
booksRouter.get("/", booksController.getMany);
booksRouter.get("/:id", IsBookIdValid.execute, booksController.getOne);
booksRouter.patch(
  "/:id",
  ValidateBody.execute(updateBookSchema),
  IsBookAlreadyRegistered.execute,
  IsBookIdValid.execute,
  booksController.update
);
booksRouter.delete("/:id", IsBookIdValid.execute, booksController.remove);
