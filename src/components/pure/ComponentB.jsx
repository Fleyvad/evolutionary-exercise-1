import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import { AVIABILITY } from "../../models/aviability.enum.js";
const ComponentB = ({ contact }) => {
  const { email, surName, firstName, connected, country, city } = contact;

  const [toggle, setToggle] = useState(connected);

  const connectDisconnect = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <p>Name: {firstName}</p>
      <p>Surname: {surName}</p>
      <p>Email: {email}</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>
        Connection:
        {toggle ? AVIABILITY.contactOnLine : AVIABILITY.contactNotAviable}
      </p>
      <button className={toggle ? "On" : "Off"} onClick={connectDisconnect}>
        {toggle ? "Connected" : "Disconnected"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
