let p1Display= document.querySelector('#p1Display');
let p2Display= document.querySelector('#p2Display');
let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let reset = document.querySelector('#reset');
let winningScoreSelect= document.querySelector('#playto');
 
let p1ScoreChange=0;
let p2ScoreChange=0;
let winningScore=3;
let isGameOver = false;

p1Button.addEventListener('click', function(){
   if(!isGameOver){
    p1ScoreChange+=1;
    if(p1ScoreChange === winningScore){
       isGameOver= true;
       p1Display.classList.add('has-text-success');
       p2Display.classList.add('has-text-danger');
       p1Button.disabled = true;
       p2Button.disabled = true;
    }
    p1Display.textContent = p1ScoreChange;
}


})
p2Button.addEventListener('click', function(){
   if(!isGameOver){
    p2ScoreChange+=1;
    if(p2ScoreChange === winningScore){
    
        isGameOver = true;
        p2Display.classList.add('has-text-success');
        p1Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p2Display.textContent = p2ScoreChange;
}


})

winningScoreSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value);
    resetFunc();
})

reset.addEventListener('click',resetFunc);

function resetFunc(){
    isGameOver=false;
    p1ScoreChange=0;
    p2ScoreChange=0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success','has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}
