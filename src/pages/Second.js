import { Link } from "react-router-dom";

export default function Second() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");
  return (
    <body>
      <h1>두번째 문제나오는 페이지</h1>
      <Link to="/">첫페이지 이동</Link>
    </body>
  );
}