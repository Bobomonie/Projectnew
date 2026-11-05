import { Bell, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import TaskHeading from './TaskHeading'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const TaskComp = () => {
  const [mode, setMode] = useState(false)
  const [selected, setSelected] = useState({})


  const handelOpenModal = (user) =>{
    setSelected(user)
    setMode(true)
  }
  const handelCloseModal = () =>{
    setMode(false)
    setSelected({})
  }


  const {title, desc} = selected

  return (
    <div className='space-y-8'>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Tasks</h1>

        <div className="flex gap-3">
          <Bell className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 p-2 cursor-pointer shadow"/>
          <button className="flex justify-center items-center px-3 h-9 w-max shadow bg-black text-white text-sm rounded-full gap-1 cursor-pointer">Details <ChevronDown size={16} /></button>
        </div>
      </div>

      <TaskHeading handelOpenModal={handelOpenModal} handelCloseModal={handelCloseModal} />
        
      {
        mode && <div onClick={()=> handelCloseModal()} className='fixed flex justify-center items-center top-0 left-0 h-screen w-full bg-gray-400/5 backdrop-blur-xs'>
            <div onClick={(e)=> e.stopPropagation()} className='w-120 h-130 bg-white rounded-2xl shadow-lg p-5'>
             <h1 className='text-lg font-bold'>{title}</h1>
             <p className='text-sm text-gray-600'>{desc}</p>
            </div>
            
        </div>
      }
    </div>
  )
}

export default TaskComp