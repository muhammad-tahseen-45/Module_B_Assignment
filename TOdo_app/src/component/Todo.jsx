import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_todo, remove_todo, ubdate_todo } from '../Reducer/Todo_Slice'
import { FaPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineUpdateDisabled } from "react-icons/md";

function Todo() {
    const [inputdata, setinputdata] = useState('')
    const [tggole, settoggle] = useState(true)

    const dispatch = useDispatch()
    const selector = useSelector((state) => state.todoss.todos)

    console.log(selector)
    //  add todo function
    const Add_t = () => {
        inputdata === "" ? alert("please fill the todo") :    dispatch(Add_todo({ id: new Date().getTime(), value: inputdata }))
       
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
    const todo_Ubdate_handle = (id) => {
        const find_todo_value = selector.find((curr) => {
            return curr.id == id

        })
        setinputdata(find_todo_value.value)
        settoggle(false)




    }

    // todo_ubdate_handle 

    const ubdate_todo_value = (id) => {
        dispatch(ubdate_todo({ id: id, value: inputdata }))
        // console.log(id)
        settoggle(true)
        setinputdata("")
    }

    return (
        <>
            <div className='container  rounded-lg mian-div p-40  min-h-96  max-w-3xl bg-slate-800 mx-auto  ' style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5), 0px 0px 40px rgba(0, 0, 0, 0.5), 0px 0px 60px rgba(0, 0, 0, 0.5)' }}  >
                <div className='text-center    my-10  text-white'  >
                    <h1 className='text-2xl font-bold  ' >TODO </h1>
                </div>
                <div className='text-center flex flex-row items-center justify-center ' >
                    <input type="text"
                        value={inputdata}
                        onChange={(e) => setinputdata(e.target.value)}
                        className='  border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-500'
                        placeholder='Write YOur Todo' />
                    <button onClick={Add_t} className='text-white ml-8  '   > <FaPlus size={40} /> </button>

                </div>
                <div id='list_todos' className=' my-10 text-center' >
                    {

                        selector.map((todo, inde) => {
                            return <div key={inde} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} >

                                <table  >
                                    <tr className='bg-white  ' >
                                        <td className='w-96  text-wrap  text-lg font-bold text-left px-4 py-6 ' style={{ border: "1px solid black" }}  >
                                            {todo.value}
                                        </td>
                                        {
                                            tggole ? <td onClick={() => todo_Ubdate_handle(todo.id)} className='text-left text-lg py-6 px-4 font-bold ' style={{ border: "1px solid black" }}   >
                                                <MdOutlineUpdateDisabled  size={35}/>
                                            </td> :
                                                <td onClick={() => ubdate_todo_value(todo.id)} className='text-left text-lg py-6 px-4 font-bold text-nowrap ' style={{ border: "1px solid black" }}  >
                                                    ubdate todo
                                                </td>
                                        }
                                        <td onClick={() => delet_todo_handle(todo.id)} className='text-left text-lg py-6 px-4 font-bold  ' style={{ border: "1px solid black" }}  >
                                            <  MdDeleteSweep size={35} />
                                        </td>
                                    </tr>
                                </table>







                            </div>
                        })

                    }

                </div>


            </div>
        </>
    )
}

export default Todo