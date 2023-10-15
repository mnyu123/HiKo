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
          여기 도움말 내용을<br/>
          여기에 넣으시면 됩니다.
        </div>
      )}
        ?</span>
    );
}