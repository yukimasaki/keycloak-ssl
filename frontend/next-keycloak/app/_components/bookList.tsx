"use client";

import { Book } from "@common/types/books";
import { ListboxWrapperComponent } from "@components/listBoxWrapper";
import { Listbox, ListboxItem } from "@nextui-org/react";

export const BookListComponent = async ({
  books,
}: {
  books: Book[],
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <ListboxWrapperComponent>
          <Listbox variant="faded" aria-label="Listbox menu with icons">
            {books.map(book => {
              return (
                <ListboxItem
                  key={book.id}
                >
                  {book.title}
                </ListboxItem>
              );
            })}
          </Listbox>
        </ListboxWrapperComponent>
      </div>
    </>
  );
}
