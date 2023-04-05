import * as React from 'react';
import { styled } from '@mui/material'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from "../Button"
import GitHubIcon from '@mui/icons-material/GitHub';
import { ModalContext } from '../../contexts/modalcontext';
const CardContainer = styled(Card)(({theme}) => ({
  background:"#fff",
  minHeight: "200px",
  minWidth: "300px",
  margin: "0 10px",
  maxHeight: "400px",
  maxWidth: "400px",
  [theme.breakpoints.down("md")]:{
    minWidth: "230px"
  }
}));
const ImgDesign = styled("img")(({theme}) => ({
  height: "50%",
  margin: "0",
  objectFit: "contain",
  [theme.breakpoints.up("md")]:{
    width: "100%",
  }
}));
const CardTitle = styled(Typography)( ({theme}) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "26px"
  },
}));
const CardMotion = motion(CardContainer);
export default function ProyectCard({title = "", description = "", image="", deploy="/", github="/"}) {
  const {changeModal} = React.useContext(ModalContext)
  return (
    <CardMotion
      initial={{
        opacity:0
      }}
      transition={{
        ease: "easeOut",
        duration: 1.5
      }}
      whileInView={{
        opacity: 1
      }}
    >
      <ImgDesign 
        src={image}
        loading="lazy"
      />
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <CardTitle
          variant='h4'
          
        >
          {title.substring(0,14)}
        </CardTitle>
      </Box>      
      <Box sx={{display: "flex", alignItems: "center", padding: "10px", flexDirection: "column", height: "10%", overflow: "hidden"}}>
          <Typography
            variant="subtitle2"
            sx={{overflowWrap:"break-word", width: "80%"}}
          >
            {description.substring(0, 40)}

          </Typography>
      </Box>
      <Stack direction="row" height="max-content" justifyContent="center" padding="15px" gap="5px">
        <Button click={changeModal} text="view"></Button>
        <Button text="Go" link={deploy}>Go</Button>
        <Button text={<GitHubIcon/>} link={github}>
        </Button>
      </Stack>      

    </CardMotion>
  );
}
