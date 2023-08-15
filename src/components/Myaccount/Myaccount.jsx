import React from "react";
import "./Myaccount.css";

function Myaccount() {
  return (
    <div className="Myaccount">
      <div className="left">
        <h3>MY ACCOUNT</h3>
        <h4>PERSONAL INFORMATION</h4>
        <h4>WISHLIST</h4>
        <h4>LOG OUT</h4>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={userData.surname}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Myaccount;
