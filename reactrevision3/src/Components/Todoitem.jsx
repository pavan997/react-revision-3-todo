import React from 'react';
import styles from './Todoitem.module.css';

function Todoitem({title,id,status,handleToggle,handleDelete}) {
    
    console.log(title,id,status,handleToggle)
    return (
        <div>
          <div className={ status ? styles.toggled : null}>{title}</div>
            <button onClick={()=>handleToggle(id)}>Toggle</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Todoitem
