name: "functions";

export const resultDeterminationMatrix3x3 = (matrixMass) => {
    let line = [];
    let c = [
        [],
        []
    ];
    let op;
    for (let k = 0; k < matrixMass.length; k++) {
      let opon = false;
      for (let i = 1; i < matrixMass.length; i++) {
          for (let j = 0; j < matrixMass.length; j++) {
              if (j == k) {
                if (opon == false) {
                  op = matrixMass[j][i-1];
                  opon = true;
                }
              } else if (j < k) {
                  c[j][i-1] = matrixMass[j][i];
              } else if (j > k) {
                  c[j-1][i-1] = matrixMass[j][i];
              }
          }
      }
      let lineop = op * resultDeterminationMatrix2x2(c); // тут вызвать функцию три на три, но в входных данных в эту функцию нужно добавить переменную в которой будет указываться функция Использующаяся тут
      line.push(lineop);
    }
    return line[0]-line[1]+line[2];
}





const resultDeterminationMatrix2x2 = (matrix) => {
  // Цикл один, потому что двигаемся по столбцам
  let mainDiagonal;
  let secondaryDiagonal;
  for (let i = 0; i < matrix.length; i++) {
    switch (i) {
      case 0:
        mainDiagonal = resultMinor2to2(i, matrix);
        break;
      case 1:
        secondaryDiagonal = resultMinor2to2(i, matrix);
        break;
    }
  }

   //console.log(mainDiagonal, secondaryDiagonal)

  return mainDiagonal + secondaryDiagonal;
}

/**
 * Расчёт минора со значением на определённо диагонали матрицы
 * @param { Number } i номер столбца
 * @param { Array[][] }matrix матрица для расчёта
 * @return { Number } результат расчёта минора
 */
const resultMinor2to2 = (i, matrix) => {
  return matrix[0][i] * Math.pow(-1, 1 + i + 1) * matrix[1][matrix.length - i - 1];
}