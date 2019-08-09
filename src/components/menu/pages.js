import React from 'react';
import { Link } from 'react-router-dom'
import { MainMenu } from './MainMenu'
import '../../stylesheets/pages.scss'
//import { App} from '../contain/tioteotic'
import { App } from "../ui/TioTeoTicnew";
//import { OthelloGame } from "../contain/othello";
import { OthelloGame } from "../ui/Othello";

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>


export const Home = () =>
    <section className="home" >
        <hi>[首頁]</hi>
        <nav>
            <Link to="TicTacToe">[井字棋]</Link>
            <Link to="Othello">[黑白棋]</Link>
        </nav>
    </section>

export const TicTacToe = () =>
    <PageTemplate>
        <section className="game" >
            <App />
        </section>
    </PageTemplate>

export const Othello = () =>
    <PageTemplate>
    <section className="game" >
        <OthelloGame />
    </section>
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="Whoops-404">
        <hi>找不到以'{location.pathname}'為名稱的分頁</hi>
    </div>