import { styled } from "@mui/material";
import Box from "@mui/material/Box";
const Container = styled(Box)(({ theme }) => ({
    marginLeft: "2vw",
    paddingTop: "0.5vh",
    display: "flex",
    justifyContent:"center",
    width: "90vw",
    [theme.breakpoints.up("md")]:{
        width: "48vw",
    }

}));
const Paragraph = styled("p")(({ theme }) => ({
  marginRight: "2px",
  marginLeft: "10px",
  textAlign: "start",
  overflowY: "scroll",
  height: "36vh",
  [theme.breakpoints.up("md")]: {
      height: "36vh",
  }
}));
const ContainerDescription = ({description}) => {
  return (
    <Container>
      <Paragraph
      >
        {description}
      </Paragraph>
    </Container>
  );
};

export default ContainerDescription;
