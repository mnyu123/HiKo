import { Link } from "react-router-dom";
import "../css/button.css";
export default function Button() {
  return (
    <div class="level-buttons">
          <button class="level-button" onclick="selectLevel(1)">
            레벨 1
          </button>
          <button class="level-button" onclick="selectLevel(2)">
            레벨 2
          </button>
    </div>
  );
}
