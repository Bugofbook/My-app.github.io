# reducers

constructe reducers and store by redux.js

## constants.js

defination type of actions for reduces of Redux

## store.js

defination store

## info.js

defination reducer of game info

info:{gamestate:"begin game" , nowplayer:"player1", winner:[], loser:[], row:3, column:3}

## list.js

defination reducer of saving point-history 

lists:[list,list]
list:{column:1,row:1,owner:"player1",value:"A"}

## Squares.js

defination reducer of Squares

squares:[rowsquare,rowsquare]
rowsquare:[columnsquare,columnsquare]
columnsquare:{owner:"player1",value:"A",lock:true}