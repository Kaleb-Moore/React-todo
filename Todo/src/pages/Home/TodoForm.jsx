import React, { useState, useEffect, useRef } from "react";
import {nanoid} from 'nanoid'
import Button from '../../components/form/Button.jsx'

export default function TodoForm(props) {
  const [input, setInput] = useState("");

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
        text: input
    });

    setInput('');
  }

  return (
    <div>
      <form
        action=""
        className="todo-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <Button name="Add todo" />
      </form>
    </div>
  );
}
