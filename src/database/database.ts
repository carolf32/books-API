import { IBooks } from "../interfaces/books.interface";

export const booksDatabase: IBooks[] = []

let currentId = 0

export function generateId() {
    currentId++;
    return currentId;
}