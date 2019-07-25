import { compose } from 'redux'
//set squares's value
export const SetSquareValue = ChessValue => Square => {
	Square.value = ChessValue
	return Square
}
//set square's owner ex:SetSquareOwner("player1")(nowsquare)
export const SetSquareOwner = OwnValue => Square => {
	Square.owner = OwnValue
	return Square
}
//set square's lock
export const SetSquareLock = Lockvalue => Square => {
	Square.lock = Lockvalue
	return Square
}
//take one square form Squares ex:TakeSquare(1,1)(nowsquares)
export const TakeSquare = (rowskey, columnkey) => Squares  => Squares[rowskey][columnkey]
//check square's owner ex:CheckOwner("player1")(nowsquare)
export const CheckSquareOwner = OwnValue => Square  => (Square.owner  === OwnValue) ? true : false
//check squre's lock ex:Checklock(nowsquare)
export const CheckSquareLock = (Square) => Square.lock
//check square exist
export const CheckSquareExist = (rowskey, columnkey) => Squares  => !(Squares[rowskey][columnkey] === undefined)
//check squre's value
export const CheckSquareValue = Value => Square => {
	return(Square.value  === Value) ? 1 : 0
}
//delection point
export const DelPoint = (Square) => {
	return compose(
		SetSquareOwner(""),
		SetSquareValue("")
	)(Square)
}
//addPoint
export const AddPoint = (OwnValue, ChessValue) => (Square) => {
	return compose(
		SetSquareOwner(OwnValue),
		SetSquareValue(ChessValue)
	)(Square)
}
