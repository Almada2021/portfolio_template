import React from 'react'
import  {motion} from "framer-motion";
import {styled} from '@mui/material';

const Title = styled(motion.h1)(({theme}) => ({
  fontSize: "34px",
  color: "#369",
  margin:0,
  [theme.breakpoints.up("md")]:{
    fontSize : "52px"
  }

}));
const Paragraph =  styled(motion.p)(({theme}) =>({
  color: "369",
  margin:0,
  fontSize: "17px",
  [theme.breakpoints.up("md")]:{
    fontSize:"26px"
  }
}))
export const LayoutHome = () => {

  return (
   <div style={{marginTop:"48px", background:"linear-gradient(to bottom, #72FFFF,#5800FF)", height:"400px", display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
      <Title
        animate={{
           color: "#fff",
           x: "10vw",
        }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
          Tobias Almada
      </Title>
      <Paragraph
        animate={{
          color: "#fff",
          x: "10vw",
        }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        front-end Developer
      </Paragraph>
   </div>
  )
}
