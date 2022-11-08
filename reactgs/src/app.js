import React from "react";
import Header from "./components/header";
import HeaderSm from "./components/headerSM";
import YT from "./components/Ytsec";
import Footer from "./components/footer";
import Scripts from "./components/scripts";
import Maker from "./maker/maker";
import {BrowserRouter as Router, 
    Routes,
    Navigate,
    Link,
    Outlet,
    Route} from 'react-dom';
const App = ()=>{
    return(
        <Router>

<div className = "Main-Elem">
        <Header/>
        <HeaderSm/>
        <YT/>
        <Footer/>
        <Scripts/>
        
        </div>

        </Router>
        
    );
};

export default App;