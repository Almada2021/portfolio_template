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
const ButtonComponent = styled("button")(({theme, disabled}) =>({
    borderRadius: "4%",
    backgroundColor: disabled ?  "#eee" : theme.palette.primary.main ,
    color: !disabled ? theme.palette.text.main : "#000",
    height: "100%",
    padding : "0",
    cursor: !disabled ? "pointer" : "default",
    border: !disabled ? "none" : "1px solid #000",
    margin:"0",
    width:"100%",
    "&:focus":{
        outline: "none"
    }
}));

const Button = ({text, link, click, disabled}) => {
    const handleClick = (e) => {
        if(disabled && !link){
            return null
        }
        if(!link){
            e.preventDefault();
        }
        click()
    }
  return (
        <LinkRef  href={link ? link : null} onClick={handleClick}>
            <ButtonComponent disabled={disabled}>
                {text}
            </ButtonComponent>
        </LinkRef>

  )

}
export default Button;
