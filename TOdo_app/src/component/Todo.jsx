import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_todo, remove_todo, ubdate_todo } from '../Reducer/Todo_Slice'

function Todo() {
    const [inputdata, setinputdata] = useState('')

    const dispatch = useDispatch()
    const selector = useSelector((state) => state.todoss.todos)

    console.log(selector)
    //  add todo function
    const Add_t = () => {
        dispatch(Add_todo({ id: new Date().getTime(), value: inputdata }))
        setinputdata('')
        // console.log(inputdata)
    }
    //  add todo function

    //  delet todo function
    const delet_todo_handle = (id) => {
        // dispatch(selector.value)
        console.log(id)

        dispatch(remove_todo(id))

    }
    //  delet todo function

    // todo_ubdate_handle 
     const todo_Ubdate_handle =(id)=>{
        const find_todo_value = selector.find((curr)=>{
           return curr.id ==id

        })
        setinputdata(find_todo_value.value)
      
      
     

     }
    
    // todo_ubdate_handle 

    const ubdate_todo_value = (id)=>{
        dispatch(ubdate_todo({id:id,value:inputdata}))
        // console.log(id)
    }

    return (
        <>
            <div className='container p-40  min-h-96  max-w-3xl bg-slate-800 mx-auto '>
                <div className='text-center    my-10  text-white'  >
                    <h1 className='text-2xl font-bold  ' >TODO </h1>
                </div>
                <div className='text-center ' >
                    <input type="text" value={inputdata} onChange={(e) => setinputdata(e.target.value)} className='  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500' placeholder='Write YOur Todo' />
                    <button onClick={Add_t} className='text-white  mr-8' >add</button>
                    
                </div>
                <div id='list_todos' className=' my-10 text-center' >
                    {
                        
                            selector.map((todo,inde) => {
                                return <div  key={inde}>
                                    <h1 className='bg-red-500  text-white font-bold text-2xl mb-5 ' > {todo.value}   </h1>
                                    <button onClick={() => delet_todo_handle(todo.id)} >  remove</button>
                                    <br /><br />
                                    <button onClick={()=>todo_Ubdate_handle(todo.id)} >ubdate</button>
                                    <br /><br />
                                    <button onClick={()=>ubdate_todo_value(todo.id)} className='text-white ' > ubdate todo</button>
                                </div>
                            })
                        
                    }

                </div>


            </div>
        </>
    )
}

export default Todo