import List from "./components/List";
import styled from "styled-components";

const Body = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
  padding-top: 50px;
`;

function App() {
  return (
    <Body>
      <List />
    </Body>
  );
}

export default App;
