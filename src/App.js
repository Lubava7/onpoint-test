import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import TextPage from "./pages/TextPage/TextPage";
// import Header from "./Components/Header/Header";
import BrendPage from "./pages/BrendPage/BrendPage";

function App() {
  return (
    <div className="App">
      <div className="carousel">
        <div className="home">
          <HomePage />
        </div>
        <div className="text-page">
          <TextPage />
        </div>
        <div className="brend">
          <BrendPage />
        </div>
      </div>
    </div>
  );
}

export default App;
