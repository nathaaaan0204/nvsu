 import React from 'react'

import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { Route, Router, Routes } from "react-router-dom";
import { SignupPage } from './Pages/SignupPage';
 const App = () => {
   return (
     <>
  
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/LoginPage" element={<LoginPage/>} />
        <Route path="/SignupPage" element={<SignupPage/>} />
      </Routes>
     </>
   )
 }
 
 export default App