import "./App.css";
import { Route , Routes } from "react-router-dom";
import End from "./pages/End"


function App() {
  return (
    <body>
      <div className="App">
        <h1 class="game-title">맞추기 게임</h1>
        <div class="level-buttons">
          <button class="level-button" onclick="selectLevel(1)">
            레벨 1
          </button>
          <button class="level-button" onclick="selectLevel(2)">
            레벨 2
          </button>
          <Routes>
          <Route path="/end" element={<End/>} />
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
