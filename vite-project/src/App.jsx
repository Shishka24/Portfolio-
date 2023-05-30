import React from "react";
import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";
import Who from "./Components/Who";
import Works from "./Components/Works";
import styled from "styled-components";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url("/img/programming.jpg");
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}
export default App;
