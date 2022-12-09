import { useEffect, useState } from "react";

function UseEffect() {
  let [number, setNumber] = useState(0);
  let [keyword, setKeyword] = useState("");

  function Clicked() {
    setNumber((current) => current + 1);
  }

  function Searching(event) {
    setKeyword(event.target.value);
  }

  console.log("Any Times");
  // Clicked가 실행되면 다시 자동 실행 됨
  //하지만 API에서 굳이 다시 가져올 필요가 없음

  function OnlyOne() {
    console.log("Only one.");
  }

  useEffect(OnlyOne, []);
  //API에서 중복으로 가져오는 일을 방지하기 위해 useEffect 함수 사용
  //useEffect(functionName, Caution value Array array 속 value 가 변할 때만 작동);

  useEffect(() => {
    if (3 < keyword.length && keyword !== "") console.log(keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("Changedd number & keyword");
  }, [keyword, number]);

  return (
    <div>
      <input
        value={keyword}
        onChange={Searching}
        placeholder="Search..."
      ></input>
      <h1>{number}</h1>
      <button onClick={Clicked}>click me</button>
    </div>
  );
}

export default UseEffect;
