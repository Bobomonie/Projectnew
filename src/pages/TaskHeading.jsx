import {
  Box,
  Check,
  Cuboid,
  Flag,
  MessageCircleCheck,
  Notebook,
  User2,
} from "lucide-react";
import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";


//Data
const weekData = [
  {
    id: 1,
    name: "Solutions Pages",
    project: "Main Project",
    dueDate: "March 17-09:00AM",
    flag: true
  },
  {
    id: 2,
    name: "Company Pages",
    project: "Landing Project",
    dueDate: "March 17-09:00AM",
    flag: false
  },
  {
    id: 3,
    name: "Help Center Pages",
    project: "Landing Project",
    dueDate: "March 17-09:00AM",
    flag: true
  },
]

const reviewData = [
  {
    name: "Solutions Pages",
    project: "Main Project",
    dueDate: "March 17-09:00AM",
    flag: true
  },
  {
    name: "Company Pages",
    project: "Landing Project",
    dueDate: "March 17-09:00AM",
    flag: false
  },
  {
    name: "Company Pages",
    project: "Landing Project",
    dueDate: "March 17-09:00AM",
    flag: false
  },
  {
    name: "Help Center Pages",
    project: "Landing Project",
    dueDate: "March 17-09:00AM",
    flag: false
  },
]

const cardTaskData = [
  {
    id: 1,
    title: "Create Project",
    desc: "Organize task to your project",
    icon: <Box />,
  },
  {
    id: 2,
    title: "Create Task",
    desc: "Organize task to your project",
    icon: <Notebook />,
  },
  {
    id: 3,
    title: "Invite Team",
    desc: "Organize task to your project",
    icon: <User2 />,
  },
  {
    id: 4,
    title: "Send Message",
    desc: "Organize task to your project",
    icon: <MessageCircleCheck />,
  }
  
];


const Card = ({ data, handelOpenModal, handelCloseModal}) => {
  return (
    <div onClick={()=> handelOpenModal(data) } className="bg-white p-3 rounded-lg shadow  cursor-pointer hover:shadow-lg space-y-7">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-200 rounded-md p-2">{data?.icon}</div>
        <div>
          <h3 className="font-semibold text-sm">{data?.title}</h3>
          <h3 className="text-xs text-gray-500">{data?.desc}</h3>
        </div>
      </div>
    </div>
  );
};

const TodoWeekList = ({ data }) => {
  return (
    <li className="grid grid-cols-3 border-b border-gray-400 py-2">
      <p className="font-semibold flex items-center gap-1 text-xs">
        {data?.name ? data?.name : "No Name"}{" "}
        <Flag
          size={14}
          className={`${data?.flag ? "text-blue-600" : "text-gray-600"}`}
        />
      </p>
      <p className="text-xs">{data?.project ? data?.project : "No Project"}</p>
      <p className="text-xs">{data?.dueDate ? data?.dueDate : "No Due Date"}</p>
    </li>
  );
};

const ReviewList = ({ data }) => {
  return (
    <li className="grid grid-cols-3 border-b border-gray-400 py-2">
      <div className="flex items-center gap-1">
        <Check size={14}/>
        <p className="font-semibold flex items-center gap-1 text-xs">
          {data?.name ? data?.name : "No Name"}{" "}
          {data?.flag ? <FaFlag  color="blue"/> : <FaFlag  color="red"/>}
        </p>
      </div>
      <p className="text-xs">{data?.project ? data?.project : "No Project"}</p>
      <p className="text-xs">{data?.dueDate ? data?.dueDate : "No Due Date"}</p>
    </li>
  );
};

const WeekTodo = () => {
  return (
    <div className="border border-gray-400 shadow rounded-lg space-y-5 p-5">
      <h1 className="font-semibold">To do this week</h1>
      <ul>
        <div className="grid grid-cols-3 border-b border-gray-400 text-[14px] font-semibold text-gray-600">
          <li>Name</li>
          <li>Projects</li>
          <li>Due Date</li>
        </div>
        <div className="space-y-2 mt-5">
          {weekData.map((todo, index) => (
            <TodoWeekList key={index} data={todo} />
          ))}
        </div>
      </ul>
    </div>
  );
};

const ReviewTodo = () => {
  return (
    <div className="border border-gray-400 shadow rounded-lg space-y-5 p-5">
      <h1 className="font-semibold">To review</h1>
      <ul>
        <div className="grid grid-cols-3 border-b border-gray-400 text-[14px] font-semibold text-gray-600">
          <li>Name</li>
          <li>Projects</li>
          <li>Due Date</li>
        </div>
        <div className="space-y-2 mt-5">
          {reviewData.map((todo, index) => (
            <ReviewList key={index} data={todo} />
          ))}
        </div>
      </ul>
    </div>
  );
};



const TaskHeading = ({handelOpenModal, handelCloseModal}) => {
  const [model, setModel]= useState(false)
  return (
    
    <div className="py-4 space-y-10">
      <div className="grid grid-cols-4 gap-3">
        {cardTaskData.map((data, index) => (
          <Card key={index} data={data} handelOpenModal={handelOpenModal} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <WeekTodo />
        <ReviewTodo />
      </div>
    </div>
  );
};

export default TaskHeading;