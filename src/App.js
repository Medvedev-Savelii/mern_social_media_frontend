import "./App.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "-5rem", right: "0%" }}></div>
      <Home />
    </div>
  );
}

export default App;
