import React from "react";
import styled from "styled-components";
import Router from "./route/Router";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
