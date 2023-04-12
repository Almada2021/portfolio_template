import { styled } from "@mui/material";
import Box from "@mui/material/Box";
const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]:{
    width: "34vw",
    height: "40vh",
  }
}));
const ImgComponent = styled("img")(({ theme }) => ({
    objectFit: "contain",
    width: "80vw",
    height: "60vh",
    [theme.breakpoints.up("md")]:{
        width: "34vw",
        height: "40vh",
    }
}));
const ContainerImg = ({ title, image }) => {
  return (
    <Container>
      <ImgComponent alt={`${title} preview`} src={image}></ImgComponent>
    </Container>
  );
};

export default ContainerImg;
