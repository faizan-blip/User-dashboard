import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../Components/Images/7309681-removebg-preview.png'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import pro from '../Components/Images/Blowing_rocket_3d_cartoon_style_icon-removebg-preview.png'
import {  Button } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState  } from 'react';
import Profile from './Profile';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const drawerWidth = 240;
const array = [' Profile', 'Dashboard', 'Total Orders', 'Message', 'Notification']

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const drawer = (
    
    <div style={{ background:"#f4f7fc", overflowX:"hidden" , height:"auto"}} className='draw'>
      <Toolbar  />

      <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"0" , bottom:{sm:"2em" , xs:"0.85em"} , position:"relative" , right:"0.5em"}} >
      <img src={logo} alt="error.loading" width={50} style={{position:"relative" , right:"0.5em" , color:"#f5f5f5"}} /><Typography sx={{color:"#000" , fontWeight:"700" , fontSize:"20px"}} className='family'>My Space</Typography>
      
      </Box>
      <Divider sx={{background:"#d2d2d2"}}/>
      <List>
        {array.map((text, index) => (
          <ListItem key={text} disablePadding>
            {/* <Link to={index === 0 ? '/' : `/${text.toLowerCase().replace(/\s+/g)}`} style={{textDecoration:"none"}}> */}
            <ListItemButton
              onClick={() => handleItemClick(index)}
              sx={{ backgroundColor: selectedItem === index ? '#000 !important' : 'initial' , boxShadow: selectedItem === index ? " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" : "initial" , borderRadius:"100px" }}
            
            >
              
              <ListItemIcon sx={{ color: selectedItem === index ? '#fff' : 'black'   }}>
                {index === 0 ? <AccountBoxIcon /> : null}
                {index === 1 ? <PersonAddIcon  /> : null}
                {index === 2 ? <ShopTwoIcon /> : null}
                {index === 3 ? <MapsUgcIcon /> : null}
                {index === 4 ? <NotificationsActiveIcon /> : null}
              </ListItemIcon>
            
              <ListItemText primary={text} primaryTypographyProps={{fontWeight:"700" , fontSize:"18px"}} sx={{  color: selectedItem === index ? '#fff' : 'black' , width:"100vw" }} className='family'/>
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: '#d2d2d2' , marginTop:"1em" }} />
   <Box sx={{background:"#f4f7fc" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" ,width:"200px" , height:"231px" , margin:{sm:"2.5em 1.2em" , xs:"0.5em 0.7em"} , borderRadius:"17px" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , padding:"0.3em 0.3em" }}>
<img src={pro} alt="pro.error" width={60} />
<Typography sx={{color:"#000" , fontWeight:"900" , fontSize:"25px"}} className='font'>Space Pro</Typography>
<Typography sx={{color:"#7D8093" ,  fontSize:"15px" , textAlign:"center" , fontWeight:"500" , lineHeight:"20px"}} className='font'>Get access to all features on my space</Typography>
  <Button sx={{background:"#f5f5f5" , boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , borderRadius:"25px" ,fontWeight:"700" , marginTop:"0.7em" , color:"#000"}} className='font'>Go Pro</Button>
   </Box> 
    </div>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"rgba(255, 255, 255,0.5)",
    backdropFilter:"blur(14px) saturate(180%)"
        }}
        
      >
        <Toolbar sx={{display:"flex" , justifyContent:"space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}

          > 
<MenuIcon sx={{display:{sm:"block" , xs:"none"}}}/>

</IconButton>
<Typography  onClick={handleDrawerToggle} className='font' sx={{display:"flex" , alignItems:"center" , gap:"10px" , color:"#000" , fontWeight:"700", fontSize:"22px" , position:{sm:"static" , xs:"fixed"}}}><HouseIcon sx={{transform:"Scale(1.7)"}}/> Dashboard</Typography>
    <Box sx={{display:"flex" , alignItems:"center" , gap:"50px"}}>
     <Box sx={{  background:"#F3F8FC" , borderRadius:"17px" , display:{md:"block" , xs:"none"}}}>
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search.."
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Box>
      <Box>
      <Badge color="secondary" variant="dot">
  <NotificationsIcon sx={{color:"#000" ,transform:"Scale(1.5)" }}/>
</Badge>
      </Box>
      </Box>
    
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
  container={container}
  variant="temporary"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  ModalProps={{
    keepMounted: true, // Better open performance on mobile.
  }}
  sx={{
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': { border: 'none', boxSizing: 'border-box', width: drawerWidth , background:"#f4f7fc" },
    fontSize:"30px"
  }}
>
  {drawer}
</Drawer>
<Drawer
  variant="permanent"
  sx={{
    display: { xs: 'none', sm: 'block' },
    '& .MuiDrawer-paper': { border: 'none', boxSizing: 'border-box', width: drawerWidth , background:"#f4f7fc" },
    
  }}
  open
>
  {drawer}
</Drawer>

      </Box>
      <Box
        component="main"
        sx={{ width:"100%" ,background:"#f4f7fc" , height:"100%"}}
    >
      
    <Profile/>
      </Box>
    </Box>

  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;