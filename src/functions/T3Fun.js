import  {CheckSquareValue} from './gamebasics'
// push chessman into square
export const ChangePlayer = (Nowplayer) =>
{
    if (Nowplayer === "Player1" )
        return "Player2"
    else
        return "Player1"
}
//find length 
export const FindLength = (VectorX, VectorY) => length => (CurrentPoint , NowSquares) => {
    let contilen = 1
    let CheckValue = CheckSquareValue(NowSquares[CurrentPoint.x][CurrentPoint.y].value)
    let lengthx = NowSquares.length
    for (let i = 1 ; i < length ; i++) {
        let tapointx = CurrentPoint.x - i * VectorX
        let tapointy = CurrentPoint.y - i * VectorY
        if ( tapointx >= 0 && tapointx < lengthx && tapointy >= 0 && tapointy < NowSquares[tapointx].length){
            contilen += CheckValue(NowSquares[tapointx][tapointy])
        }
        else{
            break
        }
    }
    for (let j = 1 ; j< length ; j ++) {
        let tapointx = CurrentPoint.x + j * VectorX
        let tapointy =  CurrentPoint.y + j * VectorY
        if ( tapointx >= 0 && tapointx < lengthx && tapointy >= 0 && tapointy < NowSquares[tapointx].length){
            contilen += CheckValue(NowSquares[tapointx][tapointy])
        }
        else{
            break
        }
    }
    return contilen
}
//find maxlength for row,Column ,Slash or BackSlash by Currying
export const Rowlength = FindLength(1,0) 
export const Columnlength = FindLength(0,1)
export const Slashlength = FindLength(1,1)
export const BackSlashlength = FindLength(1,-1)
//judge length exist
export const JudgeWinner = length => (CurrentPoint , Squares) =>
{
    return  Rowlength(length)(CurrentPoint,Squares) >= length || 
    Columnlength(length)(CurrentPoint,Squares) >= length ||
    Slashlength(length)(CurrentPoint,Squares) >= length  ||
    BackSlashlength(length)(CurrentPoint,Squares) >= length 
}
// ============
export const SquaresDeepCopy = (Squares) =>     //雙層深拷貝。是說，有沒有更好的寫法?
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


