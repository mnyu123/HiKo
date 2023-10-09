import "./App.css";
import { Route, Routes } from "react-router-dom";
import End from "./pages/End";
import Header from "./common/header";
import Button from "./common/button";

function App() {
  return (
    <body>
      {/* Header 컴포넌트는 왼쪽 상단위 로고 , ?버튼 존재할것. */}
      <Header />
      <div className="App">
        <h1 class="game-title">맞추기 게임</h1>
        {/* 버튼 컴포넌트 */}
        <Button />
        {/* 밑에는 이동할 페이지들 */}
        <Routes>
          {/* end는 마지막 페이지로 이동 */}
          <Route path="/end" element={<End />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
