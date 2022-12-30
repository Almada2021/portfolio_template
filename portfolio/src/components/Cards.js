import React from 'react';
import { styled } from '@mui/material';
import CristalCard from './CristalCard';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Container = styled("div")(({theme}) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "2% 5%",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
        flexDirection:"row"
    }
}));
const Cards = () => {
  return (
    <div style={{width:"1fr",marginBottom: "50px"}}>
        <Container>
            <CristalCard title="Download my cv" imageComponent={<PictureAsPdfIcon sx={{width:"80%", height: "100%", color: "#fff"}}/>} description="download my resume in google drive" link="https://google.com"/>
            <CristalCard title="Linkedin Profile" imageComponent={<LinkedInIcon sx={{width:"80%", height: "100%", color: "#fff"}}/>} description="check out my Linkedin profile" link="https://www.linkedin.com/in/tobias-almada-62954b20b/"/>
            
            <CristalCard title="Github Profile" imageComponent={<GitHubIcon sx={{width:"80%", height: "100%" , color: "#fff"}}/>} description="check out my github profile" link="https://github.com/Almada2021"/>
        </Container>  
    </div>
    
  )
}
export default Cards