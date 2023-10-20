import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import "../css/second.css"; // second.css 파일을 가져옵니다.

import Timer from "../common/timer";

import TypingTitle from "./TypingTitle";
import { useNavigate } from "react-router-dom";


export default function Second({data}) {

  console.log("로딩테스트");

  // 인수값이 넘어왔는지 콘솔로 테스트
  // 빈 배열을 전달하여 이펙트가 한 번만 실행되도록 설정
  // 재할당(변수 내용 다시 바꾸는거)이 불가능한 변수 const 생성
  // currentQuestion: 현재 문제 번호
  // setCurrentQuestion: 현재 문제 번호를 변경하는 함수
  // useState(1): currentQuestion의 초기값을 1로 설정 = 무슨말이냐면 첫번째 문제를 보여주기 위해 1로 설정
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // progress: ProgressBar 진행률
  // setProgress: ProgressBar 진행률을 변경하는 함수
  // useState(0): progress의 초기값을 0으로 설정
  const [progress, setProgress] = useState(0); // ProgressBar 진행률 상태

  // answer: 사용자의 답변
  // setAnswer: 답변을 변경하는 함수
  const [answer, setAnswer] = useState(""); // 사용자의 답변

  const [timeLeft, setTimeLeft] = useState(300);

  const [input, setInput] = useState(""); // 입력 창의 상태

  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);


  const [Score, setScore] = useState(0);
  const Navigate = useNavigate();



 

  const clearInput = () => {
    setInput("");
    setAnswer("");
    setIsAnswerCorrect(null);
  };
  console.log("스코어",Score);

  useEffect(() => {
    // console.log("처음 timeleft 세팅된 시간", timeLeft);
  }, [timeLeft,Score]); // timeLeft 값이 변경될 때만 실행
  // API를 추가하고 나서는 여기가 변수처럼 변해야 할듯
  // questions: 문제 목록

  // const questions = [
  //   {
  //     number: "첫 번째",
  //     content: "어떤 일이 이루어지기를 기다리는 간절한 마음",
  //   },
  //   { number: "두 번째", content: "모르는 사이에 조금씩 조금씩." },
  //   { number: "세 번째", content: data.definition },
  // ];
  const questions = [
    { number: "첫번쨰" },
    { number: "두번째" },
    { number: "세번째" },
    { number: "네번째" },
    { number: "다섯번째" },
    { number: "여섯번째" },
    { number: "일곱번째" },
    { number: "여덟번째" },
    { number: "아홉번째" },
    { number: "열번째" },
  ];
  //데이터리스트 만큼만 for문이 작동됨
  if (data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      questions[i] = {
        number: questions[i].number,
        contents: data[i].definition,
      };

    }  
}
    

  // 만약 문제를 다 풀거나 1번문제 이전으로 돌아가려고 하면
  const showAlertMessage1 = () => {
    alert("이것이 첫번째 문제입니다!");
  };

  // 마지막 문제를 만나고 정답을 체크했을때
  const showAlertMessage2 = () => {
    alert("이것이 마지막 문제입니다!");
  };

  const initialTime = 300;

  const resetTimer = () => {
    setTimeLeft(0);
  };

  // 다음 문제로 넘어가는 함수
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(0); // ProgressBar 초기화
      resetTimer();

      clearInput();

      setIsAnswerCorrect(false);

      // TypingTitle 컴포넌트의 내용 초기화
      setInput(""); // input 초기화
    } else {
      // 마지막 문제입니다 출력 후 다음 컴포넌트로 이동 예정
      showAlertMessage2();
    }
  };

  // 이전 문제로 넘어가는 함수
  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(0); // ProgressBar 초기화
      resetTimer();

      clearInput();

      setIsAnswerCorrect(false);

      // TypingTitle 컴포넌트의 내용 초기화
      setInput(""); // input 초기화
    } else {
      // 첫번째 문제임을 알려줌
      showAlertMessage1();
    }
  };

  // 답변을 입력하는 함수
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  if (data&&data.length>0) {
    console.log("currque",data[currentQuestion-1].word);
    
  }
  // 답변을 전송하는 함수
  const submitAnswer = () => {
    // 여기에서 입력한 답변을 처리하거나 확인할 수 있습니다.
    // 예를 들어, 정답을 확인하고 결과를 표시하거나 다음 문제로 넘어갈 수 있습니다.
    // 현재는 단순히 콘솔에 답변을 출력하는 예시입니다.
    // console.log("사용자의 답변:", answer);

    // const currentAnswer = data[currentQuestion - 1].word;

    
console.log("input test",input===data[currentQuestion-1].word);
// 조건비교 성공시 nextque score +1
console.log("cuQ",currentQuestion);
if(input=== data[currentQuestion-1].word){
  setScore((state)=>{


    const num =state+=1
    if (data.length === currentQuestion) {

      Navigate("/end", {state : {score : state}});
    }
return num;
  });
  
  
  nextQuestion();

  

    // 페이지가 다시 로딩되지 않도록 아래 두 줄을 추가
    setProgress(100);
    resetTimer();
}

    // 만약 모든 문제를 푸는 동작을 추가하고자 한다면 여기에서 처리할 수 있습니다.
  };
  
  const handleTimeExpired = () => {
    // 현재 문제 번호가 문제 목록의 마지막이 아니면 다음 문제로 넘어감
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(0); // ProgressBar 초기화
      setAnswer("");
      setIsAnswerCorrect(false);

      resetTimer();
    } else {
      if (currentQuestion === questions.length) {
        alert("마지막 문제입니다.");
      } else if (currentQuestion === questions.length - 1) {
        alert("이것이 세 번째 문제입니다: '" + questions[2].content + "'");
      } else {
        alert("제발 동작해 주세요 다음문제로 가라고 마지막문제 말고!!");
      }
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
            {questions[currentQuestion - 1].contents ? (
              <TypingTitle
                content={questions[currentQuestion - 1].contents}
                input={input}
              />
            ) : (
              <div>로딩중</div>
            )}
            의 뜻은?
          </div>
        </div>
        {/* 부트 스트랩 프로그레스 바 사용 | math.round는 정수로 계산이고 */}
        {/* 프로그레스바 1초씩 증가하는 연산 */}
        <Timer
          initialTime={initialTime}
          onTimeExpired={handleTimeExpired}
          resetTimer={resetTimer}
        />{" "}
        {/* ProgressBar 컴포넌트 사용 */}
        {/* 여기는 정답을 고르는 선택 버튼들 */}
        {/* API가 도입되면 여기도 변수를 받아들이는 구조로 변경되어야 할것. */}
        <div className="answers">
          <input
            className="answer-input"
            type="text"
            value={answer}
            onChange={(e) => {
              setInput(e.target.value); // 입력이 변경될 때 input 상태 업데이트
              handleAnswerChange(e); // 기존의 handleAnswerChange 함수 호출
            }}
            placeholder="답변을 입력하세요"
          />
          <button onClick={submitAnswer} className="btn-answer">
            ↵
          </button>
          {/* <button onClick={nextQuestion} className="btn-answer">
            다음 문제
          </button>
          <button onClick={prevQuestion} className="btn-answer">
            이전 문제
          </button> */}
        </div>
        {isAnswerCorrect === true && (
          <div className="answer-feedback">
            정답입니다! 다음 문제로 진행하세요.
          </div>
        )}
        {isAnswerCorrect === false && isAnswerCorrect !== null && (
          <div className="answer-feedback">틀렸습니다. 다시 시도하세요.</div>
        )} 
      </div>
    </body>
  );
}

