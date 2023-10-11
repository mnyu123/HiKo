import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import "../css/second.css"; // second.css 파일을 가져옵니다.

import CustomProgressBar from "../common/Progressbar";

export default function Second() {
  console.log("리액트 컴포넌트가 잘 연결되었습니다.");

  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [timeLeft, setTimeLeft] = useState(300); // 5분(5 * 60초)

  const [answers, setAnswers] = useState([]);
  const [progress, setProgress] = useState(0); // ProgressBar 진행률 상태


  useEffect(() => {
    if (timeLeft === 0) {
      // 시간이 다 끝났을 때 다음 문제로 이동하거나 필요한 작업을 수행합니다.
      if (currentQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(300); // 다음 문제로 이동할 때 시간 초기화
      }
    }

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

  // API를 추가하고 나서는 여기가 변수처럼 변해야 할듯
  const questions = [
    { number: "첫 번째", content: "바람" },
    { number: "두 번째", content: "두 번째 문제의 내용" },
    { number: "세 번째", content: "세 번째 문제의 내용" },
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(0); // ProgressBar 초기화
      setTimeLeft(300); // 카운트다운 초기화
    }
  };

  const prevQuestion = () => {
    if (currentQuestion <= questions.length) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(0); // ProgressBar 초기화
      setTimeLeft(300); // 카운트다운 초기화
    }
  };

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  // };

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
        <CustomProgressBar now={Math.round(((300 - timeLeft) / 300) * 100)} />{" "}
        {/* ProgressBar 컴포넌트 사용 */}
        {/* <div className="time-left">{formatTime(timeLeft)}</div> */}
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
