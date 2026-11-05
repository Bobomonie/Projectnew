import { IoCubeOutline } from "react-icons/io5";
import { TiClipboard } from "react-icons/ti";


const TaskCard = ({title="title", desc="descripion", icon}) => {
  return (
    <div className='flex items-center gap-2 border border-gray-300 rounded-2xl bg-white p-2 w-full'>
      <div className="w-10 h-10 bg-blue-400 flex justify-center items-center rounded-md">
        {icon}
    
      </div>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default TaskCard

