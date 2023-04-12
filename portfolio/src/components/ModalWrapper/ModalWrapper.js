import { Modal } from "@mui/material";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modalcontext";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ContainerImg from "./ContainerImg/ContainerImg";
import ContainerDescription from "./ContainerDescription/ContainerDescription";
const ContainerModal = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100vw",
  minHeight: "100vh",
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    borderRadius: "4px",
    height: "90vh",
    overflowY: "hidden",
    width: "90vw",
  },
}));
const RightArrowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  height: "20vh",
  width: "100vw",
  [theme.breakpoints.up("md")]: {
    flexWrap: "nowrap",
    width: "90vw",
  },
}));
const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "40vh",
  justifyContent: "flex-start",
  width: "90vw",
  marginBottom: "5px",
  [theme.breakpoints.up("md")]: {
    height: "20vh",
    marginBottom: "0",
    width: "70vw",
  },
}));
const ButtonCloseContainer = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: "80.2vh",
  marginLeft: "40px",
  width: "60px",
  height: "60px",
  marginTop: "30px",
  marginRight: "30px",
  [theme.breakpoints.down("md")]: {
    left: "75vw"
  }
}));
const CloseCustomButton = styled(CloseIcon)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
}));
const ContentContainer = styled(Box)(({ theme }) => ({
  height: "75vh",
  width: "90vw",
}));
const InfoModal = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "3vw",
  marginRight: "3vw",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
const ModalWrapper = () => {
  const { modal, changeModal } = useContext(ModalContext);
  return (
    <>
      <Modal open={modal.open} onClose={changeModal}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <ContainerModal>
            <RightArrowContainer>
              <TitleContainer>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "700", marginLeft: "3vw" }}
                >
                  {modal.content.title}
                </Typography>
              </TitleContainer>
              <Box
                sx={{
                  display: "flex",
                  width: "30vw",
                  // height: "20vh",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <ButtonCloseContainer onClick={changeModal} size="small">
                  <CloseCustomButton />
                </ButtonCloseContainer>
              </Box>
            </RightArrowContainer>
            <ContentContainer>
              <InfoModal>
                <ContainerImg
                  title={modal.content.title}
                  image={modal.content.image}
                />
                <ContainerDescription description={modal.content.description} />
              </InfoModal>
            </ContentContainer>
          </ContainerModal>
        </div>
      </Modal>
    </>
  );
};

export default ModalWrapper;
