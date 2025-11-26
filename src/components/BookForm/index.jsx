import { useState, useEffect } from 'react';

function BookForm({ book, onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.year);
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, year: parseInt(year) };
    if (book) {
      onSubmit(book.id, newBook);
    } else {
      onSubmit(newBook);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Year</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {book ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
}

export default BookForm;