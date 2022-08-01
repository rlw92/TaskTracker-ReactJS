import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([
    {name:"Dentist", id:1,day:"Mon",reminder:true},
    {name:"School", id:2,day:"Tue",reminder:false},
    {name:"Homework", id:3,day:"Fri",reminder:true}
])

// Add task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*1000) + 1;
  console.log(id)
  

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id===id ? { ...task, reminder: !task.reminder} : task)
  )
}

  return (
    <div className="container">
     <Header title="Task Tracker" onShow={()=> setShowAddTask(!showAddTask)}
     showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length >0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
     ) : ( 
       "No tasks here!"
     )}
    </div>
  );
}

export default App;
