import { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  function addBook(book) {
    setBooks(prev => [...prev, { ...book, id: Date.now() }]);
  }

  function removeBook(id) {
    setBooks(prev => prev.filter(book => book.id !== id));
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: "1rem" }}>
      <h1>Meus Livros Lidos</h1>

      <BookForm addBook={addBook} />

      <input
        type="text"
        placeholder="Filtrar por título ou autor"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: "16px", padding: "8px", width: "100%" }}
      />

      <BookList books={filteredBooks} removeBook={removeBook} />
    </main>
  );
}
