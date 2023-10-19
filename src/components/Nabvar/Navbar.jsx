import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Menu ,MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar'
import CartWidget from "../CartContent/CartWidget";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import itemListContainer from "../itemListContainer";
import ItemDetailContainer from "../ItemDetailContainer";




export default function Navbar() {
  return (
    <>
    <ChakraProvider>
    <BrowserRouter>
    <Header greeting={"Soluciones para una sana convivencia"}/>
    <Navbar/>
     <Routes>
        <Route exact path = "/" element = {<ItemListContainer />} />
        <Route exact path = '/category/:categoryName' element =  {<ItemDetailContainer/>} />
      </Routes>
   </BrowserRouter>
   </ChakraProvider>
</>
  )} 
  


