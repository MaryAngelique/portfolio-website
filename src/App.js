import "./App.css";
import {
    Routes, 
    Route 
} from "react-router-dom";

import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div>
      <div className="portfolio-website">
        <Routes>
          <Route index path="/" element={<Navigation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
