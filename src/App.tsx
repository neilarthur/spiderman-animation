import { useState } from "react";
import "./App.css";
import SpiderMan from "./components/SpiderMan";

function App() {
  const [showSpider, setShowSpider] = useState(false);

  return (
    <div className="container">
      {!showSpider && (
        <button onClick={() => setShowSpider(true)}>Click Me</button>
      )}

      {showSpider && <SpiderMan />}
    </div>
  );
}

export default App;
