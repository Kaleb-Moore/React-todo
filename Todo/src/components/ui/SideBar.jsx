import React, {useContext} from 'react'
import { ThemeContext } from '../../pages/Home/App'
import Button from '../form/Button'
import ReactSwitch from 'react-switch'

export default function SideBar({handleSubmit, input, handleChange, inputRef}) {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className="sidebar-container">
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

        <ReactSwitch className='react-switch-bg' onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  )
}
