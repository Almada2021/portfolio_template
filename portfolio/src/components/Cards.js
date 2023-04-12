import React from "react";
import { styled } from "@mui/material";
import CristalCard from "./CristalCard";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Container = styled("div")(({ theme }) => ({
  alignItems: "start",
  display: "flex",
  flexWrap: "wrap",
  padding: "2px 5px",
  minHeight: "80vh",
  marginBottom: "5px",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    marginBottom: "40px",
    minHeight: "inherit",
  },
}));
const Cards = () => {
  
  return (
    <div style={{ width: "1fr", marginBottom: "50px" }}>
      <Container>
        <CristalCard
          title="Download my cv"
          imageComponent={
            <PictureAsPdfIcon
              sx={{ width: "80%", height: "100%", color: "#fff" }}
            />
          }
          description="download my resume in google drive"
          link={process.env.REACT_APP_CV}
        />
        <CristalCard
          title="Linkedin Profile"
          imageComponent={
            <LinkedInIcon
              sx={{ width: "80%", height: "100%", color: "#fff" }}
            />
          }
          description="check out my Linkedin profile"
          link={process.env.REACT_APP_LINKEDIN}
        />
        <CristalCard
          title="Github Profile"
          imageComponent={
            <GitHubIcon sx={{ width: "80%", height: "100%", color: "#fff" }} />
          }
          description="check out my github profile"
          link={process.env.REACT_APP_GITHUB}
        />
      </Container>
    </div>
  );
};
export default Cards;
