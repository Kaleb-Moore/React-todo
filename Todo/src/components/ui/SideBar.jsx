import React from 'react'
import Button from '../form/Button'

export default function SideBar({handleSubmit, input, handleChange, inputRef}) {
  return (
    <div className="sidebar-container">
        <Button name="Logout" class="sidebar-logout " />
        <h1 className='sidebar-title'>Hello, <span className='secondary-color'>User</span></h1>
        <p className='sidebar-tagline'>Welcome back to your Todo List</p>

        <h2 className="sidebar-addtodo"><span className='secondary-color'>Todo</span> List</h2>
        <form className='sidebar-form' autoComplete='off' onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="What do you need to do?"
          value={input}
          name="text"
          className="sidebar-form-input"
          onChange={handleChange}
          ref={inputRef}
          />
          <Button name="Add Todo" class={"sidebar-addtodo-btn "} />
        </form>
          
    </div>
  )
}
