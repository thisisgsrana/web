import React from "react";
import Header from "./header";
import HeaderSm from "./headerSM";
import YT from "./Ytsec";
import Footer from "./footer";
import Scripts from "./scripts";



const App = ()=>{
    return(
        <div className = "Main-Elem">
        <Header/>
        <HeaderSm/>
        <YT/>
        <Footer/>
        <Scripts/>
        </div>
    );
};

export default App;