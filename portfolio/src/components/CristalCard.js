import React from 'react'
import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import Button from './Button';
const CardContainer = styled(motion.div)(({theme}) => ({
    alignItems: "center",    
    backgroundColor: "rgba(255, 255, 255, .15)",  
    backdropFilter: "blur(5px)",
    backgroundBlendMode: "lighten",
    boxShadow: "0px 0px 4px #fff",
    display : "flex",
    flexDirection: "column",
    filter : "brightness(110%)",
    // width: "80%",
    height:"230px",
    margin: "5px",
    [theme.breakpoints.up("sm")]:{
      // width: "40%",
    },
    [theme.breakpoints.up("md")]:{
      width: "28%",
      height: "260px"
    },
   
}));

const Title = styled("p")(({theme}) => ({ 
  color: theme.palette.text.main,
  fontSize: "24px",
  fontWeight: "500",
  textAlign : "center"


}));

const LogoContainer = styled("div")(({theme}) => ({ 
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "10px",
  height: "25%"
}));

const TextContainer = styled("div")(({theme}) => ({
  color: theme.palette.text.main,
  fontSize: "14px",
  fontWeight: "200",
  width: "90%",
  overflow: "hidden",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize:"16px",
    height:"38px",
  },
  [theme.breakpoints.up("lg")]:{
    height:"20px",      
  },
}));

const BtnContainer = styled("div")(({theme}) =>({
  width:"100%",
  display:"flex",
  marginTop: "20px", 
  alignItems:"center",
  justifyContent: "center",
}))
const CristalCard = ({imageComponent, title, description, link}) => {
  return (
    <CardContainer
      initial={{
        opacity:0,
      }} 
      animate={{
        opacity: 1,
      }}
      
      transition={{ duration: 2 }}
    >
      <LogoContainer>
        {imageComponent}
      </LogoContainer>
      <Title>
        {title}
      </Title>
      <TextContainer>
        {description}
      </TextContainer>
      <BtnContainer >
        <Button text="View" link={link}></Button>
      </BtnContainer>
    </CardContainer>
  )
}
export default CristalCard