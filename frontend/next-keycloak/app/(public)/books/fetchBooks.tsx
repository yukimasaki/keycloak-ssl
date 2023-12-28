import { ListboxWrapperComponent } from "@components/listBoxWrapper";
import { Listbox, ListboxItem } from "@nextui-org/react";

export const FetchBooksComponent = async () => {
  type Book = {
    id: number;
    title: string;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books/public`);
  const books: Book[] = await response.json();

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <ListboxWrapperComponent>
          <Listbox variant="faded" aria-label="Listbox menu with icons">
            {books.map(book => {
              return (
                <ListboxItem
                  key={book.title}
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
