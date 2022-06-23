// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  const { name, phone, email, photo } = props;
  return (
    <>
      <section className="dataContactSection">
        <img src={photo} alt={name}></img>
        <div>
          <p className="name">{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
