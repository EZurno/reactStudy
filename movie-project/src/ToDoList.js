import { useState } from "react";
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // default 로 toDo를 담는 기본 array

  function onChange(event) {
    setToDo(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    //toDos Array 를 currnet Array 값을 지속적으로
    // toDo + ...로 현재 currentdhk 와 합쳐줌 (Array)
  }

  return (
    <div>
      <h1> My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        ></input>
        <button>Add To Do</button>
      </form>
      <ul>
        {toDos.map((items, index) => (
          <li key={index}>{items}</li>
          /* <li> 는 고유 key 값을 입력해야 하므로
            map의 argument 값을 받아 key값으로 사용
           */
        ))}
      </ul>
      {/* {toDos.map((items) => items.toUpperCase())} */}
      {/* items로 index value 를 받아 upperCase 사용 */}
      {/* {toDos.map(() => ":)")} */}
      {/* 
        toDos Array 내 index 의 값을 모두 수정 가능
        ex) array.length 가 6 이면 6회 반복
        */}
    </div>
  );
}

export default ToDoList;
