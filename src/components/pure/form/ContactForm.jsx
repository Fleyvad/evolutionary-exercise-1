import React, { useRef } from "react";
import { PropTypes } from "prop-types";
import { AVIABILITY } from "../../../models/aviability.enum";
import { Contact } from "../../../models/contact.class";
import "../../../styles/contact-form.scss";

const ContactForm = ({ add }) => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const connectionRef = useRef();

  const addForm = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      countryRef.current.value,
      cityRef.current.value,
      connectionRef.current.value
    );
    console.log(newContact);
    add(newContact);
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={addForm}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={surnameRef} type="text" placeholder="Surname" />
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={countryRef} type="text" placeholder="Country" />
        <input ref={cityRef} type="text" placeholder="City" />
        <select ref={connectionRef}>
          <option value={AVIABILITY.contactOnLine}>Online</option>
          <option value={AVIABILITY.contactNotAviable}>Desconnect</option>
        </select>

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
ContactForm.prototype = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
