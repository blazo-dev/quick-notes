import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./pages/Board";

function App() {
  return (
    <main className="page-layout">
      <Navbar />
      <Board />
    </main>
  );
}

export default App;
