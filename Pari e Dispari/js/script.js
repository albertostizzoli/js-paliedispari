// Creo una costante per il bottone
const btn = document.querySelector('button');

// Creo un evento
btn.addEventListener('click', function(){
     resetForm();
     const inputEl = document.getElementById('data');
     let alertColor;
     let msg;
     let numeroInserito = parseInt(inputEl.value);
     let number = Math.floor((Math.random() * 5) + 1);
     if(isEven(numeroInserito)){
         msg = `Hai vinto`;
         alertColor = 'alert-success';
     } else{
        msg = `Hai perso`;
        alertColor = 'alert-danger';
     }
     sommaNumeri(numeroInserito, number);
     printResult(alertColor,msg);
    
});


//Creo una funzione che mi dia la somma dei numeri
function sommaNumeri(numeroInserito, number){
    let somma = numeroInserito + number;
    return somma;
}
// Creo una funzione che determini se il numero è pari
function isEven(numeroInserito){
    if(numeroInserito % 2 === 0){
        return  true;
    } else {
        return false;
    }
}
// Creo una funzione che dia un numero randomico
function getRndInteger (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Creo una funzione che mi stampi il risultato
function printResult(alertColor, msg){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('.d-none');
    resultEl.innerText = msg;
}
// Creo una funzione che resetti la pagina
function resetForm(){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove('.alert-danger');
    resultEl.classList.add('.d-none');
}

