import React from 'react'
import { v4 as uuid } from "uuid"
import Todoitem from './Todoitem';
import Completed from './Completed';

function Todoinput() {
    const [taskName,setTaskName] = React.useState('');
    const [taskList,setTaskList] = React.useState([]);
    const handleChange = (e) =>{
        console.log(e.target.value)
        setTaskName(e.target.value)
    }
    const handleClick = (task) =>{
        const payload = {
            title: task,
            status: false,
            id:uuid()
        }
        setTaskList([payload,...taskList])
    }
    
    
    const handleToggle =(id)=>{
        const newFunc = taskList.map(e=>e.id===id? {...e,status:!e.status}: e)
        setTaskList(newFunc)
    
    }
    const handleDelete = (id)=>{
        const delFunc = taskList.filter(e=>e.id!==id)
        setTaskList(delFunc)
    }
    const completedTask = taskList.filter(e=>e.status ===true)
    return (
        <div>
            {/* <input type='text' value={taskName} placeholder='enter any task' onChange={handleChange} />
            <button onClick={()=>handleClick(taskName)}>AddTask</button> */}
            
            {taskList.map((e) => {
                return <Todoitem key={e.id} {...e} handleToggle={handleToggle} handleDelete={handleDelete} />
            })}

            <input type='text' value={taskName} placeholder='enter any task' onChange={handleChange} />
            <button onClick={()=>handleClick(taskName)}>AddTask</button>

            {completedTask !=[] ? <Completed completedTask={completedTask} /> : null}


        </div>
    )
}

export default Todoinput
