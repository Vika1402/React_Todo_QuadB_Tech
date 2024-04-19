import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo,deleteTodo,removeTodo } from '../actions';
import './todo.css'
const Todo = () => {
  const [inputData,setInputData]=useState("");
  const list=useSelector((state)=>state.todoReducers.list)
  const dispatch=useDispatch();
  return (
    <>
     <div className="main-div">
     <h2>Add your todo here </h2>
      <div className="child-div">
     
        
        
 
      <div className="addItems">
        <input value={inputData} onChange={(e)=>setInputData(e.target.value)} type="text" placeholder='Enter Your Todo Here ' />
       
        <button type="button" class="btn btn-success" onClick={()=> dispatch(addTodo(inputData),
          setInputData('')
        )} >ADD TODO</button>
      </div>
      <div className="showItems">
      {
        list.map((elem)=>{
          return (
            <div key={elem.id} className="eachItems">
          <h3>{elem.data}</h3>
          <i className='far fa-trash-alt add-button' title='Delete Item' onClick={()=> dispatch(deleteTodo(elem.id)
        )}> </i>
        </div>
          )
         
        })
      }
       
      </div>

      <div className="showItems">
        <button onClick={()=> dispatch(removeTodo())} className='btn effect04' data-sm-link-text="remove All">Check List </button>
      </div>

        
      </div>
    </div>


      
    </>
  )
}

export default Todo;
