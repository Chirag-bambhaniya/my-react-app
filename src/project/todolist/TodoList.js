import React, { useRef, useState } from 'react'
import './TodoList.css'

export default function TodoList() {

    // let TodoValue = '';
    // console.log(TodoValue)

    let [TodoValue, setTodoValue] = useState([]);

    const [newTodo, setNewTodo] = useState('')


    // console.log(TodoValue.name)

    // const todo = useRef();

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodoValue([...TodoValue, newTodo]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = TodoValue.filter((todo, i) => i != index);
        setTodoValue(updatedTodos);
    };


    // const onSubmit = async (event) => {
    //     event.preventDefault();

    //     // TodoValue = todo.current.value;
    //     // console.log(TodoValue)

    //     setTodoValue(TodoValue.name = todo.current.value)

    //     console.log(TodoValue.name)

    // }

    return (
        <>

            <div className='text-center main'>

                <div className='app'>

                    <h1>My Todo List.</h1><br />

                    <input type="text" className='border border-secondary border-2 rounded-2 me-2 ps-2 input' value={newTodo} onChange={handleInputChange} placeholder='Add Your new todo ' />

                    <button className='btn btn-primary rounded-2' onClick={handleAddTodo}><i className="bi bi-plus-lg fs-5 fw-bolder"></i></button>

                    <ul>
                        {TodoValue.map((todo, index) => (
                            <li key={index} className='fs-5 bg-dark mt-3 text-white p-2 rounded-2 text-start'>
                                {todo} <button className='btn bg-primary text-white' onClick={() => handleDeleteTodo(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>



                </div>

            </div>

        </>
    )
}
