import { useState } from 'react'
import { ToDo } from './components/ToDo'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(TaskTitle) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: TaskTitle,
        isCompleted: false
      }
    ]);
  }

  return (
    <>
    <ToDo onAddTask={addTask}/>
      
    </>
  )
}

export default App
