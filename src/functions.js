

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
        for (let j=0; j < matrixWidth; j++) {
            let id = document.getElementById(`a${i + 1}${j + 1}`).value;
            matrixMass[i][j] = id;
        }
    }
    if(matrixWidth == 2 || matrixWidth == 3){
        easyCalculate(matrixWidth);
    }else{

    }
}

function easyCalculate(matrixWidth){
    if(matrixWidth == 2){
        
    }else{

    }
}