import { connect } from 'react-redux';
import { AddList, DelList, ClearList } from "../../redux/actions/ListAction";
import { SetChess, CreateSquares } from "../../redux/actions/SquareAction";
import { ChangePlayer, SetEndstate, SetBeginstate } from "../../redux/actions/InfoAction";
import { TioTeoTicform } from "../ui/TioteoTic";

const mapStateToProps = state => ({
	squares: state.Squares,
	list: state.Lists,
	info: state.Info
})

const mapDispatchToProps = dispatch => ({
	addlist(owner, value, row,column) {
		dispatch(AddList(owner, value, row,column))
	},
	dellist(order) {
		dispatch(DelList(order))
	},
	addchess(value, owner, lock, row,column) {
		dispatch(SetChess(value, owner, lock, row,column))
	},
	changeplayer(player) {
		dispatch(ChangePlayer(player))
	},
	endgame(winner, loser) {
		dispatch(SetEndstate(winner, loser))
	},
	begingame(player) {
		dispatch(SetBeginstate(player))
	},
	beginboard(row, column) {
		dispatch(CreateSquares(row, column))
	},
	clearlist() {
		dispatch(ClearList())
	}
})

export const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(TioTeoTicform)