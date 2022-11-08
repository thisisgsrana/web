import React from "react";

const Header = ()=>{
    return (
        <div className="hide-on-med-and-down">
        <div className="devider">
            <div className="row">
                <div className="col s12 m12 l6 left-con">
                    <h3 className="center hero">GS RANA</h3>
                    <div className="zeros">
                        <h3 className="zero1 center">BAKER AT DAY</h3>
                        <h3 className="zero center">coder at night</h3>
                    </div>
                    <div className="intro">
                        <span className="center">Baker, Coder, Optimistic. Boy from Manali, India, who loves everyting initially, uncertain about his future. Doing Everything to figure out his things. Lets see what he does</span>
                    </div>

                    <div className="b-clutter-a center">
                        <a className="waves-effect waves-light fa fa-instagram links" href="https://www.instagram.com/thisisgsrana"></a>
                        <a className="waves-effect waves-light fa fa-youtube links" href="https://www.youtube.com/channel/UCxgVCqygxwTcedU8hsNuHxw"></a>
                        <a className="waves-effect waves-light fa fa-twitter links" href="https://twitter.com/thisisgsrana"></a>
                    </div>

                </div>
        



                <div className="col s12 m12 l6 right-con">
                    <img className="responsive-img lg-img"
                     src="./Images/gs.jpg" 
                     alt = "Mountains by gs"/>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};
export default Header; 