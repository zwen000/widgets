import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "../Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library",
  },
  {
    title: "How do you use React?",
    content: "By Creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];


export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  const [route, setRoute] = useState(window.location.pathname);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}

      {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? 
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select a color"/> 
      : null} */}

      {/* <Translate/> */}

      <Header/>
      <Route path='/'>
        <Accordion items={items} />;
      </Route>
      <Route path='/dropdown'>
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select a color"/>
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
      <Route path='/search'>
        <Search/>
      </Route>

    </div>
  );
};
