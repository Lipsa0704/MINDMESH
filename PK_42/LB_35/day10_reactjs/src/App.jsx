import useToggle from "./hooks/useToggle";

function App() {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="bg-amber-300 mt-48 ml-120 rounded-lg border-2 w-xl p-6">
      
      <p className="text-xl font-semibold text-center mb-4">
        {isOpen ? "Content is visible :> => Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio." : "Content is hidden :) => Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio."}
      </p>

      <button
        onClick={toggle}
        className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500 block mx-auto"
      >
        {isOpen ? "Hide" : "Show"}
      </button>

      {isOpen && (
        <p className="text-center mt-4 font-bold">Hello Everyone</p>
      )}
    </div>
  );
}

<div></div>
export default App;
