import express, { json } from "express";
import { booksRouter } from "./router/books.router";
import { HandleErrors } from "./middlewares/handleErros.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.execute);
