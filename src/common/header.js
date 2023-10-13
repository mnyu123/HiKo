import { Link } from "react-router-dom";
import "../css/header.css";
import Button from "./Button";
import Modal from "react-modal";
import React, { useState } from 'react';
// 여기 컴포넌트에는 왼쪽 상단으로 프로젝트 이름, ?버튼이 존재할것.

export default function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className="mw">
      
    <div className="help">
      <button onMouseEnter={()=> setModalIsOpen(true)}>?</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        여기서 도움말 내용을 작성하시면 됩니다.<br/>
        <button onClick={() => setModalIsOpen(false)}>닫기</button>
      </Modal>
    </div>
    
      <h1>
        히코
      </h1>


      <nav>
        <Link to="/end">마지막페이지</Link>
      </nav>
    </header>
  );
}
