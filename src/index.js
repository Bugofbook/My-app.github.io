import React from 'react'
import { render } from 'react-dom'
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

window.React = React

render(
  <HashRouter>
    <div className="main" >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/TicTacToe" component={TicTacToe} />
        <Route path="/Othello" component={Othello} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)
