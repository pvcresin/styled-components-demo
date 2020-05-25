import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function App() {
  return (
    <div>
      <Title>Hello World!</Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>TomatoButton</TomatoButton>
    </div>
  );
}

const Title = styled.h1`
  color: red;
`;

const Button = styled.button`
  color: blue;
  background: ${(props) => (props.primary ? "yellow" : "cyan")};

  &:hover {
    color: red;
  }
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;

ReactDOM.render(<App />, document.getElementById("root"));
