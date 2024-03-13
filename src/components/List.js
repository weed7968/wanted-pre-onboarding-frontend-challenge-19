import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/listSlice";
import styled from "styled-components";

const Body = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 10px;

  ul {
    margin: 10px;
    padding-left: 10px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #1e1e1e;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 20px;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: #4d90fe;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    border-color: #4d90fe;
  }
`;

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
    <Body>
      <Header>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleAdd}>추가</Button>
      </Header>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <Button onClick={() => dispatch(removeItem(item.id))}>삭제</Button>
          </li>
        ))}
      </ul>
    </Body>
  );
}
