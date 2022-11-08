import React from "react";

const HeaderSm = ()=>{
    return(
        <div className="hide-on-large-only">
        <div className="devider">
            <div className="row">
                <div className="col s12 m12 l6 right-con-sm">
                    <img className="responsive-img img-2" src="./Images/smjpg.jpg"/>
                </div>
                
                <div className="col s12 m12 l6 left-con">
                    <h3 className="center hero-sm ">GS RANA</h3>
                    <div className="zeros-sm">
                        <h1 className="zero1 center">BAKER AT DAY</h1>
                        <h5 className="zero center">coder at night</h5>
                    </div>
                    <div className="intro">
                        <span className="center">Baker, Coder, Optimistic. Boy from Manali, India, who loves everyting initially, uncertain about his future. Doing Everything to figure out his things. Lets see what he does</span>
                    </div>

                    <div className="b-clutter center">
                        <a className="waves-effect waves-light fa fa-instagram links" href="https://www.instagram.com/thisisgsrana" title="Visit Instagram"></a>
                        <a className="waves-effect waves-light fa fa-youtube links" href="https://www.youtube.com/channel/UCxgVCqygxwTcedU8hsNuHxw"></a>
                        <a className="waves-effect waves-light fa fa-twitter links" href="https://twitter.com/thisisgsrana"></a>
                    </div>


                </div>
            </div>
            
        </div>
        </div>
    );
};

export default HeaderSm;