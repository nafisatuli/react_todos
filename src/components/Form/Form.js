import React, { useState, useEffect, useRef } from 'react'

function Form(props) {
    const edit = props.edit;
    //not to clear input text while update
    const [input, setInput] = useState(edit ? edit.value : '');
    const inputRef = useRef(null);

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
            className="todoForm" onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <input
                        type="text"
                        placeholder="Update Todo"
                        value={input}
                        name="text"
                        className="todoInput edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button
                        onClick={handleSubmit}
                        className="todoButton edit"
                    >
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Add todo"
                        value={input}
                        name="text"
                        className="todoInput"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button
                        onClick={handleSubmit}
                        className="todoButton"
                    >
                        Add todo
                    </button>
                </>
            )}

        </form>
    )
}

export default Form;
