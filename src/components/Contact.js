// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  // const { name, phone, email, photo } = props;
  return (
    <>
      {/* {console.log(props.dataContact)} */}
      <section className="dataContactSection">
        <img src={props.dataContact.photo} alt={props.dataContact.name}></img>
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
