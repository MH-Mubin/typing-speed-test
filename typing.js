const words='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, explicabo!'.split(' ');
const wordsCount = words.length;

function randomWord(){
    const randomIndex = Math.ceil(Math.random() * wordsCount); //deleted x: according to video
    return words[randomIndex];
}
function formatWord(word){
    return `<div class="word">
        <span class="letter">
            ${word.split('').join('</span><span class="letter">')}
        </span>
    </div>`;
}

function newGame(){
    document.getElementById('words').innerHTML='';
    for(let i=0; i<200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
}

newGame();