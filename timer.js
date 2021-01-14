class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        // Optional callbacks
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {

        if(this.onStart){
            this.onStart(this.timeRemaining);
        }

        this.tick();
        this.interval = setInterval(this.tick, 50);
       // console.log('Time to start the timer.')
    };

    pause = () =>{
        clearInterval(this.interval);
    }


    tick = () =>{
        if(this.timeRemaining <= 0){
            this.pause();

            if(this.onComplete){
                this.onComplete();
            }
        } else{
            //const timeRemaining = this.timeRemaining;
        this.timeRemaining = this.timeRemaining - 0.05;

        if(this.onTick){
            this.onTick(this.timeRemaining);
        }
        //console.log('tick');
        }
        
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }


}