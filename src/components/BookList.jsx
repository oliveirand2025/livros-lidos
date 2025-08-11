export default function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return <p>Nenhum livro adicionado.</p>;
  }

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {books.map((book) => (
        <li
          key={book.id}
          style={{
            marginBottom: "16px",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "6px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {book.cover ? (
              <img
                src={book.cover}
                alt={`Capa de ${book.title}`}
                style={{ width: 80, height: 120, objectFit: "cover", borderRadius: "4px" }}
              />
            ) : (
              <div
                style={{
                  width: 80,
                  height: 120,
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontSize: "0.8rem",
                  borderRadius: "4px",
                }}
              >
                Sem capa
              </div>
            )}

            <div style={{ flex: 1 }}>
              <h3>{book.title}</h3>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Status:</strong> {book.status}</p>
              {book.dateFinished && <p><strong>Finalizado em:</strong> {book.dateFinished}</p>}
              {book.pages && <p><strong>Páginas:</strong> {book.pages}</p>}
              <p><strong>Categoria:</strong> {book.fiction}</p>
              <p><strong>Ano de publicação:</strong> {book.year || "Desconhecido"}</p>
              {book.synopsis && <p><strong>Sinopse:</strong> {book.synopsis}</p>}
              <p>{"⭐".repeat(book.rating)}</p>
            </div>

            <button onClick={() => removeBook(book.id)} style={{ height: "fit-content" }}>
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
