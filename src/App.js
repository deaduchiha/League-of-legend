import "./App.css";

import { Routes, Route } from "react-router-dom";

// Components
import Landing from "./screen/Landing/Landing";
import Game from "./screen/Game/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/GAME" element={<Game />} />
    </Routes>
  );
}

export default App;
