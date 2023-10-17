import React, { useState, useEffect } from 'react';
import "../css/popup.css";
export default function Popup()
{
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
    }, []);

    const handleMouseEnter = () => {
    setIsMouseOver(true);
    };
    const handleMouseLeave = () => {
    setIsMouseOver(false);
    };

    return (  
    <span className='helpbox'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {isMouseOver && (
          <div
          style={{
            position: 'fixed', // Fixed position to keep it on the screen
            top: position.y + 10,
            left: position.x + 10,
          }}
          >
          나오는 문제에 따라 주관식으로 푸는 문제입니다.<br/>
          총 문제는 3문제이고 제한시간은 300초 입니다.
        </div>
      )}
        ?</span>
    );
}