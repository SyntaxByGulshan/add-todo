import React from "react";
import { Routes, Route,BrowserRouter } from "react-router";
import Layout from "./components/layout";
import Home from "./components/home"
import Login from "./components/login";
import Add from "./components/add";
function App() {
    

    return (
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="add" element={<Add/>}/>
        </Route>       
        </Routes>
        </BrowserRouter>

        </div>
    );
}

export default App;

