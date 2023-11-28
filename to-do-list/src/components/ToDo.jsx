import './ToDo.css'
import { Fecha } from './Date'
import { AddTask } from './AddTask'
import { Tasks } from './Tasks'
import { useState } from 'react'


export function ToDo({ onAddTask }) {
    return(
        <div className='to-do-container'>
            <Fecha/>
            <AddTask/>
            <Tasks/>
            
        </div>
    )

}