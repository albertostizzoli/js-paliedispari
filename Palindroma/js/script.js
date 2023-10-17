let item = '';
let arr =[];

while (item !== 'stop'){
    item = prompt('Inserisci una parola');


    if(item !== 'stop' && item !== ''){
        console.log(item);
        arr.push(item);
    }
}

console.log(arr);

const wordEl = document.getElementById("word");
for(let i = arr.length -1; i >= 0; i--){
    const arrItemEl = document.createElement("p");
    listItemEl.innerHTML = arr[i];
    wordEl.appendChild(arrItemEl);

}
