import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_todo } from '../Reducer/Todo_Slice'

function Todo() {
    const [inputdata, setinputdata] = useState('')
    const data = {
        tod :  inputdata
    }
    const  selector =  useSelector((e)=>e.todos)
    console.log(data)
    console.log(selector) 
    // console.log(inputdata)
    const dispatch = useDispatch()
    const Add_t = () => {
        dispatch(Add_todo(data))
    }

    return (
        <>
            <div className='container p-40  min-h-96  max-w-3xl bg-slate-800 mx-auto '>
                <div className='text-center    my-10  text-white'  >
                    <h1 className='text-2xl font-bold  ' >TODO </h1>
                </div>
                <div className='text-center ' >
                    <input type="text" value={data.todos} onChange={(e) => setinputdata(e.target.value)} className='  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500' placeholder='Write YOur Todo' />
                    <button onClick={Add_t} className='text-white' >add</button>
                </div>
                <div id='list_todos' className=' my-10 text-center' >
                    <h1 className='bg-red-500  text-white font-bold text-2xl ' >hii</h1>


                </div>


            </div>
        </>
    )
}

export default Todo