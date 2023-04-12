import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const exist = [
    name.length < 3 || email.length < 6 || message.length < 10,
  ].every(Boolean);
  const form = useRef();
  const sendEmail = () => {
    console.log(form.current.name);
    emailjs
      .send(
        "service_hqfj9kt",
        "template_soh16xn",
        { name, email, message },
        "Xapf7RkL5XvHl8HI7"
      )
      .then(
        (result) => {
          toast.success(result.text + " Email to talmada908@gmail.com")
        },
        (error) => {
          toast.error("Something Wrong")
        }
      );
  };
  return (
    <>
    <ToastContainer/>
    <Box
      ref={form}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        minHeight: "30vh",
        flexDirection: "column",
        padding: "100px",
      }}
      noValidate
      autoComplete="off"
    >

      <TextField
        error={false}
        defaultValue={name}
        value={name}
        helperText={name.length < 3  && name.length !== 0 ?"Need be 3 letters" : null}
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="name"
        size="small"
        required
        variant="outlined"
      />
      <TextField
        error={false}
        defaultValue={email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="email"
        helperText={email.length < 6 && email.length !== 0 ? "Need be a valid email" : null}
        required
        size="small"
        type="email"
        variant="outlined"
      />
      <TextField
        error={false}
        defaultValue={message}
        sx={{cursor: "pointer"}}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="outlined-basic"
        label="message"
        multiline
        maxRows={4}
        helperText={message.length  < 10 && message.length !== 0 ?"Need 10 letters" :null}
        required
        size="small"
        variant="outlined"
      />
      <Button  disabled={exist} click={sendEmail} text="Send an Email" />
    </Box>
    </>

  );
}

export default Form;
