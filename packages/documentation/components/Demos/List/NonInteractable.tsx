import React, { FunctionComponent } from "react";
import { List, SimpleListItem } from "@react-md/list";

import people from "constants/people";

import Container from "./Container";
import "./non-interactable.scss";

const NonInteractable: FunctionComponent = () => (
  <div className="simple-list-examples">
    <Container title="Non-interactable">
      <List>
        {people.slice(0, 10).map(name => (
          <SimpleListItem key={name} className="li li--dotted li--margin">
            {name}
          </SimpleListItem>
        ))}
      </List>
      <List className="ordered-list">
        {people.slice(11, 20).map(name => (
          <SimpleListItem key={name} className="li li--margin">
            {name}
          </SimpleListItem>
        ))}
      </List>
    </Container>
  </div>
);

export default NonInteractable;
