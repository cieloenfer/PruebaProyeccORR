import { useState } from 'react'
import * as React from 'react'
import  Navbar from  "./components/Nabvar/Navbar";
import Title from './components/Title';
import itemListContainer from "./components/itemListContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
   <ChakraProvider/>
   <h1>Home</h1>
    <route path="/" element={<HOME/>}/>
      <Routes>
        <Route exact path = "/" element = {<ItemListContainer />} />
        <Route exact path = '/category/:categoryName' element = 
        {<ItemListContainer />} />
      </Routes>
   <ItemDetailContainrer/>
      </BrowserRouter>
    </>
  )
}

export default App













  
 
     
