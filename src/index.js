module.exports = function solveSudoku(arr){
            for(let row = 0; row < arr.length; row++){ 
                for(let col = 0; col < arr[row].length; col++){ 
                    const imPsblValues = []; 
                    if(arr[row][col] == 0){
                        for(let i = 0; i < arr.length; i++){ 
                            if(arr[row][i] > 0) imPsblValues.push(arr[row][i]); 
                            if(arr[i][col] > 0) imPsblValues.push(arr[i][col]); 
                        } 
                        for(let i = Math.floor(row/3)3; i < (Math.floor(row/3)3 + 3) ; i++){ 
                            for(let j = Math.floor(col/3)3; j < (Math.floor(col/3)3 + 3) ; j++){ 
                                if(arr[i][j] > 0){ 
                                    imPsblValues.push(arr[i][j]); 
                                } 
                            } 
                        } 
                        const psblValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(value => !~imPsblValues.indexOf(value)); 

                        let newMatrix = []; 
                        for(let i = 0; i < psblValues.length; i++){ 
                            arr[row][col] = psblValues[i]; 
                            newMatrix=mainFunc(arr); 
                            if(newMatrix) return newMatrix; 
                        } 
                        arr[row][col] = 0; 
                        return false; 
                    } 
                } 
            } 
            return arr; 
        }
}
