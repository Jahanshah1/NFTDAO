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


import getNFTs from "../services/tatum";

const HomePage = () => {
  const web3 = new Web3();
  const [nftData, setNftData] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState();
  const [loading, setLoading] = useState(true);
  const { library } = useWeb3React();
  const [contract, setContract] = React.useState(
    "0xc4ea80deCA2415105746639eC16cB0cF8378996A"
  );


  // useEffect(() => {
  // }, []);

  useEffect(() => {
    console.log("useEffect", library);
    if (web3.utils.isAddress(contract) && contract != "") {
      setLoading(true);
      getNFTs(contract).then((data) => {
        setNftData(data);
        setLoading(false);
      });
    }
  }, [contract]);

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
            web3.utils.isAddress(contract)
              ? false
              : {
                  content: "Please enter a valid contract address",
                  pointing: "below",
                }
          }
          onChange={(e, { value }) => setContract(value)}
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
            <Button onClick={() => setSelectedNFT(null)} positive>
              Ok
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
