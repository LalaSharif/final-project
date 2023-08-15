import React from "react";
import "../components/Aboutus/aboutus.css";
import abautusimg from "../../src/assets/images/Rectangle 113.png";

function Abaout() {
  return (
    <section>
      <h2>ABOUT US</h2>
      <div className="aboutus">
        <div className="aboutusleft">
          <img src={abautusimg} alt="img" />
        </div>
        <div className="aboutusright">
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
            <br />
            <br />
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat. Itaque earum rerum
            hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
            maiores alias consequatur aut perferendis doloribus asperiores
            repellat.{" "}
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="informations">
        <div className="projects__inf">
          <div className="number">500+</div>
          <div className="text">PROJECTS</div>
        </div>
        <div className="partners__inf">
          <div className="number">70+</div>
          <div className="text">PARTNERS</div>
        </div>
        <div className="followers__inf">
          <div className="number">30K+</div>
          <div className="text">FOLLOWERS</div>
        </div>
        <div className="years__inf">
          <div className="number">25+</div>
          <div className="text">YEARS</div>
        </div>
      </div>
    </section>
  );
}

export default Abaout;
