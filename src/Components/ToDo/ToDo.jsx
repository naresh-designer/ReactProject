import { useEffect, useState } from 'react'
import styled from 'styled-components'


//  Get tasks from local storage
const getLoacalData = () => {
  const loacalStroage = localStorage.getItem('myTasks')
  if(loacalStroage){
    return JSON.parse(loacalStroage)
  }
  else{
    return []
  }
}

const ToDo = () => {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(getLoacalData())


  const handleTask = () => {
    if(!inputValue){
      alert("Please enter a task");
    }else{
      const newTask = {
        id: new Date().getTime().toString(),
        name : inputValue
      }
      setTasks([...tasks,newTask])
      setInputValue('')
      
    }
  }

  // Function to handle task deletion
  const handleEdit = (id) => {
    const updatedEditTasks = tasks.map((curEdit)=>{
      if(curEdit.id === id){
        return {...curEdit,name: prompt("Edit Task", curEdit.name)}
      }
      return curEdit;
    })
      setTasks(updatedEditTasks);



    setInputValue('');
  }

  // Function to handle task deletion
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((curTaks)=>{
      return curTaks.id !==id
    })
    setTasks(updatedTasks);
  }

  // Function to clear all tasks
  const clearAll = () => {
    setTasks([]);
  }

  // Save tasks to local storage
  useEffect(()=>{
    localStorage.setItem('myTasks',JSON.stringify(tasks))
  })



  

  return (
    <Section>
      <h1>ToDo Component</h1>

      <div className="wrapper">

      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Add a new task..." required value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" onClick={()=>handleTask()}>Add Task</button>
      </form>
        <div className="grid grid_three">

              {
              tasks.map((curElm,id)=>{
                return (
                  <div key={id} className="card">
                    <h2>Task</h2>
                    <p>{curElm.name}</p>
                    <button onClick={()=>handleEdit(curElm.id)}>Edit</button>
                    <button onClick={()=>handleDelete(curElm.id)}>Delete</button>
                  </div>
                )
              })
              }
        </div>

      {tasks.length === 0 && <p>No tasks available</p>}
      <button className='button' onClick={clearAll}>Clear All Tasks</button>
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .wrapper {
    max-width: 1200px;
    margin: auto;
  }

  .grid {
    display: grid;
    gap: 30px;
  }

  .grid_three {
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    h2 {
      margin-top: 0;
    }
    
    p {
      color: #666;
    }
  }

  .todo-form {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 10px;
      flex-grow: 1;
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      background-color: #28a745;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #218838;
      }
    }
  }
      button {
        margin: 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        
        &:hover {
          background-color: #0056b3;
        }
      }
`


export default ToDo