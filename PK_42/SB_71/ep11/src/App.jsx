import Button from "./components/Button";
import Card from "./components/Card";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Reusable Components Demo
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <Button text="Primary" />
          <Button text="Secondary" variant="secondary" />
          <Button text="Delete" variant="danger" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Fast Development"
            description="Reuse components and build faster."
          />
          <Card
            title="Consistent UI"
            description="Same design everywhere."
          />
          <Card
            title="Scalable"
            description="Easy to maintain large apps."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
