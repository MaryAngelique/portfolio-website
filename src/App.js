import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <Routes>
        <Route path="/">
            <Route path="navigation" element={Navigation}/>
        </Route>
    </Routes>
  );
}

export default App;
