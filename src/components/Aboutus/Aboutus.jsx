import React from "react";
import "./aboutus.css";
import aboutusimg from "../../assets/images/Rectangle 113.png";

function Aboutus() {
  return (
    <section>
      <div className="aboutus">
        <div className="aboutusleft">
          <img src={aboutusimg} alt="img" />
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
    </section>
  );
}

export default Aboutus;
