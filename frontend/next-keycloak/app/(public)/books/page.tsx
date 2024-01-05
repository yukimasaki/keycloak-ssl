"use server";

import { Book } from "@common/types/books";
import { BookListComponent } from "@components/bookList";
import { HeaderComponent } from "@components/header";

const FetchBooksComponent = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/public`);
  const books: Book[] = await response.json();

  return (
    <>
      <HeaderComponent />
      <BookListComponent books={books} />
    </>
  );
}

export default FetchBooksComponent;
