import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

const HomePage = () => (
  <div>
    <Container text style={{ paddingTop: "4em" }}>
      <Header as="h1">Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p>
    </Container>
  </div>
);

export default HomePage;
