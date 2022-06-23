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
        <img src={props.data.photo} alt={props.data.name}></img>
        <div>
          <p className="name">{props.data.name}</p>
          <p>{props.data.phone}</p>
          <p>{props.data.email}</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
