import React, {useRef} from 'react'
import { styled } from '@mui/material'
import {motion, useScroll} from "framer-motion"
const Container = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
    display:"flex",
    height: "80vh",
    width: "75vw",
    flexWrap: "wrap",
}));
const CircleBackground = styled("circle")(({theme}) => ({
    stroke: "#fff",
    opacity: "0.3"
}))
const CircleContainer =styled(motion.circle)(({theme}) =>({
    stroke: "#fff",
    fill: theme.palette.primary.main,
    opacity: "0.8",
}));

export default function ProyectsBook() {
    const ref = useRef(null)
    const { scrollXProgress } = useScroll({ container: ref });
    return (
        <Container >
            <div style={{width: "100vw"}}>
                <svg  width="100" height="100" viewBox="0 0 100 100" 
                    style={{
                        position: "absolute",
                        transform: "rotate(-90deg)"

                    }}
                >
                    <CircleBackground cx="50" cy="50" r="30" pathLength="1" fill='#000'  />
                    <CircleContainer
                        cx="50"
                        cy="50"
                        r="30"
                        strokeWidth="10"
                        color="#ff0"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollXProgress }}
                    />
                </svg>
            </div>
           
          <ul
            onScroll={() => { console.log(scrollXProgress)}}
            ref={ref}
            style={{
                display: "flex",
                flexDirection:"row",
                listStyle: "none",
                height: "300px",
                overflowX: "scroll",
                padding: "20px 0",
                flex: "0 0 80%",
                margin: "0 auto",
            }}
          >
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
            <li className='item' style={{background:"#fff", flex: "0 0 200px", margin :"0 20px 0 0"}}></li>
          </ul>
          {/* <ListPages/> */}
        </Container>
    )
}
