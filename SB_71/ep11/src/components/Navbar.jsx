const Navbar = () => {
  return (
    <nav className="w-full bg-indigo-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Component Library</h1>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Components</a>
        <a href="#" className="hover:underline">Docs</a>
      </div>
    </nav>
  );
};

export default Navbar;
