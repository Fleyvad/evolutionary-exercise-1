export class Contact {
  firstName = "";
  surName = "";
  email = "";
  country = "";
  city = "";
  connected = Boolean;

  constructor(firstName, surName, contactEmail, country, city, connected) {
    this.firstName = firstName;
    this.surName = surName;
    this.email = contactEmail;
    this.country = country;
    this.city = city;
    this.connected = connected;
  }
}
