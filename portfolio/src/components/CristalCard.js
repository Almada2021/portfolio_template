import React from 'react'
import { styled } from '@mui/material';
import { motion } from 'framer-motion';
const CardContainer = styled(motion.div)(({theme}) => ({
    backgroundColor: "rgba(255, 255, 255, .15)",  
    backdropFilter: "blur(5px)",
    backgroundBlendMode: "lighten",
    boxShadow: "0px 0px 4px #fff",
    display : "flex",
    flexDirection: "column",
    filter : "brightness(110%)",
    opacity: 0.3,
    width: "80%",
    height:"50vh",
    margin: "2%",
    [theme.breakpoints.up("sm")]:{
      width: "50%",
      height: "300px"
    },
    [theme.breakpoints.up("md")]:{
      width: "28%",
      height: "300px"
    }

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
  height: "30%"
}));
const CristalCard = ({imageComponent, title}) => {
  
  return (
    <CardContainer 
      animate={{
        opacity: 1,

      }}
      transition={{ duration: 1 }}
    >
      <LogoContainer>
        {imageComponent}
      </LogoContainer>
      <Title>
        {title}
      </Title>
    </CardContainer>
  )
}
export default CristalCard