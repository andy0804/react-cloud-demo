import React from "react";
import "./Showcase.css";
const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps from all kinds. From Large scale enterprise apps to
            static web sites ,feel free to request a demoo of our product and
            try out our platform.
          </p>
          <a href="features.html" className="btn btn-outline">
            Read more
          </a>
        </div>
        <div className="showcase-form card">
          <h2>Request a demo</h2>
          <form>
            <div className="form-control">
              <input required type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-control">
              <input required type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-control">
              <input
                required
                type="text"
                name="company"
                placeholder="Company"
              />
            </div>
            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
