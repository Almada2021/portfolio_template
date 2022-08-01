import React from 'react'
import  {motion} from "framer-motion"
const BoxFrame = () => {
  return (
    <motion.div
        animate={{
            backgroundColor: "#f00"
        }}
    >
        BoxFrame
    </motion.div>
  )
}
export default BoxFrame;