import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault(); //prevent reload
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }
    return (
        <form
            className="todoForm"
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add todo"
                value={input}
                name="text"
                className="todoInput"
                onChange={handleChange}
                ref={inputRef}
            />
            <button>Add todo</button>
        </form>
    )
}

export default Form;
