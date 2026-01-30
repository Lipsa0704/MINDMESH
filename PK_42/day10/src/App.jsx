import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Library Card instead of div */}
      <Card>
        <CardContent>
          <h2>Library Components Example</h2>

          {/* Library Button instead of <button> */}
          <Button variant="contained" color="primary">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
