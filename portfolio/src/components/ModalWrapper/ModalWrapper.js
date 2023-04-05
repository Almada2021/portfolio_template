import { Modal } from "@mui/material"
import { styled } from '@mui/material'
import Box from '@mui/material/Box';
import { useContext } from "react"
import { ModalContext } from "../../contexts/modalcontext"
const ContainerModal = styled(Box)(({theme}) => ({
    backgroundColor: "#fff",
    borderRadius: "4px",
    height: "80vh",
    width: "80vw"
}))
const ModalWrapper = () => {
    const {modal, changeModal} = useContext(ModalContext)
  return (
    <>
        <Modal
            open={modal.open}
            onClose={changeModal}
        >
            <div
                style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}
            >

                <ContainerModal>
                    helo
                </ContainerModal>
            </div>
        </Modal>
    </>
  )
}

export default ModalWrapper