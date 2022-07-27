import React from "react";
import { Link } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu fixed="top" size="massive" inverted color="purple">
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            NFT DAO
          </Menu.Item>
        </Link>
        <Menu.Item as="a" position="right">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/dao">DAO</Link>
        </Menu.Item>
        <Menu.Item as="a">About</Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
