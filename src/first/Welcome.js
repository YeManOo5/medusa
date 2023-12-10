import React from 'react'
import background from '../image/background.png' 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function Welcome() {

    const navigate = useNavigate();
    
  return (
    <div style={{backgroundImage:`url(${background})`,
    backgroundRepeat:'no-repeat' , backgroundSize:'cover' ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    textAlign:'center'}}>
        
       <Button variant="contained" style={{justifyContent:'center',marginTop:'30%',backgroundColor:'#B7D9BD',color:'#492643'}} onClick={()=>navigate('/profile')} >Go To Next Page</Button>
    </div>
  )
}

export default Welcome

