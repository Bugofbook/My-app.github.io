import React from 'react';
import { Link } from 'react-router-dom'
import { MainMenu } from './MainMenu'
import '../../stylesheets/pages.scss'
import { OthelloGame, TioTeoTicGame } from "../contain/contain";


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

    const TicTacToeinitialstate ={
        history: [{
            squares : Array(3).fill(Array(3).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
            showlists : [],
            nowplayer: "player1"
        }],
        gameinfo:{
            gamename: "TioTeoTic",
            gamestate: "Game Begin",
            player1: "Tom",
            player2: "Jerry",
            winner: "",
            loser:"",
            turns: 0,
            actionlists:[],
        },
    }


export const TicTacToe = () =>
    <PageTemplate>
        <section className="game" >
            <TioTeoTicGame initialstate = {TicTacToeinitialstate} />
        </section>
    </PageTemplate>

    const othelloinitialstate ={
        history: [{
                squares : Array(8).fill(Array(8).fill({value:"", owner:"", lock: false})), // construct 8* 8 squares 
                player1chess:  0,
                player2chess:  0,
                nowplayer: "player1"
        }],
        gameinfo:{
                gamename: "Othello",
                gamestate: "Game Begin",
                player1: "Tom",
                player2: "Jerry",
                winner: "",
                loser:"",
                turns: 0,
                actionlists:[],
        },
    }

export const Othello = () =>
    <PageTemplate>
    <section className="game" >
        <OthelloGame initialstate = {othelloinitialstate}/>
    </section>
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="Whoops-404">
        <hi>找不到以'{location.pathname}'為名稱的分頁</hi>
    </div>