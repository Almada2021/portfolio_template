import React from "react";
import { styled } from "@mui/material";
import Form from "../components/Form";
const ContactPage = styled("div")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  marginTop: "68px",
}));
function Contact() {
  return (
    <ContactPage>
      <Form />
    </ContactPage>
  );
}

export default Contact;
