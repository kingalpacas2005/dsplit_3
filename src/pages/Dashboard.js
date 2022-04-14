import React from 'react';
import imagelogo from "C:/Users/Alpacas/Documents/PBWS/desplit3/desplit/src/pages/a.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="bodyhome-dashboard">
            <Link to="/" className="boxlogo-home">
                <img src={imagelogo}  className='imagelogo-home'/>
            </Link>
            <div className="header-dashboard">
                <div className="tittlebox-dashboard">
                    <h1 className="tittle-dashboard">DSplit</h1>
                    <h1 className="slashheader-dashboard">-</h1>
                    <h1 className="nameheader-dashboard"> Dashboard</h1>
                </div>
            </div>
            <div className="body-dashboard">
                <div className="titlebody-dashboard">
                    <h1>Your Groups</h1>                 
                </div>
                <div className="accounts-dashboard">
                    <div className="topnameacounts-dashboard">
                        <div className="namegroup-dashboard">Group Name</div>
                        <div className="namegroup-dashboard">accounts</div>
                        <div className="namegroup-dashboard">Pending decision</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;