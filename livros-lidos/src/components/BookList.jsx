function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return <p className="text-gray-500">Nenhum livro encontrado.</p>;
  }

  return (
    <ul className="space-y-3">
      {books.map(({ id, title, author, rating }) => (
        <li
          key={id}
          className="flex justify-between items-center p-3 bg-gray-100 rounded"
        >
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-gray-700">Autor: {author}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(rating)}{" "}
              <span className="text-gray-400">({rating}/5)</span>
            </p>
          </div>
          <button
            onClick={() => removeBook(id)}
            className="text-red-600 hover:underline"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
