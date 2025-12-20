import { useEffect, useState } from 'react'
import './App.css'

function App(){
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) || []
    } catch {
      return []
    }
  })
  const[text, setText]=useState("")

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(tasks))
  },[tasks])



  const addTask=(e)=>{
    e.preventDefault()
    if(!text.trim())
    return
      setTasks([
            ...tasks,{
          id: Date.now(),
          text: text,
          done: false
        }
      ])
    setText("")
  }
    const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const doneTask = (id)=>{
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  ))
  }
  const newWindow=URL=>{
    window.open(URL, '_blank','noopener,noreferrer')
  }

  return ( 
    <form onSubmit={addTask}>
      <div className="min-h-screen flex-col flex items-center justify-center
  bg-gradient-to-tr from-blue-200 via-purple-300 to-pink-300
  shadow-xl shadow-pink-900/90">
    <h1 className="font-bold text-5xl text-black m-2">todo list</h1>
    <div className='flex '>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='добавить дело...' className="m-1 text-2xl p-1 rounded-lg shadow-sm shadow-red-950" ></input>
    <button type='submit' onClick={addTask} className='bg-purple-400 p-1 rounded-lg shadow-sm shadow-red-950'>Добавить в список</button>
    </div>
    <div >
      <ol className=' list-decimal list-inside space-y-1 '>
      {tasks.map(task=>(
        <li key={task.id}
        className={` rounded-lg p-1 mt-3 shadow-sm shadow-red-950 font-bold
          ${task.done ? "bg-green-200" : "bg-white"}
        `}> 
        {task.text}
      <button className='bg-red-400 ml-2 rounded-lg p-1 shadow-sm shadow-red-950 font-normal'
      onClick={()=>deleteTask(task.id)}
      >Удалить дело</button>
      <button className='bg-green-400 ml-2 rounded-lg p-1 shadow-sm shadow-red-950 font-normal'
      onClick={()=>doneTask(task.id)}
      >Выполнено</button>
      <button onClick={()=>newWindow('http://localhost:5173/second.html')} className='bg-pink-400 ml-2 rounded-lg p-1 shadow-sm shadow-red-950 font-normal'>Чекнуть отдельно</button>
      </li>
        
      ))}
      </ol>
    </div>

  </div>
    </form>
  
    

  )
 

}

export default App;


