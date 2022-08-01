import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  return (
    <div onDoubleClick={()=>props.onToggle(props.task.id)} 
    className={`task 
    ${props.task.reminder ? "reminder" : ""}`}>
        <h3>{props.task.name} 
        <FaTimes 
        onClick={()=>props.onDelete(props.task.id)} 
        style={{ color:"red", cursor:"pointer"}}/>
        </h3>
        <p>{props.task.day}</p>
    </div>
  )
}

export default Task