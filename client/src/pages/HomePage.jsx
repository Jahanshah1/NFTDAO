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

import getNFTs from "../services/tatum";

const HomePage = () => {
  const [nftData, setNftData] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNFTs("0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160").then((data) => {
      setNftData(data);
      setLoading(false);
    });
  }, []);

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
              <br/>
              <br/>
              <br/>
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
