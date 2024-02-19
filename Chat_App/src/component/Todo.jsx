import React, { useEffect, useRef, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
// import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { child, onValue, push, ref, remove, set } from "firebase/database";
import { database } from '../config/firebase';
import { useSelector, useDispatch } from 'react-redux'
import { Addmesseg, delet_messeges } from '../Reducer/MessgesSlice';
import { CiCircleRemove } from "react-icons/ci";
import { MdOutlineUpdateDisabled } from "react-icons/md";


function Todo() {
  const selector = useSelector((e) => e.messeges.messeges_arry)
  const dispatch = useDispatch()
  const [inputvalue, setinputvalue] = useState('')
  const messagesEndRef = useRef(null);
  // useEffect(() => {
  //   const starCountRef = ref(database, `messege/`);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     const messeg_id = Object.keys(data)
  //     console.log(messeg_id)
  //     const convert_to_array = Object.values(data);
  //     const map = messeg_id.map((curr) => {
  //       return { ...data[curr], "key": curr }
  //     })
  //     console.log(map)




  //     dispatch(Addmesseg(convert_to_array))



  //   })
  // }, [])

  useEffect(() => {
    const starCountRef = ref(database, `messege/`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if(data){
        const messeg_id = Object.keys(data);
      const map = messeg_id.map((curr) => {
        return { ...data[curr], "key": curr };
      });
     dispatch(Addmesseg(map));
      }
     
       
    });

  }, []);






  function send_messeg() {
    const newPostKey = push(child(ref(database), 'post')).key;
    set(ref(database, `messege/${newPostKey}`), {
      messeg: inputvalue,
    }).then(() => {
      setinputvalue(""); // Clear input value after successfully sending the message
    }).catch(error => {
      console.error('Error sending message: ', error);
    });
  }

  
  useEffect(() => {
    scrollToBottom();
   
  }, [selector]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function del_mess(id) {
    console.log(id)
    const dataRef = ref(database, `messege/${id}`);
    remove(dataRef).then(() => {
      console.log('Data successfully deleted from Firebase.');
      dispatch(delet_messeges(id)); // Redux state se bhi delete karein
    })
    .catch((error) => {
      console.error('Error deleting data from Firebase: ', error);
    });
     console.log(id)
     dispatch(delet_messeges(id))
  }

 








  return (
    <>
      <Container style={{ width: "350px" }} >
        <Box >


          <Paper className='h-96' sx={{ display: 'flex', overflow: "auto", flexDirection: "column-reverse" }}  >


            <Box display={'flex'} flexDirection={'row'} marginBottom={2} justifyContent={'center'} >
              <Input onChange={(e) => setinputvalue(e.target.value)}  value={inputvalue} className='mr-4' />
              <Button onClick={send_messeg} variant="outlined">send</Button>
            </Box>
            <Box sx={{ display: "flex", width: "5000", flexDirection: "column", paddingLeft: "10px", overflowY: "scroll", height: "100", marginTop: "10px", padding: "10px" }}   >
              {
                selector.map((mess, index) => {
                  return <Box display="flex" flexDirection={'row'} key={index}  >
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingBottom={1}  >
                      <CiCircleRemove onClick={() => del_mess(mess.key)} size={20} color='red' />
                      <MdOutlineUpdateDisabled onClick={() => del_mess(mess.key)} size={20} color='green' />
                    </Box>
                    <h1 className='px-2 rounded-md text-red-500 bg-blue-950 mb-2' style={{ display: 'inline-block', maxWidth: 'fit-content' }}>
                      {mess.messeg}
                    </h1>
                  </Box>




                })
              }

              <div ref={messagesEndRef} />
            </Box>
          </Paper>



        </Box>
      </Container>

    </>
  )
}

export default Todo