import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import "../css/second.css"; // second.css 파일을 가져옵니다.

import CustomProgressBar from "../common/Progressbar";

export default function Second() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");

  // 재할당(변수 내용 다시 바꾸는거)이 불가능한 변수 const 생성
  // currentQuestion: 현재 문제 번호
  // setCurrentQuestion: 현재 문제 번호를 변경하는 함수
  // useState(1): currentQuestion의 초기값을 1로 설정 = 무슨말이냐면 첫번째 문제를 보여주기 위해 1로 설정
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // timeLeft: 남은 시간
  // setTimeLeft: 남은 시간을 변경하는 함수
  // useState(300): timeLeft의 초기값을 300으로 설정 = 5분(5 * 60초)
  const [timeLeft, setTimeLeft] = useState(300); // 5분(5 * 60초)

  // progress: ProgressBar 진행률
  // setProgress: ProgressBar 진행률을 변경하는 함수
  // useState(0): progress의 초기값을 0으로 설정
  const [progress, setProgress] = useState(0); // ProgressBar 진행률 상태

  // API를 추가하고 나서는 여기가 변수처럼 변해야 할듯
  // questions: 문제 목록
  const questions = [
    { number: "첫 번째", content: "바람" },
    { number: "두 번째", content: "시나브로" },
    { number: "세 번째", content: "나무" },
  ];

  useEffect(() => {
    if (timeLeft === 0) {
      // 시간이 0 이면 다음문제로 넘어감.
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(300); // 다음 문제로 이동할 때 시간 초기화
      }
    }

    // 1초마다 timeLeft를 1씩 감소시킴
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          // 시간이 다 끝났을 때 다음 문제로 이동하거나 필요한 작업을 수행
          if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setProgress(0); // ProgressBar 초기화
            return 300; // 카운트다운 초기화
          }
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, currentQuestion]);

  // 만약 문제를 다 풀거나 1번문제 이전으로 돌아가려고 하면
  const showAlertMessage1 = () => {
    alert('이것이 첫번째 문제입니다!');
  };

  // 마지막 문제를 만나고 정답을 체크했을때
  const showAlertMessage2 = () => {
    alert('이것이 마지막 문제입니다!');
  };

  // 다음 문제로 넘어가는 함수
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(0); // ProgressBar 초기화
      setTimeLeft(300); // 카운트다운 초기화
    }
    else{
      // 마지막 문제입니다 출력 후 다음 컴포넌트로 이동 예정
      showAlertMessage2();
    }
  };

  // 이전 문제로 넘어가는 함수
  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(0); // ProgressBar 초기화
      setTimeLeft(300); // 카운트다운 초기화
    }
    else{
      // 첫번째 문제임을 알려줌
      showAlertMessage1();
    }
  };

  return (
    <body>
      <Header />

      <div className="container">
        <div className="question-container">
          <div className="question-number">{`${
            // qusetions = 문제 목록
            // currentQuestion = 현재 문제 번호
            // 형태 = 1번째 + 문제 => 첫번째 문제 이렇게 된다.
            questions[currentQuestion - 1].number
          } 문제`}</div>
          <div className="question-content">
            {/* 문제 낼 단어들도 한개씩 불러서 온다 */}
            {`${questions[currentQuestion - 1].content} 
            의 뜻은?`}
          </div>
        </div>
        {/* 부트 스트랩 프로그레스 바 사용 | math.round는 정수로 계산이고 */}
        {/* 프로그레스바 1초씩 증가하는 연산 */}
        <CustomProgressBar
          now={Math.round(((300 - timeLeft) / 300) * 100)}
        />{" "}
        {/* ProgressBar 컴포넌트 사용 */}
        {/* 여기는 정답을 고르는 선택 버튼들 */}
        {/* API가 도입되면 여기도 변수를 받아들이는 구조로 변경되어야 할것. */}
        <div className="answers">
          <button onClick={nextQuestion} className="btn-answer">
            정답1
          </button>
          <button onClick={nextQuestion} className="btn-answer">
            정답2
          </button>
          <button onClick={prevQuestion} className="btn-answer">
            정답3
          </button>
        </div>
      </div>
    </body>
  );
}
