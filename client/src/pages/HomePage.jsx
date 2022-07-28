import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Header,
  Icon,
  Image,
  Input,
  Modal,
} from "semantic-ui-react";
import Web3 from "web3/dist/web3.min.js";
import Governence from "../abi/Governence.json";
import connector from "../services/connector";
import getNFTs from "../services/tatum";

const HomePage = () => {
  const web3 = new Web3();
  const [nftData, setNftData] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState();
  const [loading, setLoading] = useState(true);
  const [contract, setContract] = useState();
  const { active, library, account, activate } = useWeb3React();
  const [query, setQuery] = React.useState(
    "0xc4ea80deCA2415105746639eC16cB0cF8378996A"
  );

  const GOVERNENCE_ADDRESS = "0xe442f72b802bbcf7b3ec7b90278becc2fc46985c";

  useEffect(() => {
    if (active) {
      const res = new library.eth.Contract(Governence, GOVERNENCE_ADDRESS);
      setContract(res);
    }
  }, [active]);

  useEffect(() => {
    console.log("useEffect", library);
    if (web3.utils.isAddress(query) && query != "") {
      setLoading(true);
      getNFTs(query).then((data) => {
        setNftData(data);
        setLoading(false);
      });
    }
  }, [query]);

  const handlePropose = async () => {
    if (!active) activate(connector);
    setSelectedNFT(null);
    // const functionalData = library.eth.abi.encodeFunctionCall(
    //   {
    //     name: "transferFrom",
    //     type: "function",
    //     inputs: [
    //       {
    //         type: "address",
    //         name: "myNumber",
    //       },
    //       {
    //         type: "uint256",
    //         name: "myString",
    //       },
    //     ],
    //   },
    //   ["2345675643", "Hello!%"]
    // );
    const data = await contract.methods
      .propose(
        ["0xe442f72B802BBcF7b3ec7b90278BecC2Fc46985c"],
        [0],
        ["0xf"],
        "TEST Proposal #1"
      )
      .send({ from: account, gas: "35000000" });
    console.log(data);
  };

  return (
    <div>
      <Header as="h1">Semantic UI React Fixed Template</Header>
      <br />
      <br />
      <br />
      <Container>
        <Input
          fluid
          icon="search"
          placeholder="Search..."
          size="massive"
          loading={loading}
          error={
            web3.utils.isAddress(query)
              ? false
              : {
                  content: "Please enter a valid contract address",
                  pointing: "below",
                }
          }
          onChange={(e, { value }) => setQuery(value)}
        />
      </Container>
      <br />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card.Group
          style={{
            padding: 100,
          }}
        >
          {nftData.map((nft) => {
            return (
              <Card
                onClick={() => {
                  setSelectedNFT(nft);
                }}
              >
                <Image src={nft.metadata.metadata.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{nft.tokenId}</Card.Header>
                  <Card.Meta>
                    <span className="date">{nft.metadata.metadata.date}</span>
                  </Card.Meta>
                  <Card.Description>
                    {nft.metadata.metadata.description}
                  </Card.Description>
                  {/* <Card.Content>

                    </Card.Content> */}
                </Card.Content>
                <Card.Content extra>
                  <a
                    className="ellipsis"
                    href={`https://mumbai.polygonscan.com/address/${nft.contract_address}#internaltx`}
                    target="_blank"
                  >
                    <Icon name="external" />
                    {nft.contract_address}
                  </a>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      )}
      {selectedNFT && (
        <Modal open={selectedNFT !== null}>
          <Modal.Header>{selectedNFT.metadata.metadata.name}</Modal.Header>
          <Modal.Content image>
            <Image
              size="medium"
              src={selectedNFT.metadata.metadata.image}
              wrapped
            />
            <Modal.Description>
              {selectedNFT.metadata.metadata.description}
              <br />
              <br />
              <br />
              <p>Would you like to create proposal to buy this NFT?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setSelectedNFT(null)}>Cancel</Button>
            <Button onClick={handlePropose} positive>
              Propose
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
