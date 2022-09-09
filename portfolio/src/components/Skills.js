import React from 'react'
import { styled } from '@mui/material';
import {motion} from "framer-motion" 
import LanIcon from '@mui/icons-material/Lan';
const SkillsContainer = styled(motion.div)(({theme})=>({
    height:"30vh",
    filter: "brightness(55%)"
}))
const Skills = () => {

  return (
    <SkillsContainer >
        Skills
        <LanIcon/>
    </SkillsContainer>
  )
}
export default Skills;