import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import {
  Home,
  TicTacToe,
  Othello,
  Whoops404
} from './components/menu/pages'
import { storeFactory } from "./redux/Store";

window.React = React

const store = storeFactory({
  Squares: Array(3).fill(Array(3).fill({value:"", owner:"", lock: false})),
  List: [],
  Info: {
    gamestate: "Game Begin",
    player: "player1",
    winner: "",
    loser: "",
  }
})

render(
  <Provider store={store} >
  <HashRouter>
  <div className="main" >
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/TicTacToe" component={TicTacToe} />
  <Route path="/Othello" component={Othello} />
  <Route component={Whoops404} />
  </Switch>
  </div>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
)
