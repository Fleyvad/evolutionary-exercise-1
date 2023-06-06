import React, { useState } from "react";
import ContactComponent from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";
import ContactForm from "../pure/form/ContactForm";
import "../../styles/contact-list.scss";

const ContactList = () => {
  const user1 = new Contact(
    "Jhon",
    "McGregor",
    "jhonmc@msn.com",
    "Scotland",
    "Edinburgh",
    false
  );

  const [contacts, setContacts] = useState([user1]);

  const deleteContact = (contact) => {
    console.log(contact);
    const index = contacts.indexOf(contact);
    const contactsTemp = [...contacts];
    contactsTemp.splice(index, 1);
    setContacts(contactsTemp);
  };
  const connectContact = (contact) => {
    const index = contacts.indexOf(contact);
    const contactsTemp = [...contacts];
    contactsTemp[index].connected = !contactsTemp[index].connected;
    setContacts(contactsTemp);
  };

  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  };

  return (
    <>
      <div className="table_container">
        <table className="table">
          <thead>
            <tr className="contact__title">
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>City</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <ContactComponent
                  key={index}
                  contact={contact}
                  remove={deleteContact}
                  connection={connectContact}
                ></ContactComponent>
              );
            })}
          </tbody>
        </table>
      </div>
      <ContactForm add={addContact}></ContactForm>
    </>
  );
};

export default ContactList;
