let clickedCard = null;
let preventClick = false;
let score = 0;
let scoreboard = document.getElementById("score");

function onCardClicked(e) {
    const target = e.currentTarget;

    if (  target === clickedCard || target.className.includes('done')) {
        return
    }
    target.className = target.className.replace('symbol-hidden', '').trim();
    target.className += ' done';

    if (!clickedCard) {
        //check a color in a cord click
        clickedCard = target;
    }
    else if (clickedCard) {
        //check whits color is a color a previous card
        preventClick = true;
        if (clickedCard.getAttribute('data-symbol') === target.getAttribute('data-symbol')) {
            preventClick = true;

            setTimeout(() =>{
                clickedCard.className = clickedCard.className.replace('done', '').trim() + ' symbol-hidden';
                target.className = target.className.replace('done', '').trim() + ' symbol-hidden';
                clickedCard = null;
                preventClick = false;
                score++;
            }, 500);
            scoreboard = score;
        }
        else{
            clickedCard = null;
        }
    }
}



