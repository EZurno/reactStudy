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
    </div>
  );
}

export default ToDoList;
