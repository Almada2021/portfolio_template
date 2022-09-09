import React from 'react';
import Cards from '../components/Cards';
import { styled } from '@mui/material';
import { LayoutHome } from '../components/LayoutHome';
const PageContainer = styled("div")({
  display:"flex",
  flexDirection : "column",
  justifyContent:"center",
})
export const Home = () => {
  return (
    <PageContainer>
        <LayoutHome/>
        <Cards/>
    </PageContainer>
  )
}
