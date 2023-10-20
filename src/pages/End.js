import React from "react";
import "../css/end.css";
import { Link } from "react-router-dom";

export default function End() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");
  return (
    <body>
      <div class="end-container">
        <div class="testpapername">
          <div class="titlearea">
          <div class="bigtesttitlearea">2023학년도 대학수학능력시험 문제지</div>
          <div class="testtitlearea">상식 영역</div>
          </div>
          <div class="namenumber">
            <div class="studentname">
              성명 : <input type="text"></input>
              </div>
              <div class="studentnumber">
              수험번호 : <input type="text" class="partnum2"></input>
              </div>
          </div>
        </div>
        <div class="titleendboxcontainer">
          <br></br>
        </div>
        <br></br>
        <div>
          <div class="result-message">게임이 종료되었습니다.</div>
          <div class="score">
            당신이 맞춘 개수는 <span id="score">?/10</span> 입니다.
          </div>
          <br></br>
        </div>
        <div>
          <a href="/HiKo" class="endpage-button">메인 화면으로</a>
          <a href="/HiKo" class="endpage-button">다시 풀어보기</a>
        </div>
      </div>
    </body>
  );
}
{
  /* <Link to="/">첫페이지 이동</Link> */
}
