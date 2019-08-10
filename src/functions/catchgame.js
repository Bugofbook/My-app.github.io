
export const calculationArrays = (chess ={}, squares = []) => {
	let resultArray = []
	let targetvalue = chess.value
	let lengthx = squares.length
	for (let i = 0 ; i < 9 ; i++) {
		let vec = [Math.floor( i / 3) - 1 ,(i % 3) - 1]
		resultArray[i] = []
		if (vec === [0,0]) {
			continue
		}
		for (let j = 1, jth = lengthx ; j < jth ; j ++) {
			let tapointx = chess.rowskey + vec[0] * j
			let tapointy = chess.columnskey + vec[1] * j
			let tavalue = ""
			if ( tapointx >= 0 && tapointx < lengthx && tapointy >= 0 && tapointy < squares[tapointx].length) {
				tavalue = squares[chess.rowskey + vec[0] * j][chess.columnskey + vec[1] * j].value
			}
			if (tavalue === "") {
				resultArray[i] = []
				break
			}
			else if (tavalue === targetvalue) {
				break
			}
			else if (tavalue !== targetvalue) {
				resultArray[i][j - 1] = {
					rowskey: chess.rowskey + vec[0] * j ,
					columnskey: chess.columnskey + vec[1] * j ,
					value: chess.value,
					owner: chess.owner,
					lock: chess.lock
				}
			}
		}
	}
	return resultArray
}
