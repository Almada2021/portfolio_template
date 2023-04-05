import React from 'react'
import { styled } from '@mui/material';
const LinkRef = styled("a")(({theme})=>({
    width:"80px",
    height: "30px",
    display:"block",
    textDecoration : "none",
    "&:visited":{
        color: "inherit",
    }
}))
const ButtonComponent = styled("button")(({theme}) =>({
    border:"none",
    borderRadius: "4%",
    backgroundColor:theme.palette.primary.main,
    color: theme.palette.text.main,
    height: "100%",
    padding : "0",
    margin:"0",
    width:"100%",
    "&:focus":{
        outline: "none"
    }
}));

const Button = ({text, link, click}) => {
    const handleClick = () => {
        console.log("clicked", click)
        click()
    }
  return (
        <LinkRef href={link ? link : null} onClick={handleClick}>
            <ButtonComponent >
                {text}
            </ButtonComponent>
        </LinkRef>

  )

}
export default Button;
