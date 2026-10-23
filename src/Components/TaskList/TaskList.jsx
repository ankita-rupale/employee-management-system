import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[52%] w-full overflow-x-auto flex items-center flex-nowrap justify-start gap-5 mt-10 rounded-2xl py-5'> 
            <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
            </div> 
            <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl'>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
            </div>   
        </div>
    )
}

export default TaskList