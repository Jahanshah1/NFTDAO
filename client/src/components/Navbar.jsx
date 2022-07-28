import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { useWeb3React } from "@web3-react/core";
import connector from "../services/connector";

function Navbar() {
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  const connect = () => {
    activate(connector);
    window.localStorage.setItem("auth", true);
  };

  const disconnect = () => {
    window.localStorage.setItem("auth", "");
    deactivate();
  };

  console.log(window.localStorage.getItem("auth"));

  useEffect(() => {
    const provider = window.localStorage.getItem("auth");
    if (provider) activate(connector);
  }, []);

  return (
    <Menu fixed="top" size="massive" inverted color="purple">
      <Container>
        <Link to="/">
          <Menu.Item as="a" header>
            NFT DAO
          </Menu.Item>
        </Link>
        <Menu.Item as="a">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/dao">DAO</Link>
        </Menu.Item>
        <Menu.Item as="a">About</Menu.Item>
        {!active || window.localStorage.getItem("auth") == "" ? (
          <Button basic onClick={connect} inverted className="right item">
            Connect Wallet
          </Button>
        ) : (
          <Button basic onClick={disconnect} inverted className="right item">
            Disconnect
          </Button>
        )}
      </Container>
    </Menu>
  );
}

export default Navbar;
