import React from 'react';
import { NavLink } from 'react-router-dom'
import '../../stylesheets/menus.scss'


const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}


export const MainMenu = () => 
    <nav className="main-menu">
        <NavLink to="/">
            [首頁]
        </NavLink>
        <NavLink to="/TicTacToe" activeStyle={selectedStyle}>
            [井字棋]
        </NavLink>
        <NavLink to="/Othello" activeStyle={selectedStyle}>
            [黑白棋]
        </NavLink>
    </nav>

export const TopMenu = ({ match , children }) =>
<ul className="TopMenu">

</ul>