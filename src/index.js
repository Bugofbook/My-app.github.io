import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import * as Pages from './components/menu/pages'
import { PAGES } from "./data/pagesconster";
import { storeFactory } from "./redux/Store";

window.React = React

const initialDate ={
	gameDatas:[],
	playerData:{
		player1: "Tom",
		player2: "Jerry",
	},
}


const store = storeFactory(initialDate)

render(
  <Provider store={store} >
  <HashRouter>
  <div className="main" >
  <Switch>
  <Route exact path="/" component={Pages["Home"]} />
  {// Use conster of Pages to map Route
    PAGES.map((page,index) => {
    return <Route key={index} path={page.router} component={Pages[page.id]} />
  })}
  <Route component={Pages.Whoops404} />
  </Switch>
  </div>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
)
