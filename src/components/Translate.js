import React, { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown";
import Convert from "./Convert";



const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Chinese",
    value: "zh",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Janpenese",
    value: "ja",
  },
];

const Translate = (props) => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Enter a text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>

    </div>
  );
};

export default Translate;
