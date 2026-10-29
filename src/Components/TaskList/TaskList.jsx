import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[52%] w-full overflow-x-auto flex items-center flex-nowrap justify-start gap-5 mt-10 rounded-2xl py-5'> 
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Oct 2026</h4>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>Handle production issue</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius maxime quas reiciendis qui! Consectetur?</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Oct 2026</h4>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>Handle production issue</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius maxime quas reiciendis qui! Consectetur?</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Oct 2026</h4>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>Handle production issue</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius maxime quas reiciendis qui! Consectetur?</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Oct 2026</h4>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>Handle production issue</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius maxime quas reiciendis qui! Consectetur?</p>
            </div>
            <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Oct 2026</h4>
                </div>
                <h2 className='mt-3 text-xl font-semibold'>Handle production issue</h2>
                <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eius maxime quas reiciendis qui! Consectetur?</p>
            </div>
        </div>
        
    )
}

export default TaskList