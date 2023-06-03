import { Avatar, Box, Button, Typography , Skeleton} from '@mui/material';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Fab from '@mui/material/Fab';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import Createprofile from './Createprofile';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Profile() {
    const [page, setPage] = useState(1);
    const[profile , setProfile] = useState([])
    const url = `https://jsonplaceholder.typicode.com/users?_page=${page}=all`

    const[open , setOpen] = useState(false)


     const getProfile = async(url) =>{
         try{
         const res = await fetch(url);
         const data = await res.json();
         setProfile((prevProfile)=>{
           return [...prevProfile , ...data]
         })
         console.log(data)
     }
        catch(error){
            console.log(error)
        }
    }

    const getAvatar = (user)=>{
        return `https://avatars.dicebear.com/api/avataaars/${user}.svg`
    }
    const loadMoreProfiles = () => {
        setPage((prevPage) => prevPage + 1);
      };


    useEffect(()=>{
       getProfile(url)    
    },[url])

const openprofile = ()=>{
    setOpen(true)
}

const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <InfiniteScroll
        dataLength={profile.length}
        next={loadMoreProfiles}
        hasMore={true}
        loader={<Skeleton animation="wave" />}
      >
        <Box sx={{marginTop:"5em" , display:"flex" , flexDirection:"column" , gap:"10px" , width:"100%" , padding:"0 0.5em"}}>
        <Fab  variant="extended" sx={{alignSelf:"end" , fontWeight:"700" , background:"#3d96ee"}} className='family' onClick={openprofile} >
  <PersonAddIcon sx={{ mr: 1 }} />
  Create Profile
</Fab>
<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{ sx: { background: 'none', boxShadow:"none" } }}
      >
        <DialogContent sx={{display:"flex" , flexDirection:"column"}} >
        <Createprofile/>
        <Button onClick={handleClose} variant='contained' className='family' sx={{fontWeight:"700" , background:"#000 !important" }}>Close</Button>
        </DialogContent>
      </Dialog>
    <Box sx={{display:"flex"  , gap:"15px"  , flexWrap:{xl:"wrap" , xs:"wrap"} , justifyContent:"center" }}>
    {
        profile.map((user , index)=>(
           <Box key={index} sx={{width:"45%" , height:"100%" , minWidth:"300px",minHeight:"250px",background:"#fff" , borderRadius:"10px" ,  boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , display:"flex" , alignItems:"center" ,padding:"0.5em 1em" , justifyContent:"center" , gap:{lg:"50px" , xs:"25px"} , flexWrap:{lg:"nowrap" , xs:"wrap"}}}>
        <Box sx={{display:"flex", flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"3px" , width:"40%" , color:"#000"}}  >
         <Avatar alt="avatar" src={getAvatar(user.id)}  sx={{ width: 100, height: 100 }} />
         <Typography sx={{fontSize:"19px" , fontWeight:"700" , textAlign:"center"}} className='family'>{user.name}</Typography>
         <Typography sx={{fontSize:"18px" , fontWeight:"400" }}>({user.username})</Typography>
         </Box>
            <Box sx={{width:"100%" , height:"auto"  , display:"flex", flexDirection:"column" , gap:"10px" , color:"whitesmoke"}}>
           <Box sx={{display:"flex", flexDirection:"column"}}  >
           <Typography sx={{fontSize:"17px" , fontWeight:"700",color:"#252525" , opacity:"0.7"}} className='family'>Location</Typography>
           <Typography sx={{color:"#000"}} className='family'>{user.address.street} , {user.address.city}</Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column"}}  >
           <Typography sx={{fontSize:"17px" , fontWeight:"700", color:"#252525" , opacity:"0.7"}} className='family'>Website</Typography>
           <Typography sx={{color:"#000" }} className='family' >{user.website} <OpenInNewIcon sx={{transform:"Scale(0.7)"}}/> </Typography>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column"}}  >
           <Typography sx={{fontSize:"17px" , fontWeight:"700",color:"#252525" , opacity:"0.7"}} className='family'>Email</Typography>
           <Typography sx={{color:"#000"}} className='family'>{user.email}</Typography>
        </Box>
        <Box sx={{display:"flex" , alignSelf:"end" , gap:"7px"}}  >
        <Button sx={{ color:"#000" , borderColor:"#000 !important", fontWeight:"700"}} variant='outlined' className='family'>Hire me</Button>
        <Button sx={{background:"#000 !important" , color:"#f5f5f5" , fontWeight:"700"}} variant='contained' className='family'>Follow</Button>
        </Box>
            </Box>
         
            </Box>
            
        ))}
    
        </Box>
        </Box>
        </InfiniteScroll>
    </>
  )
}
