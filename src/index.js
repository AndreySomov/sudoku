module.exports = function solveSudoku(matrix) {
	for(let row = 0; row < 9; row++){ 
		for(let col = 0; col < 9; col++){ 
			const imPsblValues = []; 
			if(!matrix[row][col]){ 
				for(let i = 0; i < 9; i++){ 
					let boxRow = Math.floor(row/3)*3 + i%3;
					let boxCol = Math.floor(col/3) *3 + Math.floor(i/3);
					imPsblValues.push(matrix[i][col], matrix[row][i], matrix[boxRow][boxCol]); 
				} 
				for(let key of [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(value => !imPsblValues.includes(value))){ 
					matrix[row][col] = key;
					if(solveSudoku(matrix)) return matrix; 
				} 
				return matrix[row][col] = 0;
			} 
		} 
	} 
	return matrix; 
}
