import React from "react";
import "./Language.css";
const Languages = () => {
  const languages = [
    { path: "node", value: "Node.js" },
    { value: "Csharp", path: "csharp" },
    { value: "Go", path: "go" },
    { value: "PHP", path: "php" },
    { value: "Python", path: "python" },
    { value: "Ruby", path: "ruby" },
    { value: "Scala", path: "scala" },
  ];
  return (
    <section className="languages">
      <h2 className="md my-2 text-center">Supported Languages</h2>
      <div className="container flex">
        {languages.map((language, index) => {
          return (
            <div key={language.path} className="card">
              <h4>{language.value}</h4>
              <img src={`images/logos/${language.path}.png`} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
