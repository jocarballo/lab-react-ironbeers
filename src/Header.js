import React from "react";
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <div>
            <div className="header-container">
                <Link className="App-link" to='/'>
                <img className="home-image" src="../home.png" alt="home-image" />
                </Link>
            </div>
        </div>
    )
}


export default Header;
