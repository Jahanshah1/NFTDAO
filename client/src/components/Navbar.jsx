import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu fixed="top" size="massive" inverted color="purple">
      <Container>
        <Menu.Item as="a" header>
          NFT DAO
        </Menu.Item>
        <Menu.Item as="a" position="right">
          Home
        </Menu.Item>
        <Menu.Item as="a">DAO</Menu.Item>
        <Menu.Item as="a">About</Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
