import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/listSlice";
import { RootState } from "../store/store";
import styled from "styled-components";

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

const Ul = styled.ul`
  margin: 10px;
  padding-left: 10px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

const TodoList = () => {
  const list = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch();

  return (
    <>
      <Ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <Button onClick={() => dispatch(removeItem(item.id))}>삭제</Button>
          </li>
        ))}
      </Ul>
    </>
  );
};

export default TodoList;
