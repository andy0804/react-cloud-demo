import React from "react";
import "./Cloud.css";
const Cloud = () => {
  return (
    <section className="cloud bg-primary my-2 py-2">
      <div className="container grid">
        <div className="text-center">
          <h2 className="lg">Extreme Cloud Hosting</h2>
          <p className="lead my-1">
            Cloud hosting like you have never seen. Fast , efficient and secure.
          </p>
          <a href="/feature.html" className="btn btn-dark">
            Read more
          </a>
        </div>
        <img src="images/cloud.png" alt="" />
      </div>
    </section>
  );
};

export default Cloud;
