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
    if (matrixWidth == 2 || matrixWidth == 3) {
        easyCalculate(matrixWidth);
    } else {
        normalCalculate(matrixWidth, matrixMass)
    }
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

function normalCalculate(matrixWidth, matrixMass) {
    let n = matrixWidth;
    let a = matrixMass;
    let c = new int[n - 1, n - 1];
    for (let k = 0; k < n; k++) { //!сделать вместо n => a.length при переносе в отдельную функцию. Так как при 4на4 пожно использовать n, но так как тот же код будет использоваться дальше, то масив будет уже 3на3 а число в n 4. по этому нужно использовать a.length
        for (let i = 1; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j == k) {

                } else if (j < k) {
                    c[i - 1, j] = a[i, j];
                } else if (j > k) {
                    c[i - 1, j - 1] = a[i, j];
                }
            }
        }
    }
}