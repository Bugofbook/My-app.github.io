import  {SetSquareValue, SetSquareLock, SetSquareOwner } from './gamebasics'
// push chessman into square
export const SquareSet = (Nowplayer) =>
{
    if (Nowplayer === "Player1" )
        return {value: "O" , lock: true }
    else
        return {value: "X" , lock: true }
}
export const ChangePlayer = (Nowplayer) =>
{
    if (Nowplayer === "Player1" )
        return "Player2"
    else
        return "Player1"
}
//push chessman by array
export const SquaresChangeByArray = Activity => ChangeArray => NowSquares =>
{
    if (ChangeArray.length === 0) {
        return NowSquares
    }
    else {
        ChangeArray.map( Change => {
            if (Activity === "ADD"){
                NowSquares[Change.x][Change.y] = compose(
                    SetSquareValue(Change.value),
                    SetSquareOwner(Change.owner),
                    SetSquareLock(true)
                )(NowSquares[Change.x][Change.y])
            }
            else if(Activity === "REMOVE"){
                NowSquares[Change.x][Change.y] = compose(
                    SetSquareValue(""),
                    SetSquareOwner(""),
                    SetSquareLock(false)
                )(NowSquares[Change.x][Change.y])
            }
            else {
                console.log("NO Set activity ")
            }
            return Change
        })
        return NowSquares
    }
}
/*
export const SquaresChangePoint = (NowSquares, ChangeArray) =>
{
    let NextSquares = SquaresDeepCopy(NowSquares)
    for (let i = 0 , ilen = ChangeArray.length ; i < ilen ; i++ )
    {
        if ( ChangeArray[i][0] === "ADD")
            NextSquares[ChangeArray[i][2]][ChangeArray[i][3]] = SquareSet(ChangeArray[i][1])
        else
            NextSquares[ChangeArray[i][2]][ChangeArray[i][3]] = {value: "" , lock: false}
    }
    return NextSquares
}
*/
//
export const JudgeWinner = (Squares, rowskey, columnkey) =>
{
    let TargetValue = Squares[rowskey][columnkey].value
    let ColArray = MakeColArray(Squares, columnkey)
    let RowArray = MakeRowArray(Squares,rowskey)
    if (JudgeArrayIs(ColArray , TargetValue ))
        return true
    else if (JudgeArrayIs(RowArray , TargetValue ))
        return true
    else
        return false
}
export const RestrictArray = ( Player , Array , Point,limit) =>
{
    let NewArray = [], AddArray = [] , DelArray = [] ;
    
    if (Array.length < limit)
    {
        NewArray = [...Array,Point]
        AddArray = ["ADD", Player , Point[0],Point[1]]
        return [NewArray, AddArray]
    }
    else
    {
        DelArray = ["DEL", Player , Array[0][0],Array[0][1]]
        NewArray = [Array.filter((value,index) => (index !== 0) ),Point]
        AddArray = ["ADD", Player , Point[0],Point[1]]
        return [NewArray,DelArray,AddArray]        
    }
}
// ============
const SquaresDeepCopy = (Squares) =>     //雙層深拷貝。是說，有沒有更好的寫法?
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
const MakeColArray = (squares, Col) =>
{
    let ColArray = []
    for (let i = 0 , ilen = squares.length ; i < ilen ; i++)
    {
        ColArray[i] = Object.assign({},squares[i][Col])
    }
    return ColArray
}
const MakeRowArray = (squares, Row) =>
{
    let RowArray = []
    for (let i = 0 , ilen = squares.length ; i < ilen ; i++)
    {
        RowArray[i] = Object.assign({},squares[Row][i])
    }
    return RowArray
}
const JudgeArrayIs = (Array , Value ) =>
{
    for (let i = 0, ilen = Array.length ; i < ilen ; i++)
    {
        if (Array[i].value !== Value )
            return false
    }
    return true
}