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
            Buy DAOPOLIS citizen 
          </Header>
          <table>
            <tr>
              <td>
                <p style={{ textAlign: "left",}}>
                  DAOPOLIS citizen NFT collection is initialising great utility at the moment and introducing a new staking system for their ecosystem.
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
                  Due to current market conditions BAYC seems to have gone down in price a bit, seems like a perfect opportunity to sweep some nfts off the floor.
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
