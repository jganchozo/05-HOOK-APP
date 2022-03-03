import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];
};

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (id) => {

        const action = {
            type: 'delete',
            payload: id,
        };

        dispatch(action);
    };

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id,
        });
    };

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo,
        });

    };

    return (
        <>
            <h1>TodoApp ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className='col5'>
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>

            </div>
        </>
    )
}