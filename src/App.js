import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import First from "./pages/First";
import Second from "./pages/Second";
import End from "./pages/End";
import axios from "axios";
// 파일이름 변경 성공
// API URL
const URL =
  "https://opendict.korean.go.kr/api/search?key=C2ED6617C9321CF93331CDDF29014A59&q=%20&req_type=json&type1=proverb&advanced=y&sort=popular&methob=start&num=10";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      // setData({DataList});
      setLoading(true);

      const response = await axios.get(URL);
      // API 응답에서 "item" 배열을 가져옴
      const items = response.data.channel.item;
      // const word = items[0].word;
      // const definition = items[0].sense[0].definition;

      //  setData({ word, definition });

      const DataList = items.map((list, i) => ({
        word: list.word,
        definition: list.sense[0].definition,
      }));

      setData(DataList);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }

    console.log(data);
  }, [data]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  // if (!data.word || !data.definition) return null;

  //  console.log("app.js에서 테스트 단어:",data.word);
  //  console.log("app.js에서 테스트 뜻:",data.definition);
  // console.log(data.length);

  return (
    <>
      {/* 1. body 요소는 컴포넌트 안에 사용하지 않습니다. public>index.html의 body에 랜더딩 되기 때문입니다. */}
      {/* 2. Routes 외부에 작성되는 컨포넌트는 모든 페이지마다 노출되는 부분입니다. 페이지 전환 시 안보이게 처리하고 싶다면 route를 분리해서 작성해 보세요*/}
      {/* 3. flow 를 이해할 있는 wireframe이나 ppr를 활용해 storybord를 함께 보여주시면 의도를 정확하게 파악할 수 있을 것 같습니다~  */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/end" element={<End />} />
        <Route path="/second" element={<Second data={data} />} />
      </Routes>
    </>
    //
  );
}

export default App;
// button.js , End.css 파일이름 수정함.