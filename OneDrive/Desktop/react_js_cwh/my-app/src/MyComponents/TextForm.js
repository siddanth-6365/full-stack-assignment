import React from "react";
import { useState } from "react";


const TextForm = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [text, setText] = useState("");
  const [fontColor, setColor] = useState("black");

  const changeCase = () => {
    if (text == "") {
      alert("text area can not be empty");
    }
    if (!active) {
      setText(text.toUpperCase());
    } else {
      setText(text.toLowerCase());
    }
    setActive(!active);
  };
  const changeFont = () => {
    if (!active2) {
      setColor("red");
    } else {
      setColor("black");
    }
    setActive2(!active2);
  };
  return (
    <>
      <div>
        <div className="mb-3">
          {/* <label for="my-box" className="form-label">Text Here</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            style={{ color: fontColor , border: "1px solid black" }}
            placeholder={"Enter here.."}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button
          type="button"
          id="btn-case"
          onClick={changeCase}
          className={active ? "btn btn-dark" : "btn btn-primary"}
        >
          Convert to {active ? "Lower" : "Upper"} case{" "}
        </button>

        <button
          type="button"
          id="btn-case"
          className={active2 ? "btn btn-dark" : "btn btn-danger"}
          onClick={changeFont}
        >
          Change Font
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters{" "}
        </p>
        <p> Takes {(text.split(" ").length - 1) * 0.008} mintues to read </p>
      </div>
    </>
  );
};

export default TextForm;
