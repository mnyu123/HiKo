import { Link } from "react-router-dom";
import "../css/header.css";
import Button from "./button";
// 여기 컴포넌트에는 왼쪽 상단으로 프로젝트 이름, ?버튼이 존재할것.
export default function Header() {
  return (
    <header className="mw">
      <h1>
        순우리말 끄투
      </h1>
      <nav>
        <Link to="/end">마지막페이지</Link>
      </nav>
      <div>테스트</div>
    </header>
  );
}
