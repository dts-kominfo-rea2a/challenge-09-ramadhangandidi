// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <>
      <section className="dataContactSection">
        <img src={props.dataContact.photo}></img>
        <div>
          <p className="name">{props.dataContact.name}</p>
          <p>{props.dataContact.phone}</p>
          <p>{props.dataContact.email}</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
