import { useEffect, useState } from "react";

import React from "react";

function TypingTitle({ content }) {
  const [typedContent, setTypedContent] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let typingInterval;

    const typeNextCharacter = () => {
      if (count < content.length) {
        setTypedContent((prevContent) => prevContent + content[count]);
        setCount(count + 1);
      } else {
        clearInterval(typingInterval); // 타이핑 완료 후 clearInterval
      }
    };

    // 타이핑을 시작하는 조건 추가
    if (content !== typedContent) {
      typingInterval = setInterval(typeNextCharacter, 100);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [content, count]);

  return <div className="typing-title">{typedContent}</div>; 
}
export default TypingTitle;