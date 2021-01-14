

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
//let currentOffset = 0;

//Create new instance
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
        //console.log('Timer started!');
    },

    onTick(timeRemaining){

        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter);
        //currentOffset = currentOffset - 1;
        //console.log('Timer just ticked down');
    },

    onComplete(){
        console.log('Timer is completed!');
    }
}
);