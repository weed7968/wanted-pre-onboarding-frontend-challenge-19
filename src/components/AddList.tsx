import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/listSlice";
import styled from "styled-components";

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

const AddList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue === "") return alert("입력해주세요");
    dispatch(addItem({ id: Date.now(), text: inputValue }));
    setInputValue("");
  };

  return (
    <>
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Button onClick={handleAdd}>추가</Button>{" "}
    </>
  );
};

export default AddList;
