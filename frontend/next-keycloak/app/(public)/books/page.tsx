export default async function BooksPage() {
  type Book = {
    id: number;
    title: string;
  }

  const response = await fetch(`${process.env.API_BASE_URL}/books/public`);
  const books: Book[] = await response.json();

  return (
    books.map(book => {
      return (
        <div>{book.title}</div>
      );
    })
  );
}
