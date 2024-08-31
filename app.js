const button1 = document.querySelector('#p1button');
const button2 = document.querySelector('#p2button');
const reset = document.querySelector('#reset');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const winningScoreSelect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let isGameOver = false;
let winningScore = 5;

button1.addEventListener('click', function(){
    if(!isGameOver){
        p1score += 1;
        if(winningScore === p1score){
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('looser');
            button1.disabled = true;
            button2.disabled = true;
        }
        p1display.textContent = p1score;
    }
    
    
 })

 button2.addEventListener('click', function(){
    if(!isGameOver){
        p2score += 1;
        if(winningScore === p2score){
            isGameOver = true;
            p2display.classList.add('winner');
            p1display.classList.add('looser');
            button1.disabled = true;
            button2.disabled = true;
        }
        p2display.textContent = p2score;

    }
 })

 winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset1();
 })


reset.addEventListener('click',reset1);

function reset1(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner','looser');
    p2display.classList.remove('winner','looser');
    button1.disabled = false;
    button2.disabled = false;
}