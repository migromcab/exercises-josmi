import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='topbar'>
        <div className='button style'>
          <a href="">All</a>
          <a href="">Completed</a>
          <a href="">Pending</a>
        </div>

       
      </div>

      <div className='button space style'>
    
        <input type="text" placeholder='Escribe algo'/>
        <a href="">Add</a>
        
      </div>

      <div className=' '>
        <div className='style button tasks'>
          <input type="checkbox" />
        <label htmlFor="">Tarea 1</label>
        <a href="">Delete</a>

        </div>
       
        <div className='style button tasks'>
        <input type="checkbox" />
        <label htmlFor="">Tarea 2</label>
        <a href="">Delete</a>
        </div>
       
      </div>

    </>
  )
}

export default App
