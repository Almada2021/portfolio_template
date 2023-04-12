import {useRef} from 'react'
import { styled } from '@mui/material'
import {motion, useScroll} from "framer-motion"
import ProyectCard from './ProyectCard/ProyectCard';
import { listProyect } from '../ListProyects/listProyects';
const Container = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
    display:"flex",
    minHeight: "400px",
    maxHeight: "800px",
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
            {
                listProyect.map( ({title, description, img, deploy, github}) => (
                    <ProyectCard
                        title={title}
                        description={description}
                        key={title + deploy}
                        image={img}
                        deploy={deploy}
                        github={github}
                    />
                ))
            }
          </ul>
        </Container>
    )
}
