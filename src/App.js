import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [memos, setMemos] = useState([]);

  const onClickAdd = () => {
    setMemos([...memos, text]);
    setText(""); // 入力後、Stateをクリア
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onClickDelete = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };

  return (
    <div className="App">
      <h1>簡単メモアプリ</h1>
      <input
        type="text"
        id="input"
        value={text}
        onChange={onInputChange}
      ></input>
      <button onClick={onClickAdd}>追加</button>
      <div>
        {memos.map((memo, index) => (
          <div key={index}>
            <p>{memo}</p>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
