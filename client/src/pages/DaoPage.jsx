import React, {useState, useEffect} from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import { useWeb3React } from "@web3-react/core";
import Governence from "../abi/Governence.json";
function DaoPage() {
  const GOVERNENCE_ADDRESS = "0xe442f72b802bbcf7b3ec7b90278becc2fc46985c";
  const [contract, setContract] = useState();
  const { active, library, account, activate } = useWeb3React();
  useEffect(() => {
    if (active) {
      const res = new library.eth.Contract(Governence, GOVERNENCE_ADDRESS);
      setContract(res);
    }
  }, [active]);


  return (
    <div>
      <Container text style={{ paddingTop: "7em" }}>
        <Header as="h1">Select a Function</Header>
        <Button
          color="purple"
          content="Create a Proposal"
          style={{ marginTop: "1em", marginBottom: "1em" }}
        />
        {/* <br /> */}
        <Button color="purple" content="Vote" style={{ marginBottom: "1em" }} />
        {/* <br /> */}
        <Button
          color="purple"
          content="View Proposals"
          style={{ marginBottom: "1em" }}
        />
        <br />
        <br />
        <br />
        <Header as="h2" textAlign="left">
          Active Propsals
        </Header>
        <Segment color="purple">
          <Header as="h4" textAlign="left">
            Buy BAYC
          </Header>
          <table>
            <tr>
              <td>
                <p style={{ textAlign: "left",}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </td>
              <td>
                <Button.Group vertical>
                  <Button color="purple">For</Button>
                  <Button basic color="purple">Against</Button>
                </Button.Group>
              </td>
            </tr>
          </table>
        </Segment>
        <Segment color="grey" disabled>
          <Header as="h4" textAlign="left">
            Buy BAYC
          </Header>
          <table>
            <tr>
              <td>
                <p style={{ textAlign: "left",}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </td>
              <td>
                <Button.Group vertical>
                  <Button color="grey" disabled>For</Button>
                  <Button basic color="grey" disabled>Against</Button>
                </Button.Group>
              </td>
            </tr>
          </table>
        </Segment>
      </Container>
    </div>
  );
}

export default DaoPage;
