import React from 'react'

const TaskListNumbers = () => {
  return (
    <div id='taskListNumber' className='flex justify-between overflow-x-auto gap-5 mt-10 screen'>
        <div className='flex-shrink-0 rounded-xl w-[300px] py-6 px-9 bg-red-400'>
            <h2 className='text-2xl font-semobold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='flex-shrink-0 rounded-xl w-[300px] py-6 px-9 bg-blue-400'>
            <h2 className='text-2xl font-semobold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='flex-shrink-0 rounded-xl w-[300px] py-6 px-9 bg-green-400'>
            <h2 className='text-2xl font-semobold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='flex-shrink-0 rounded-xl w-[300px] py-6 px-9 bg-orange-400'>
            <h2 className='text-2xl font-semobold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers