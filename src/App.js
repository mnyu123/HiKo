import "./App.css";
import { Route, Routes } from "react-router-dom";

import First from "./pages/First";
import Second from "./pages/Second";
import End from "./pages/End";
import Button from "./common/Button";

function App() {
  return (
    <>
      
      {/* 1. body 요소는 컴포넌트 안에 사용하지 않습니다. public>index.html의 body에 랜더딩 되기 때문입니다. */}
      {/* 2. Routes 외부에 작성되는 컨포넌트는 모든 페이지마다 노출되는 부분입니다. 페이지 전환 시 안보이게 처리하고 싶다면 route를 분리해서 작성해 보세요*/}
      {/* 3. flow 를 이해할 있는 wireframe이나 ppr를 활용해 storybord를 함께 보여주시면 의도를 정확하게 파악할 수 있을 것 같습니다~  */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/end" element={<End />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
