import React from 'react'
import { styled } from '@mui/material';
import  {Link} from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; 

const ContainerFooter = styled("div")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    display:"flex",
    height: "200px",
    position:"sticky",
    color:theme.palette.text.main,

    gap:"2px",
}));
const ListContainer = styled("ul")(({theme}) =>({
    alignItems:"start",
    height: "50%",
    display:"flex",
    flexDirection:"column",
    width: "16vw",
    justifyContent:"space-between",
    listStyle: "none",

}));
const ListItem = styled(Link)(({theme}) =>({
    color:theme.palette.text.main,
    textDecoration: "none",
    display :"flex",
    justifyContent: "center",
}))
const ExternalLink = styled("a")(({theme}) =>({
    color:theme.palette.text.main,
    display: "flex",
    alignItems: "center",
    gap: "0 2px",
    justifyContent: "center",
    textDecoration: "none"
}))
const Footer = () => {
  return (
    <ContainerFooter>
        <ListContainer>
            <h3>Navigate</h3>
            <ListItem to="/">Home</ListItem>
            <ListItem to="/Proyects">Proyect</ListItem>
            <ListItem to="/Contact">Contact</ListItem>
            <p style={{fontWeight: 700}}>Tobias Almada </p>
        </ListContainer>
        <ListContainer>
            <h3>Social Networks</h3>
            <ExternalLink href='https://google.com'><LinkedInIcon/>Linkedin</ExternalLink>
            <ExternalLink href='https://www.linkedin.com/in/tobias-almada-62954b20b/'><GitHubIcon/>Github</ExternalLink>
            <ExternalLink href='https://github.com/Almada2021'><PictureAsPdfIcon/>CV</ExternalLink>
        </ListContainer>
    </ContainerFooter>
  )
}    
export default Footer;