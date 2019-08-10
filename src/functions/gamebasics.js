/* No use function
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
*/
// set chess to a square
export const setChessToSquares = (chess, squares) => {
	squares[chess.rowskey][chess.columnskey] = {value: chess.value, owner: chess.owner, lock: chess.lock}
	return squares
}
// add chess to list
export const addChessToLists = (chess={}, lists=[]) => lists.concat([chess])
//take one square form Squares ex:TakeSquare(1,1)(nowsquares)
export const TakeSquare = (rowskey, columnkey) => Squares  => Squares[rowskey][columnkey]
//check square's owner ex:CheckOwner("player1")(nowsquare) No use function
// export const CheckSquareOwner = OwnValue => Square  => (Square.owner  === OwnValue) ? true : false 
//check squre's lock ex:Checklock(nowsquare)
export const CheckSquareLock = (Square) => Square.lock
//check square exist
export const CheckSquareExist = (rowslength,columnslength)  => (rowskey, columnskey) => rowskey >= 0 && rowskey < rowslength && columnskey >= 0 && columnskey < columnslength
//check squre's value
export const CheckSquareValue = Value => Square => {
	return(Square.value  === Value) ? 1 : 0
}
//delection point
/*
export const DelPoint = (Square) => {
	return compose(
		SetSquareOwner(""),
		SetSquareValue("")
	)(Square)
}
*/
// copy squares
export const SquaresDeepCopy = (Squares) => 
{
    let CopySquares = []
    for (let i = 0, ilen = Squares.length ; i < ilen ; i++ )
    {
        let Nowrows = Squares[i]
        CopySquares[i] = []
        for (let j = 0, jlen = Nowrows.length ; j < jlen ; j++ )
        {
            CopySquares[i][j] = Object.assign({},Nowrows[j])
        }
    }
    return CopySquares
}