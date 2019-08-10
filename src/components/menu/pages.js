import React from 'react';
import { Link } from 'react-router-dom'
import { MainMenu } from './MainMenu'
import '../../stylesheets/pages.scss'
import { OthelloGame, TioTeoTicGame } from "../contain/contain";
import { OthelloInitialData, TicTacToeInitialData } from "./initialstatedata";
import { PAGES } from "../../consters/pagesconster";

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>


export const Home = () =>
    <section className="home" >
        <hi>[首頁]</hi>
        <nav>
            {// Use conster of Pages to map Home Page
                PAGES.map((page) => {
                return <Link to ={page.id} >{`[${page.zh_name}]`}</Link>
            })}
        </nav>
    </section>

    export const TicTacToe = () =>
    <PageTemplate>
            <TioTeoTicGame initialstate = {TicTacToeInitialData} />
    </PageTemplate>

export const Othello = () =>
    <PageTemplate>
        <OthelloGame initialstate = {OthelloInitialData}/>
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="Whoops-404">
        <hi>找不到以'{location.pathname}'為名稱的分頁</hi>
    </div>