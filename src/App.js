import "./App.css";
import { Route, Routes } from "react-router-dom";
import End from "./pages/End";
import Header from "./common/header";
import Button from "./common/button";
import Second from "./pages/Second";  

function App() {
  return (
    <body>
      {/* Header 컴포넌트는 왼쪽 상단위 로고 , ?버튼 존재할것. */}
      <Header />
      {/* 헤더 + 게임 시작 버튼이 있는 컴포넌트 */}
      <Button />
      {/* 페이지 이동 : react-router-dom */}
      <Routes>
        {/* end는 마지막 페이지로 이동 */}
        
        <Route path="/end" element={<End />} />
        <Route path="/second" element={<Second />} />
      </Routes>

    </body>
  );
}

export default App;
