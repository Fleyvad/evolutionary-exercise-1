import React from "react";
import Proptypes from "prop-types";
import { Contact } from "../../models/contact.class";
import { AVIABILITY } from "../../models/aviability.enum";
import "../../styles/contact-component.scss";
const ContactComponent = ({ contact, remove, connection }) => {
  const { firstName, surName, email, country, city, connected } = contact;
  return (
    <tr className="contact">
      <td>{firstName}</td>
      <td>{surName}</td>
      <td>{country}</td>
      <td>{city}</td>
      <td>{email}</td>
      <td>
        <button
          onClick={() => connection(contact)}
          className={
            connected ? "contact__connection on" : "contact__connection off"
          }
        >
          {connected ? AVIABILITY.contactOnLine : AVIABILITY.contactNotAviable}
        </button>
        <i
          className="bi bi-person-x"
          style={{ color: "red" }}
          onClick={() => remove(contact)}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.prototype = {
  contact: Proptypes.instanceOf(Contact).isRequired,
  remove: Proptypes.func.isRequired,
  connection: Proptypes.func.isRequired,
};

export default ContactComponent;
