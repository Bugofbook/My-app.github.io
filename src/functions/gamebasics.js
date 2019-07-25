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