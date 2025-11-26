import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Modal from './components/Modal';

const API_URL = 'http://localhost:3000/books';

function App() {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  // GET: Fetch books
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // POST: Add new book
  const addBook = async (book) => {
    try {
      const response = await axios.post(API_URL, book);
      setBooks([...books, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // PUT: Update book
  const updateBook = async (id, updatedBook) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedBook);
      setBooks(books.map(book => book.id === id ? response.data : book));
      setIsModalOpen(false);
      setEditingBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // DELETE: Delete book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const openAddModal = () => {
    setEditingBook(null);
    setIsModalOpen(true);
  };

  const openEditModal = (book) => {
    setEditingBook(book);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header onAddBook={openAddModal} />
      <BookList books={books} onEdit={openEditModal} onDelete={deleteBook} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookForm
          book={editingBook}
          onSubmit={editingBook ? updateBook : addBook}
        />
      </Modal>
    </div>
  );
}

export default App;