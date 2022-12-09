import { useEffect, useState } from "react";

function Hello() {
  /*
    function destroyFn() {
        console.log("destroyed :(");
    }
    function createFn() {
        console.log("created :)");
    }
*/
  useEffect(() => {
    console.log("created :)");
    return () => {
      console.log("destroyed :(");
    }; // 위의 두 함수가 축약 됨
  }, []);
  return <h1>Hello</h1>;
}

function CleanUp() {
  const [view, setView] = useState(false);

  function OnClick() {
    setView((current) => !current);
  }

  return (
    <div>
      {view ? <Hello /> : null}
      <button onClick={OnClick}>{view ? "SHOW" : "HIDE"}</button>
    </div>
  );
}

export default CleanUp;
