import React, { useState, useEffect, useRef } from "react";
import {nanoid} from 'nanoid'
import SideBar from "../../components/ui/SideBar.jsx";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
        id: nanoid(),
        value: input
    });

    setInput('');
  }

  return (
    <SideBar 
      inputRef={inputRef} 
      input={input} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
    />
  );
}
