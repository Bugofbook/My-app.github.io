import { compose } from 'redux';
import PropTypes from 'prop-types';
import { GamePage } from "../ui/page";
import { SquaresDeepCopy } from "../../functions/gamebasics";
import { TTTSJudge, addNewChess, removeOldChess,  } from '../../functions/connectgame'

export class TioTeoTicForm extends GamePage {
	mainchange = (rowskey, columnskey) => {
		const history = this.state.history.slice(0, this.state.gameinfo.turns + 1);
    const current = history[history.length - 1];
		const player = current.nowplayer
		const info = this.state.gameinfo
		let newsquares = SquaresDeepCopy(current.squares);
		// check broad is lock
    if (newsquares[rowskey][columnskey].lock === true || info.gamestate === "Game End")
			return
		// construct new chess
		const  newchess = {
			rowskey: rowskey,
      columnskey: columnskey,
      value: (player === "player1") ? "O" : "X",
			owner: player,
			lock: true,
		}
		// use compose function( from redux,js) to processing state, and get new state
		let processobject = compose(
			TTTSJudge,
			addNewChess,
			removeOldChess
	)({
		squares: newsquares,
		lists: current.showlists.slice(),
		actionlists: info.actionlists.slice(),
		chess: newchess,
		gamestate: info.gamestate,
	})
		// set state
		let winner = ""
		let loser = ""
	if (processobject.gamestate === "Game End") {
			winner = player
			loser = (player === "player1") ? "player2" : "player1"
		}
		this.setState({
			history: history.concat([
				{
					squares: processobject.squares,
					showlists: processobject.lists,
					nowplayer: (player === "player1") ? "player2" : "player1"
				}]),
			gameinfo: {
				...info,
				actionlists: processobject.actionlists,
				turns: info.turns + 1,
				gamestate: processobject.gamestate,
				winner: winner,
				loser: loser,
			},
			})
  }
}





// ========================================

TioTeoTicForm.propTypes = {
  squares: PropTypes.array,
  list: PropTypes.array,
  info: PropTypes.object,
  addlist: PropTypes.func,
  dellist: PropTypes.func,
  addchess: PropTypes.func,
  changeplayer: PropTypes.func,
  endgame: PropTypes.func,
  begingame: PropTypes.func,
  beginboard: PropTypes.func,
  clearlist: PropTypes.func
}