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
    <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {isMouseOver && (
          <div
            style={{
              top: position.y + 10, // Adjust the position as needed
              left: position.x + 10, // Adjust the position as needed
            }}
          >
          팝업 내용
        </div>
      )}
        ?</span>
    );
}