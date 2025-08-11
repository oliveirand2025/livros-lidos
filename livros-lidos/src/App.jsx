import { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(filter.toLowerCase()) ||
      b.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Meus Livros Lidos</h1>

      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow mb-6">
        <BookForm addBook={addBook} />
      </div>

      <input
        type="text"
        placeholder="Filtrar por título ou autor..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="max-w-xl w-full p-3 rounded border mb-4"
      />

      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow">
        <BookList books={filteredBooks} removeBook={removeBook} />
      </div>
    </div>
  );
}

export default App;
