import { Box , Button,Typography , Alert} from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function Createprofile() {

    const [email , setEmail]=useState('')
const [name, setName] = useState('')
const[error1 , setError1] = useState(false)
const[emailerror , setEmailerror] = useState(false)
const[nameerror , setNameerror] = useState(false)
const[success , setSuccess] = useState(false)
// const[errormessage , setErrormessage] = useState('')
const[button , setButton] = useState(false)
const changeemail = (e)=>{
   setEmail(e.target.value)
}
const changename = (e)=>{
    setName(e.target.value)
 }

 const url = `https://jsonplaceholder.typicode.com/users`


const submit = async(e) => {
    e.preventDefault();
    if (!email || !name) {
      setError1(true);
      setTimeout(() => {
        setError1(false);
      }, 2000);
    } else if (!validateEmail(email)) {
      setEmailerror(true);
      setTimeout(() => {
        setEmailerror(false);
      }, 2000);
    } else if (name.length <= 6) {
      setNameerror(true);
      setTimeout(() => {
        setNameerror(false);
      }, 2000);
    } else {
      setSuccess(true);
      setButton(true)
      setTimeout(() => {
        setSuccess(false);
        setButton(false)
      }, 2000);
    }

    try{

        const newProfile = {
            name,
            email,
          };

        const res = await fetch(url , {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProfile),
        })
        const data = await res.json();
        console.log(data)
    setName('')
    setEmail('')
    }
    catch(error){
       console.log(error)
    }

  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
    <Box sx={{ display:"flex" , justifyContent:"center" ,height:"100%" , alignItems:"center"}}>
         <Box sx={{background:"#fff" , borderTopLeftRadius:"10px",borderTopRightRadius:"10px" ,  boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , width:"auto" , height:"auto", display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , padding:"2em 2em" , gap:"2em"}}>
         <Typography sx={{fontSize:{sm:"34px" , xs:"24px"} , alignSelf:"center" , fontWeight:"700" , whiteSpace:"nowrap"}} className='family'>Create a new user </Typography>
         <Box sx={{ display:"flex" , flexDirection:"column" , gap:"5px", width:{lg:"340px" , xs:"100%"} }}>
                    <input type="text" name="name" id="" placeholder='Enter your Name' required value={name} onChange={changename} style={{border:" 1px solid #464660" , borderRadius:"10px" , height:"45px" , width:"100%" , alignSelf:"center" , opacity:"0.45"}} />
                    <input type="email" name="email" id="" placeholder='Enter your email' required value={email} onChange={changeemail} style={{border:" 1px solid #464660" , borderRadius:"10px" , height:"45px" , width:"100%" , alignSelf:"center" , opacity:"0.45" , marginTop:"1.5em"}}  />
                    {
        button ? (  <Button variant='contained' disabled sx={{background:'#020100' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , height:"3.5em" , marginTop:"2em", alignSelf:"center"  , boxShadow:" 0px 20px 32px rgba(2, 1, 0, 0.42)", borderRadius:"10px", textTransform:"none"}} onClick={submit} className='family'>Log-in</Button>)
        :
        (  <Button variant='contained' sx={{background:'#020100 !important' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , height:"3.5em", marginTop:"2em", alignSelf:"center"  , boxShadow:" 0px 20px 32px rgba(2, 1, 0, 0.42)", borderRadius:"10px" , textTransform:"none"}} onClick={submit} className='family'>Log In</Button>)
    }
    <Box sx={{marginTop:"0.5em"}}>
 {
    error1 &&
        <Alert severity="error" sx={{ borderRadius:"0px" , alignSelf:"center" , fontSize:{sm:"17px" , xs:"12px"} , fontWeight:"700"}} className='family'>Please Fill the Fields...</Alert>
   }{
     success &&
     <Alert  severity="success" sx={{ borderRadius:"0px" , alignSelf:"center" , fontSize:{sm:"17px" , xs:"12px"} , fontWeight:"700" }} className='family'>Created User Successfully 😎</Alert>
   }
     {emailerror &&  <Alert severity="warning" sx={{ borderRadius:"0px" , alignSelf:"center" , fontSize:{sm:"17px" , xs:"12px"} , fontWeight:"700"}} className='family'>Enter a valid email address</Alert>}
     {nameerror &&   <Alert severity="warning" sx={{ borderRadius:"0px" , alignSelf:"center" , fontSize:{sm:"17px" , xs:"12px"} , fontWeight:"700"}} className='family'>Enter a valid name</Alert>}
     </Box>
                    </Box>
         </Box>
    </Box>
    </>
  )
}
