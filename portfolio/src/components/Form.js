import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
function Form() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        height: "30vh",
        flexDirection: "column",
        padding: "100px",

      }}
      noValidate
      
      autoComplete="off"
    >
        <TextField
            error={false}
            defaultValue=""
            id="outlined-basic" 
            label="Name" 
            size="small" 
            required 
            variant="outlined" 
        />
        <TextField 
            error={false}
            defaultValue=""
            id="outlined-basic" 
            label="Email" 
            required 
            size="small"
            type="email"
            variant="outlined" 
        />
        <TextField 
            error={false}
            defaultValue=""
            id="outlined-basic" 
            label="Message" 
            multiline
            maxRows={4}
            required 
            size="small"
            variant="outlined"
        />
    </Box>
  )
}

export default Form