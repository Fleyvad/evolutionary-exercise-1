import React from "react";
import ComponentB from "./ComponentB";
import { Contact } from "../../models/contact.class";

const ComponentA = (props) => {
  const SPIDERMAN = new Contact(
    "Peter",
    "Parker",
    "spiderman@marvel.com",
    "USA",
    "New York",
    false
  );
  return <ComponentB contact={SPIDERMAN}></ComponentB>;
};

export default ComponentA;
