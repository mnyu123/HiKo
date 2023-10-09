import "../css/end.css";
import { Link } from "react-router-dom";

export default function End() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");
  return (
    <body>
      <div class="result-message">게임이 종료되었습니다.</div>
      <div class="score">
        당신이 맞춘 개수는 <span id="score">?/10</span> 입니다.
      </div>
      <Link to="/">첫페이지 이동</Link>
    </body>
  );
}
