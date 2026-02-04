import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock server API
  const fetchData = async () => {
    setLoading(true);

    // Simulating server delay
    setTimeout(() => {
      const mockResponse = {
        message: "Data received from Mock Server ✅"
      };

      setData(mockResponse.message);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2>Frontend → Mock Server</h2>

      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      <p>{data}</p>
    </div>
  );
}

export default App;
