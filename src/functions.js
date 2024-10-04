const generateButton = document.getElementById('generate-button');
const matrixContainer = document.getElementById('matrix-container');
const submitButton = document.getElementById('submit-button');

generateButton.addEventListener('click', () => {
    // Скрыть поле ввода и кнопку "Сгенерировать"
    const inputContainer = document.getElementById('input-container');
    inputContainer.style.display = 'none';

    // Получить ширину матрицы
    const matrixWidth = document.getElementById('matrix-width').value;

    // Создать div для матрицы
    const matrix = document.createElement('div');
    matrix.classList.add('matrix');
    matrix.style.display = 'flex';
    matrix.style.flexDirection = 'column';

    // Создать строку для каждой строки матрицы
    for (let i = 0; i < matrixWidth; i++) {
        const row = document.createElement('div');
        row.style.display = 'block';

        // Создать input для каждого элемента матрицы
        for (let j = 0; j < matrixWidth; j++) {
            const input = document.createElement('input');
            input.classList.add('matrix-input');
            input.id = `a${i + 1}${j + 1}`
            input.setAttribute('type', 'number');
            input.setAttribute('placeholder', `a${i + 1}${j + 1}`);
            input.style.width = '35px';
            input.style.margin = '10px';
            row.appendChild(input);
        }

        // Добавить строку в матрицу
        matrix.appendChild(row);
    }

    // Добавить div матрицы в контейнер страницы
    matrixContainer.appendChild(matrix);

    // Показать контейнер матрицы
    matrixContainer.style.display = 'block';

    // Показать кнопку "Отправить"
    submitButton.style.display = 'block';

    submitButton.addEventListener('click', MatrixMassiv);
});


function MatrixMassiv() {
    // Получить ширину матрицы
    const matrixWidth = document.getElementById('matrix-width').value;
    let matrixMass = [];

    for (let i = 0; i < matrixWidth; i++) {
        matrixMass[i] = new Array(matrixWidth);
    }

    for (let i = 0; i < matrixWidth; i++) {
        for (let j = 0; j < matrixWidth; j++) {
            let id = document.getElementById(`a${i + 1}${j + 1}`).value;
            matrixMass[i][j] = id;
        }
    }
    res(matrixMass);
}

function easyCalculate(matrixWidth) {
    if (matrixWidth == 2) {
        let result, a1, a2, a3, a4;
        a1 = document.getElementById(a11).value;
        a2 = document.getElementById(a12).value;
        a3 = document.getElementById(a21).value;
        a4 = document.getElementById(a22).value;
        result = (a1 * a4) - (a2 * a3);
    } else {
        let result, a1, a2, a3, a4, a5, a6, a7, a8, a9;
        a1 = document.getElementById(a11).value;
        a2 = document.getElementById(a12).value;
        a3 = document.getElementById(a13).value;
        a4 = document.getElementById(a21).value;
        a5 = document.getElementById(a22).value;
        a6 = document.getElementById(a23).value;
        a7 = document.getElementById(a31).value;
        a8 = document.getElementById(a32).value;
        a9 = document.getElementById(a33).value;
        result = (a1 * a5 * a8) + (a2 * a6 * a7) + (a4 * a4 * a3) - (a3 * a5 * a7) - (a3 * a4 * a9) - (a1 * a8 * a6);
    }
}

function normalCalculate(matrixMass) {
    let operator;
    for (let k = 0; k < matrixMass.length; k++) {
        if (matrixMass.length > 1){
            let op, wrap1;
            let wrap2 = 0;
                                        //!? нужно продумать логику по калькуляции матрицы. на данный момент находит M и a11,a12,a13,a14 нужно продумать логику как сделать так чтобы все данные записались в линию a11*M-a12*M+a13*M-a14*M
            // матрица 4х4 ==| [i=1] 5127 \[i=2] 3002 \[i=3] 1345 \[i=4] 2003 |== 10
            let a = matrixMass;
            let c = [
                [],
                [],
                []
            ];
            for (let i = 1; i < a.length; i++) {
                for (let j = 0; j < a.length; j++) {
                    if (j == k) {
                        op = a[j][i-1];
                    } else if (j < k) {
                        c[j][i-1] = a[j][i];
                    } else if (j > k) {
                        c[j-1][i-1] = a[j][i];
                    }
                }
                let x = normalCalculate(c);
                wrap1 = op * x;
                wrap2 = wrap2+wrap1;
            }
            operator = wrap1 + wrap2;
        }else{
            operator = matrixMass;
        }
    }
    return operator;
}
function res(matrixMass){
    result = normalCalculate(matrixMass);
    alert(result);
}