import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Button from '../../components/form/Button';

export default function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    function handleChange(e) {
        setEdit(prevEdit => ({
            id: prevEdit.id,
            value: e.target.value
        }))
        console.log(edit)
    }

    function submitUpdate(e) {
        e.preventDefault();
        updateTodo(edit) 
        setEdit({
            id: null,
            value: ''
        })
        console.log(edit);
    }

    if (edit.id) {
        return (
            <form className='sidebar-form' autoComplete='off' onSubmit={submitUpdate}>
                <input
                type="text"
                placeholder="What do you need to do?"
                defaultValue={edit.value}
                name="text"
                className="sidebar-form-input"
                onChange={handleChange}
                />
                <Button name="Add Todo" class={"sidebar-addtodo-btn "} />
            </form>
        )
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : "todo-row"} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="todo-text">
                {todo.text}
            </div>
            <div className="todo-list-icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)} 
                    className="delete-icon"
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})} 
                    className="update-icon"
                />
            </div>
        </div>
    ))
}
