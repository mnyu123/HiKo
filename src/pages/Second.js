import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import "../css/second.css"; // second.css 파일을 가져옵니다.

import CustomProgressBar from "../common/Progressbar";

export default function Second() {
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

  // answer: 사용자의 답변
  // setAnswer: 답변을 변경하는 함수
  const [answer, setAnswer] = useState(""); // 사용자의 답변

  // API를 추가하고 나서는 여기가 변수처럼 변해야 할듯
  // questions: 문제 목록
  const questions = [
    { number: "첫 번째", content: "어 떤 일이 이루어지기를 기다리는 간절한 마음." },
    { number: "두 번째", content: "모 르는 사이에 조금씩 조금씩." },
    { number: "세 번째", content: "땔 감이 되는 나무붙이." },
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
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, currentQuestion]);

  // 만약 문제를 다 풀거나 1번문제 이전으로 돌아가려고 하면
  const showAlertMessage1 = () => {
    alert("이것이 첫번째 문제입니다!");
  };

  // 마지막 문제를 만나고 정답을 체크했을때
  const showAlertMessage2 = () => {
    alert("이것이 마지막 문제입니다!");
  };

  // 다음 문제로 넘어가는 함수
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(0); // ProgressBar 초기화
      setTimeLeft(300); // 카운트다운 초기화
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
      setTimeLeft(300); // 카운트다운 초기화
    } else {
      // 첫번째 문제임을 알려줌
      showAlertMessage1();
    }
  };

  // 답변을 입력하는 함수
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // 답변을 전송하는 함수
  const submitAnswer = () => {
    // 여기에서 입력한 답변을 처리하거나 확인할 수 있습니다.
    // 예를 들어, 정답을 확인하고 결과를 표시하거나 다음 문제로 넘어갈 수 있습니다.
    // 현재는 단순히 콘솔에 답변을 출력하는 예시입니다.
    console.log("사용자의 답변:", answer);

    // 만약 모든 문제를 푸는 동작을 추가하고자 한다면 여기에서 처리할 수 있습니다.
  };

  // 타이핑 효과 컴포넌트

  const TypingTitle = ({ content }) => {
    const [apiwords, setApiwords] = useState("");
    const [isComplete, setIsComplete] = useState(false);
  
    useEffect(() => {
      let count = 0;
      const typingInterval = setInterval(() => {
        if (count < content.length-1) {
          setApiwords((prevTitleValue) => prevTitleValue + content[count]);
          count++;
        } else {
          setIsComplete(true);
          clearInterval(typingInterval);
        }
      }, 100);
  
      return () => {
        clearInterval(typingInterval);
        
      };
    }, [content]);
  
    return (
      <h1 className="main-title">
        {isComplete ? content : apiwords}
      </h1>
    );
  };











  // const TypingTitle = ({ content }) => {
  //   const [typedContent, setTypedContent] = useState("");
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     let typingInterval;

  //     const typeNextCharacter = () => {
  //       if (count < content.length) {
  //         setTypedContent((prevContent) => prevContent + content[count]);
  //         setCount(count + 1);
  //       } else {
  //         clearInterval(typingInterval); // 타이핑 완료 후 clearInterval
  //       }
  //     };

  //     typingInterval = setInterval(typeNextCharacter, 100); // 타이핑 속도 조절 가능

  //     return () => {
  //       clearInterval(typingInterval);
  //     };
  //   }, [content, count]);

  //   return <div className="typing-title">{typedContent}</div>; // Add a CSS class to style the typing text
  // };

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
            <TypingTitle content={questions[currentQuestion-1].content} />의
            뜻은?
          </div>
        </div>
        {/* 부트 스트랩 프로그레스 바 사용 | math.round는 정수로 계산이고 */}
        {/* 프로그레스바 1초씩 증가하는 연산 */}
        <CustomProgressBar
          now={Math.round(((300 - timeLeft) / 100) * 100)}
        />{" "}
        {/* ProgressBar 컴포넌트 사용 */}
        {/* 여기는 정답을 고르는 선택 버튼들 */}
        {/* API가 도입되면 여기도 변수를 받아들이는 구조로 변경되어야 할것. */}
        <div className="answers">
          <input
            className="answer-input"
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="답변을 입력하세요"
          />
          <button onClick={submitAnswer} className="btn-answer">
            ↵
          </button>
          <button onClick={nextQuestion} className="btn-answer">
            다음 문제
          </button>
          <button onClick={prevQuestion} className="btn-answer">
            이전 문제
          </button>
        </div>
      </div>
    </body>
  );
}