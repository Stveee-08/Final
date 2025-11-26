function Header({ onAddBook }) {
  return (
    <header className="bg-blue-600 text-white p-4 mb-4">
      <h1 className="text-2xl font-bold">Book Manager</h1>
      <button
        onClick={onAddBook}
        className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add New Book
      </button>
    </header>
  );
}

export default Header;