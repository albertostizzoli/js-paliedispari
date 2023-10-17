const btn = document.querySelector('button');

btn.addEventListener('click', function(){
     resetForm();
     const inputEl = document.getElementById('data');
     let alertColor;
     let msg;
     let numeroInserito = parseInt(inputEl.value);
    

});


function getRndInteger (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printResult(alertColor, msg){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('.d-none');
    resultEl.innerText = msg;
}

function resetForm(){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove('.alert-danger');
    resultEl.classList.add('.d-none');
}