import AddList from "./AddList";
import TodoList from "./TodoList";
import styled from "styled-components";

const Body = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid #fff;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const List = () => {
  return (
    <Body>
      <Header>
        <AddList />
      </Header>
      <TodoList />
    </Body>
  );
};

export default List;
