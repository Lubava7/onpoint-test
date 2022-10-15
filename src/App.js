import "./App.css";
import { useRef } from "react";
import HomePage from "./pages/HomePage/HomePage";
import TextPage from "./pages/TextPage/TextPage";
import Header from "./Components/Header/Header";
import BrendPage from "./pages/BrendPage/BrendPage";

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <div className="carousel">
        <div ref={ref} className="home c-item">
          <HomePage />
        </div>
        <div className="text-page c-item">
          <TextPage />
        </div>
        <div className="brend c-item">
          <BrendPage />
        </div>
      </div>
    </div>
  );
}

export default App;
