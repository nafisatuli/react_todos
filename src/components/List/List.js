import React, { useState } from 'react'
import Form from '../Form/Form'
import Todo from '../Todo/Todo';

function List() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        //console.log(...todos);
    };
    const updateTodo = (todoId, newValue) => {
        if (!newValue || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updateTodos);
    }
    return (
        <div>
            <h1>Todo list</h1>
            <Form onSubmit={addTodo}></Form>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            >
            </Todo>
        </div>
    )
}

export default List
