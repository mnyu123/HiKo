import { Link } from "react-router-dom";
import "../css/header.css";
import Button from "./Button";
import Popup from "./Popup";  //도움말 표시를 위한 팝업창 따로 생성함
// 여기 컴포넌트에는 왼쪽 상단으로 프로젝트 이름, ?버튼이 존재할것.

export default function Header() {

  return (
    <header className="mw">
      <span className="projectName">Hiko</span>
      <h1>
        히코 <Popup/>
      </h1>

      <nav>
        <Link to="/end">마지막페이지</Link>
      </nav>
    </header>
  );
}
