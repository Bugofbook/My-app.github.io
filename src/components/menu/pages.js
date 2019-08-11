import React from 'react';
import { MainMenu } from './MainMenu'
import '../../stylesheets/pages.scss'
import { OthelloGame, TioTeoTicGame, TioTeoTicSpecialGame, GomokuGame,HomePage } from "../contain/contain";
import { OthelloInitialData, TicTacToeInitialData ,GomokuInitialData ,TicTacToeSpecialInitialData} from "./initialstatedata";
import { OthelloRule, TicTacToeRule, TicTacToeSpecialRule, GomokuRule } from "../../data/gamerule";

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
<PageTemplate>
    <HomePage />
</PageTemplate>


    export const TicTacToe = () =>
    <PageTemplate>
            <TioTeoTicGame initialstate = {TicTacToeInitialData} gamerule={TicTacToeRule} />
    </PageTemplate>

    export const TicTacToeSpecial = () =>
    <PageTemplate>
            <TioTeoTicSpecialGame initialstate = {TicTacToeSpecialInitialData} gamerule={TicTacToeSpecialRule} />
    </PageTemplate>

    export const Gomoku = () =>
    <PageTemplate>
            <GomokuGame initialstate = {GomokuInitialData} gamerule={GomokuRule} />
    </PageTemplate>

    
export const Othello = () =>
    <PageTemplate>
        <OthelloGame initialstate = {OthelloInitialData} gamerule={OthelloRule} />
    </PageTemplate>

export const Whoops404 = ({ location }) =>
    <div className="Whoops-404">
        <hi>找不到以'{location.pathname}'為名稱的分頁</hi>
    </div>