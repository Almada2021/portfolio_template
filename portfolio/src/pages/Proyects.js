import React from 'react'
import { styled } from '@mui/material';
import ProyectsBook from '../components/ProyectsBook';
const ProyectPage = styled("div")(({theme}) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginTop:"68px",
  height: "100vh"
}));
const Proyects = () => {
  return (
    <ProyectPage>
      <ProyectsBook/>
    </ProyectPage>
  )
}
export default Proyects;