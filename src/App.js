import React from "react";
import styled from "styled-components";
import "./style.css";

export default function App() {
  return (
    <div>
      <Wrapper>
        <Title>Hello World!</Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  padding: 4em;
  background: cyan;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Button = styled.button`
  color: white;
  background: ${(props) => (props.primary ? "blue" : "red")};
`;
