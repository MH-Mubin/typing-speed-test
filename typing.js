const words='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, explicabo!'.split(' ');
const wordsCount = words.length;

function addClass(el,name){
    el.className += ' '+name;
}
function removeClass(el,name){
    el.className = el.className.replace(name,'');
}


function randomWord(){
    const randomIndex = Math.ceil(Math.random() * wordsCount); //deleted x: according to video
    return words[randomIndex];
}
function formatWord(word){
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame(){
    document.getElementById('words').innerHTML='';
    for(let i=0; i<200; i++){
        document.getElementById('words').innerHTML += formatWord(randomWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');


    // document.querySelector('.word').classList.add('current');
    // document.querySelector('.letter').classList.add('current');
}

document.getElementById('game').addEventListener('keyup', ev =>{
    const key=ev.key;//change
    const currentLetter = document.querySelector('.letter.current')
    const expected = currentLetter.innerHTML;

    console.log({key,expected});
})

newGame();