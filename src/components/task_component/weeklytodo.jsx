import { Flag } from 'lucide-react/dist/cjs/lucide-react'
import React from 'react'
import { data } from 'react-router-dom'


const weeklytodoData = [
  {
    id: 1,
    name:"Solution Pages",
    project: "Main Project",
    dueDate: "Oct12-09:00AM",
    flag: true
  },
  {
    id: 2,
    name:"Company Pages",
    project:"Landing Pages",
    dueDate:"Oct12-09:00AM",
    flag: false 
  },
  {
    id: 3,
    name:"Help CenterPages",
    project:"Landing Pages",
    dueDate:"Oct13-10:00AM",
    flag: true
  },
  {
    id: 4,
    name:"Icon Custom",
    project:"Main Project",
    dueDate:"Oct14-12:00PM",
    flag: false
  },
  {
    id: 5,
    name:"Solution Pages",
    project:"Yellow Branding",
    dueDate:"Oct14-12:00PM",
    flag: true
  },
]

const List = ({data})=>{
  return(
    <li className='grid grid-cols-3 p-1 border-b'>
      <h1 className='text-sm'>{data?.name}</h1>
      <p className='text-sm'>{data?.project}</p>
      <p className='text-sm'>{data?.dueDate}</p>
    </li>
  )
}

const WeeklyTodo =  () => { 
  return (
    <div className='p-2 space-y-5'> 
      <h1>To do this week</h1>
    

      <ul className='space-y-1'>
        <div className='grid grid-cols-3 items-center border-b'>
          <p className='text-sm'>Name</p>
          <p className='text-sm'>Project</p>
          <p className='text-sm'>Due Date</p>
        </div>
        
        {
          weeklytodoData.map((data, index)=>(
            <List data={data} key={index}/>
          ))
        }
      </ul>
    </div> 
  )
}

export default WeeklyTodo
