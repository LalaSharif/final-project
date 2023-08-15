import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_up">
        <h2 className="logo">HomeDecor</h2>
        <div className="footer__right">
          <p className="footer__text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
          </p>
          <p>+994 50 555 55 55</p>
          <p>youremailhere@gmail.com</p>
        </div>
      </div>
      <div className="footer_down">
        <p>©2022 All Right Reserved. Developed by Webcoder Agency</p>
      </div>
    </footer>
  );
}

export default Footer;
