import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import TextPage from "./pages/TextPage/TextPage";
// import Header from "./Components/Header/Header";
import BrendPage from "./pages/BrendPage/BrendPage";

function App() {
  const [distance, setDistance] = useState(1024);

  // function handleStart() {
  //   console.log("start");
  // }
  // function handleMove(e) {
  //   console.log("move");
  //   e.target.style.scrollRight += 1024;
  // }
  // function handleEnd() {
  //   console.log("end");
  // }
  // function handleCancel() {
  //   console.log("cancel");
  // }
  return (
    <div className="App">
      <div
        // onTouchStart={handleStart}
        // onTouchMove={(e) => handleMove(e)}
        // onTouchEnd={handleEnd}
        // onTouchCancel={handleCancel}
        className="carousel"
      >
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
