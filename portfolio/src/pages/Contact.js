import React from 'react'
import { styled } from '@mui/material';
import Form from '../components/Form';
const ContactPage = styled("div")(({theme}) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop:"68px",
    minheight: "100vh",
    margin: "20vh 0",
  
  }));
function Contact() {
  return (
    <ContactPage>
      <Form/>
    </ContactPage>
  )
}

export default Contact