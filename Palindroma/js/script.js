const btn = document.querySelector('button');

reverseWord();

btn.addEventListener('click', function () {
    const parola = document.getElementById('data').value;
    console.log(parola);
    let palindroma = reverseWord(parola).toLocaleLowerCase() === parola.toLocaleLowerCase();
    console.log(palindroma);
});


function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length -1; i >= 0; i--){
        console.log(word[i]);
        reversedWord += word[i];
        console.log(reversedWord);
    }
    return reversedWord;
}