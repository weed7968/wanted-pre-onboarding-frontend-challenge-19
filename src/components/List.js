import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/listSlice";

export default function List() {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue === "") return alert("입력해주세요");
    dispatch(addItem({ id: Date.now(), text: inputValue }));
    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>

            <button onClick={() => dispatch(removeItem(item.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
