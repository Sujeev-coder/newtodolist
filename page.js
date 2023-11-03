
"use client"

import React, { useState } from 'react';
const page = () => {
  const [title, settitle] = React.useState(" ");
  const [desc, setdesc] = React.useState(" ");
  const [mainTask, setmainTask] = React.useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}])
    settitle(" ")
    setdesc(" ")
  }
  
  const deleteHandler=(i)=>{

    const copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h1>No Task Available</h1> ;
  if (mainTask.length>0) {
    renderTask=mainTask.map((t,i)=>{
      return (
      <li className='m-4'>
        <div className='flex justify-between '>
          <h2 className='text-2xl font-bold m-5'>{t.title}</h2>
          <h2 className='text-lg  m-5'>{t.desc}</h2>
          <button onClick={
          ()=>{
            deleteHandler(i)
          }
        }  className='bg-red-600 text-white text-lg inline-block p-2 rounded'>
          Delete
        </button>
        </div>
       
      </li>
      )
    })
  }

  return (<>
    <h1 className='bg-black  text-white text-5xl font-bold text-center h-16 justify-center'>
      My Todo List
    </h1>
    <form onSubmit={submitHandler}>
      <input type="text"
        className='text-2xl  m-8 border-black border-3  p-3 rounded-lg' placeholder="Enter Task here"
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }
        }
      />
      <input type="text"
        className='text-2xl  m-8 border-black border-3  p-3  rounded-lg' placeholder='Enter Description here'
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }
        }
      />
      <button className='bg-black inline-block text-center text-white m-8 p-3 text-2xl rounded-lg'>
        Add Task
      </button>
    </form>
     <hr/>
     <div className='bg-slate-200 p-8 m-5 border-zinc-200 border-4 rounded-2xl' >
     <ul>{renderTask}</ul>
     </div>

  </>);
}

export default page;
