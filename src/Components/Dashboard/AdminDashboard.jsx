import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form className='flex flex-wrap item-start justify-between '>
                    <div className='w-1/2 flex flex-col item-start'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input type="text" placeholder='Enter Task Title' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type='text' placeholder='Enter Employee Name'/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input type='text' placeholder='Design, dev, etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col item-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                        <textarea placeholder='Enter Task Description' className='w-full h-44 text-sm py-2 px-4 border-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard