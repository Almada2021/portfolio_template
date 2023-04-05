import { styled } from '@mui/material';
import ProyectsBook from '../components/ProyectsBook';
const ProyectPage = styled("div")(({theme}) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginTop:"68px",
  minheight: "100vh",
  margin: "20vh 0",

}));
const Proyects = () => {
  return (
    <ProyectPage>
      <ProyectsBook/>
    </ProyectPage>
  )
}
export default Proyects;