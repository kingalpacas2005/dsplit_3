import React from 'react';
import imagelogo from "C:/Users/Alpacas/Documents/PBWS/desplit3/desplit/src/pages/a.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
    <div className="body-home">
        <Link to="/" className="boxlogo-home">
            <img src={imagelogo}  className='imagelogo-home'/>
        </Link>
        <div className="header-home">
            <h1 className="tittlebox-home">DSplit</h1>
        </div>
        <div className="frase-home">
            <p className="linha-home">|</p>
            <p className="effectfrase-home">One pays for all. All pays for one.</p>
            <p className="linha-home">|</p>
        </div>
        <div className="buttonleunchapp-home">
            <Link to="/Dashboard" className="linkaaa-home">
                <button className="pressbutton-home">Launch App</button>
            </Link>
        </div>
        <div className="informations-home">
            <div className="box-home">
                <h1 className="tittleinfo-home">Users</h1>
                <p className="textinfo-home">7M</p>
            </div>
            <div className="box-home">
                <h1 className="tittleinfo-home">Money Flow</h1>
                <p className="textinfo-home">10M</p>
            </div>
            <div className="box-home">
                <h1 className="tittleinfo-home">Daily Splits</h1>
                <p className="textinfo-home">300K</p>
            </div>
        </div>
    </div>
    );
};

export default Home;