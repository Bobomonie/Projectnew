import ReveiwTodo from '@/components/task_component/ReveiwTodo';
import TeamsCard from '@/components/task_component/TaskCard'
import WeeklyTodo from '@/components/task_component/weeklytodo'

import { IoCubeOutline } from "react-icons/io5";

import { TiClipboard } from "react-icons/ti";

import { GoPeople } from "react-icons/go";

import { BiMessageAltDetail } from "react-icons/bi";
import { Notebook } from 'lucide-react';

const cardTaskData= [
  {
     id: 1,
  title: "Create Task",
  desc: "Organize task to your Project",
  icon: <Box/>,
  }
  {
  id: 2,
  title: "Create Task",
  desc: "Organize task to your Project",
  icon: <Notebook/>,
}
{
   id: 3,
  title: "Invite Team",
  desc: "Organize task to your Project",
  icon: <User2/>,
}
{
   id: 4,
  title: "Send Message",
  desc: "Organize task to your Project",
  icon: <MessageCircleCheck/>,
}
]

const TaskPage = () => {
  return (
    <div className='w-full space-y-6'>
      <div className='flex gap-3 w-full'>
      {
      
      }
      </div>

      <div className="grid grid-cols-2 gap-5 h-60">
        <div className='border border-gray-500 rounded-md'>
          <WeeklyTodo/>
        </div>
        <div className='border border-gray-500 rounded-md'>

        <ReveiwTodo/>
        </div>
        
      </div>

    </div>
  )
}

export default TeamPage