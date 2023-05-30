import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  /* background-color: rebeccapurple; */
`;
const Links = styled.div``;
const List = styled.ul``;
const ListItem = styled.li``;
const Icons = styled.div``;
const Icon = styled.img`
  width: 50px;
`;
const Button = styled.button``;
const Logo = styled.img`
  width: 160px;
  border-radius: 25px;
`;
const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/img/logo-png.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="../../public/img/download.png" />
          <Button>Hire Now </Button>
        </Icons>
        NavBar
      </Container>
    </Section>
  );
};

export default NavBar;
