function BookItem({ book, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-gray-600">Year: {book.year}</p>
      <div className="mt-2">
        <button
          onClick={() => onEdit(book)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookItem;