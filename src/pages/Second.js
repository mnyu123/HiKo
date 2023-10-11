import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import "../css/second.css"; // second.css 파일을 가져옵니다.

export default function Second() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");

  const [currentQuestion, setCurrentQuestion] = useState(1);

  // API를 추가하고 나서는 여기가 변수처럼 변해야 할듯
  const questions = [ 
    { number: "첫 번째", content: "첫 번째 문제의 내용" },
    { number: "두 번째", content: "두 번째 문제의 내용" },
    { number: "세 번째", content: "세 번째 문제의 내용" },
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <body>
      <Header />
      <div className="container">
        <div className="question-container">
          <div className="question-number">{`${
            questions[currentQuestion - 1].number
          } 문제`}</div>
          <div className="question-content">
            {questions[currentQuestion - 1].content}
          </div>
        </div>
        <div className="answers">
          <p>정답1</p>
          <p>정답2</p>
          <p>정답3</p>
        </div>
        <button onClick={nextQuestion}>다음 문제</button>
      </div>
      {/* <Link to="/">첫페이지 이동</Link> */}
    </body>
  );
}
