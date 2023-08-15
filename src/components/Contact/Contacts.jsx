import React from "react";
import "./contacts.css";
import contactsimg from "../../assets/images/Rectangle 145.png";

function Contacts() {
  return (
    <div className="contacts">
      <h3>CONTACTS</h3>
      <div className="contacts_container">
        <div className="contacts_left">
          <form action="">
            <div>
              <input placeholder="NAME, SURNAME" type="text" />
            </div>
            <div>
              <input placeholder="E-MAIL ADRESS" type="email" />
            </div>
            <div>
              <input placeholder="THEME" type="text" />
            </div>
            <div>
              <textarea placeholder="YOUR MESSAGE"></textarea>
            </div>
          </form>
          <button>LOG IN</button>
        </div>
        <div className="contacts_right">
          <img src={contactsimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
