"use client";

import { HeaderComponent } from "@components/header";
import { FetchBooksComponent } from "./fetchBooks";

export default async function BooksPage() {

  return (
    <>
      <HeaderComponent />
      <FetchBooksComponent />
    </>
  );
}
