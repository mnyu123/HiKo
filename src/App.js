import "./App.css";
import { Route, Routes } from "react-router-dom";
import End from "./pages/End";
import Header from "./common/header";
import Button from "./common/button";

function App() {
  return (
    <body>
      <div className="App">
        {/* Header 컴포넌트는 왼쪽 상단위 로고 , ?버튼 존재할것. */}
        <Header />
        {/* 버튼 컴포넌트 */}
        <Button />
        {/* 밑에는 이동할 페이지들 */}
        
      </div>

      <Routes>
          {/* end는 마지막 페이지로 이동 */}
          <Route path="/end" element={<End />} />
        </Routes>
    </body>
  );
}

export default App;
