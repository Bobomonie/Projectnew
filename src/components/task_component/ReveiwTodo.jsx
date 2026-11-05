import { Flag } from 'lucide-react/dist/cjs/lucide-react'
import React from 'react'

const reveiwtodo = [

  {
    id: 1,
    name:"About Us Illustration",
    project: "Main Project",
    dueDate: "Oct21-9:00AM",
    flag: true
  },
  {
    id: 2,
    name:"Hero Illustration",
    project: "Landing PagePro..",
    dueDate: "Oct21-9:00AM",
    flag: false
  },
  {
    id: 3,
    name:"Mood boarding",
    project: "Landing PagePro..",
    dueDate: "Oct22-9:00AM",
    flag: true
  },
  {
    id: 4,
    name:"Research",
    project:"Yellow Branding",
    dueDate:"Oct22-12:00PM",
    Flag: false
  },
  ]

  const List = ({about})=>{
return(
      <li className='grid grid-cols-3 p-1 border-b'>
      <h1 className='text-sm'>{about?.name}</h1>
      <p className='text-sm'>{about?.project}</p>
      <p className='text-sm'>{about?.dueDate}</p>
</li>
)
  }

const ReveiwTodo =  () => { 
  return (
    <div className='p-2 space-y-5'>
      <h2>To Reveiw</h2>
      <ul className='space-y-1'>
        <div className='grid grid-cols-3 items-center'>
          <p className='text-sm'>Name</p>
          <p className='text-sm'>Project</p>
          <p className='text-sm'>Due Date</p>
        </div>
        {
          reveiwtodo.map((data, index)=>(
            <List about={data} key={index}/>
          ))
        }
      </ul>
    </div> 
  )
}

export default ReveiwTodo

