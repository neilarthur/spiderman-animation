import { useState } from "react";
import SpiderMan from "./components/SpiderMan";
import "./App.css";

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="container">
      {!startAnimation && (
        <button className="gift-button" onClick={() => setStartAnimation(true)}>
          Click Me  
        </button>
      )}

      {startAnimation && (
        <>
          <SpiderMan />
        </>
      )}
    </div>
  );
}

export default App;
