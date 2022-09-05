import React, { createContext, useState } from 'react'
import TodoList from './TodoList'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);

export default function App() {

    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(curr => (curr === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main id={theme}>
                <TodoList />
            </main>
        </ThemeContext.Provider>
    )
};