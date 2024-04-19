import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './todo.css';

const Todo = () => {
  // State for input field
  const [inputData, setInputData] = useState("");
  
  // Accessing the todo list from Redux store
  const list = useSelector((state) => state.todoReducers.list);
  
  // Dispatch function to dispatch actions
  const dispatch = useDispatch();
  
  return (
    <>
      {/* Main container for the todo application */}
      <div className="main-div">
        {/* Heading */}
        <h2>Add your todo here </h2>
        <div className="child-div">
          {/* Input field and Add button */}
          <div className="addItems">
            <input 
              value={inputData} 
              onChange={(e) => setInputData(e.target.value)} 
              type="text" 
              placeholder='Enter Your Todo Here ' 
            />
            <button 
              type="button" 
              className="btn btn-success" 
              onClick={() => {
                // Dispatching addTodo action with input data
                dispatch(addTodo(inputData));
                // Clearing input field
                setInputData('');
              }} 
            >
              ADD TODO
            </button>
          </div>
          {/* List of todo items */}
          <div className="showItems">
            {
              list.map((elem) => {
                return (
                  <div key={elem.id} className="eachItems">
                    <h3>{elem.data}</h3>
                    <i 
                      className='far fa-trash-alt add-button' 
                      title='Delete Item' 
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                );
              })
            }
          </div>
          {/* Button to remove all todos */}
          <div className="showItems2">
            <button 
              onClick={() => dispatch(removeTodo())} 
              className='btn effect04' 
              data-sm-link-text="remove All"
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
