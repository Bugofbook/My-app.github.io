## Info.js

defination reducer of game info

* Info:{}
  * gamestate:""
	* nowplayer:""
	* winner:""
	* loser:""
	* row:number
	* column:number

## list.js

defination reducer of saving point-history 

* Lists:[]
  * list:{}
    * column:number
		* row:number
		* owner:""

## Squares.js

defination reducer of Squares

* Squares:[]
  * rowsquare:[]
	   * columnsquare:{}
		     * value:""
				 * owner:""
				 * lock:boolen 
