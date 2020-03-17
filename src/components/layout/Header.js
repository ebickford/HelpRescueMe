/*Erika Bickford
* All Rights Reserved (c) 2020
* March 2, 2020*/
import React from "react";
import {Link} from 'react-router-dom'
import Background from "../pages/images/collage.jpg"

function Header() {
    return (
        <header style={headerStyle}>
            <div>
                <h1>Help Rescue Me</h1>
                <div>
                    <Link style={linkStyle} to={"/"}>Home</Link> |
                    <Link style={linkStyle} to={"/about"}> About </Link>
                </div>
                <div>
                    <Link to="/login">
                        <button className={"btn"}>
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, .5)',
    backgroundBlendMode: 'lighten',
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundClip: true,
    textAlign: 'center',
    color: '#111111',
    padding: '10'
}


//
// const horizPhotoStyle = {
//     height: 100,
//     width: 150,
//     margin: 10
// }
//
// const vertPhotoStyle = {
//     height: 150,
//     width: 100,
//     margin: 10
// }

const linkStyle = {
    color: '#111111',
    textDecoration: 'none',
    fontWeight: 'bold'
}


export default Header;
