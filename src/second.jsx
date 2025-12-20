import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'


    function HelloTask(){

        const save=localStorage.getItem('todos')

        return (
            <div className='font-bold text-5xl text-black m-2'>
                <h1>hello,{save}</h1>

            </div>
    
        )
        
    }

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <HelloTask />
  </StrictMode>
)
