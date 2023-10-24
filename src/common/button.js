import { useNavigate } from "react-router-dom";
import "../css/button.css";
export default function Button() {
  // 페이지 이동을 위해 상수 선언
  const moveEndPage = useNavigate();

  const moveSecondPage = useNavigate();

  // 레벨2 버튼시 end페이지로 이동
  function goEnd(){
    alert ("업데이트 예정입니다!");
  }

  function goSecond(){
    moveSecondPage("/second");
  }
  return (
    <div class="level-buttons">
          <button class="level-button" onClick={goSecond}>
            매운맛 난이도
          </button>
          <button class="level-button" onClick={goEnd}>
            순한맛 난이도
          </button>
    </div>
  );
}
