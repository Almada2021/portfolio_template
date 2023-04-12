import React, { useState } from "react";


export const ModalContext = React.createContext();
export function ModalProvider ({children}) {
    const initialState = {
        open: false,
        content: "texto"
    }
    const [modal, setModal] = useState(initialState);
    const changeModal = () => {
        setModal((state) => ({...state, open: !state.open}))
    }
    const changeContent = (values) => {
        setModal((state) => ({...state, content: values}))
    }
    return(
        <>
            <ModalContext.Provider value={{modal, setModal, changeModal, changeContent}}>
                {children}
            </ModalContext.Provider>
        </>
    )
}
