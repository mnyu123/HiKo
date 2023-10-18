import { useEffect, useState } from "react";

import React from "react";

function TypingTitle({ content }) {
  const [typedContent, setTypedContent] = useState("");
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(content.length);

  useEffect(() => {
    let typingInterval;
    console.log("인터벌 초기화 테스트",typedContent);
    console.log("인터벌 count 테스트",count);

    const typeNextCharacter = () => {
      if (count < content.length) {
        setTypedContent((prevContent) => prevContent + content[count]);
        setCount(count + 1);
      } else {
        clearInterval(typingInterval); // 타이핑 완료 후 clearInterval
        setTypedContent("");
        setCount(0);
      }
    };

    // 타이핑을 시작하는 조건 추가
    if (content !== typedContent) {
      typingInterval = setInterval(typeNextCharacter, 100);
    }
    // content.length 와 useState가 관리하는 size
    // 왜 다른가 ? = 
    // content.length는 초기값 첫번째 문제 24자 그걸 갖고있음
    // useState의 size는 이전 데이터를 가지고 비교
    // 이전데이터? = content.length가 바뀌기 전의 데이터
    // 그래서 size가 content.length보다 작을때만 초기화
    if(size!==content.length){
      setSize(content.length);
      setTypedContent("");
      setCount(0); //이게 초기화
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [content, count]);

  return <div className="typing-title">{typedContent}</div>; 
}
export default TypingTitle;