import React from 'react'
import { useState } from 'react'

function Todo_app() {
  const [uvalue, stuvalue] = useState()
  const [inputdata, setdata] = useState('');
  //   console.log(inputdata)
  const [settinarry, arrydata] = useState([]);
  const [title, titldata] = useState([])
  const [titleinput, titlinputdata] = useState('')
  const [showbutton, setshow] = useState(false);
  const [titleindevalue,indef]=useState()

   


  // const title_C_ubdate =()=>{
   
  // }






  function addtodo() {
    if (inputdata === '') {
      alert("please weite in todo")
    }
    else {
      arrydata([...settinarry, inputdata])
      setdata('')
     
      titldata([...title, titleinput])
      titlinputdata('')
      // console.log(title)
      
    }
  }





  // tilte_par_del
  const title_par_Del =(v)=>{
  console.log(v)
  const titledilter = title.filter((c)=>{
     return c != title[v]
  })
  titldata(titledilter)
  // console.log(titledilter)
   
 

  }

  const title_ubdate=(v)=>{
  //  console.log(v)
    const ttt = title.filter((cuu,ind)=>{
      return cuu === title[v]

    })
    // console.log(title_ubdate_file)
    titlinputdata(ttt[0])
    indef(v)
    
    setshow(true)
    
  }


  // par delet app
  function patdel(id) {
    //   console.log(id)
    const deldta = settinarry.filter((cur, ind) => {
      return ind != id;

    })
    arrydata(deldta)
    // confirmvaluedit(id)


  }

  // dell all todo

  function alldel() {
    arrydata([])
  }
  //    ubdate todo 
  function ubdatetodo(k) {
    const ubdatevalue = settinarry.filter((cur) => {
      return cur === settinarry[k];

    })
    setdata(ubdatevalue[0])

    stuvalue(k)
    setshow(true)
  


     

   






  }





  function ubbb() {
    if(settinarry !=''){
      settinarry.splice(uvalue, 1, inputdata);
      console.log(settinarry)
      setshow(false)
    }else{
      alert("ubdate todo")
      
      // console.log(titleindevalue)
     
    }
    title != "" ?  title.splice(titleindevalue,1,titleinput):alert("wtire ubdate title")
    // settinarry.splice(uvalue,1,inputdata)
    
    // setdata('')
    // settinarry.splice(uvalue,0,inputdata)
   





  }




  // console.log(settinarry)

  return (
    <div className='maincontainer' >
      <div className='input_field' >
        <input value={inputdata} onChange={(e) => {
          setdata(e.target.value)


        }} type="text" />
      
        <input type="text" placeholder='title' value={titleinput} onChange={(e) => {
          titlinputdata(e.target.value)
        }} />
      
        {
          showbutton ?  <button onClick={ubbb} >udatedd</button>  : <button onClick={addtodo} > add</button>
        }
        {/* <button onClick={title_C_ubdate} >total</button> */}

         
      </div>
      
      <div className="todo">
        {
          settinarry.map((curr, index) => {
            return <div key={index} >
              <h3   > {curr}</h3>
              <button onClick={() => { patdel(index) }}  >par del </button>
              <button onClick={() => { ubdatetodo(index) }} >ubdate</button>
            </div>
          })

          
          

        }
        {
          title.map((cc, ind)=>{
            return <div key={ind} >
                <h6> {cc}  </h6>
                <button onClick={()=> title_par_Del(ind)}   >   t_par_del</button>
                <button onClick={()=>title_ubdate(ind)} >Title_ubdate</button>
            </div>
            
          })
        }
        



      </div>
         <div className='del_all' >
        <button onClick={alldel}  > all del</button>

      </div>

    </div>
  )
}

export default Todo_app