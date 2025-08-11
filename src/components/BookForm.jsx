import { useState } from "react";

export default function BookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Quero ler");
  const [dateFinished, setDateFinished] = useState("");
  const [pages, setPages] = useState("");
  const [fiction, setFiction] = useState("Ficção");
  const [rating, setRating] = useState(3);
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [cover, setCover] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    addBook({
      title: title.trim(),
      author: author.trim(),
      status,
      dateFinished,
      pages,
      fiction,
      rating,
      year,
      synopsis: synopsis.trim(),
      cover: cover.trim(),
    });

    // Resetar formulário
    setTitle("");
    setAuthor("");
    setStatus("Quero ler");
    setDateFinished("");
    setPages("");
    setFiction("Ficção");
    setRating(3);
    setYear("");
    setSynopsis("");
    setCover("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}
    >
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Quero ler</option>
        <option>Lendo</option>
        <option>Lido</option>
      </select>

      <input
        type="date"
        placeholder="Data finalizado"
        value={dateFinished}
        onChange={(e) => setDateFinished(e.target.value)}
      />

      <input
        type="number"
        placeholder="Páginas"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />

      <select value={fiction} onChange={(e) => setFiction(e.target.value)}>
        <option>Ficção</option>
        <option>Não Ficção</option>
      </select>

      <label>
        Nota:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} ⭐
            </option>
          ))}
        </select>
      </label>

      <input
        type="number"
        placeholder="Ano de publicação"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <textarea
        placeholder="Sinopse"
        value={synopsis}
        onChange={(e) => setSynopsis(e.target.value)}
        rows={3}
      />

      <input
        type="text"
        placeholder="URL da capa"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
      />

      <button type="submit">Adicionar Livro</button>
    </form>
  );
}
