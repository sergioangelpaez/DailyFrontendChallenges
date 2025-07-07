function loadApp(){
    const inputsContainer = document.getElementById('timerInputsContainer');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const timer = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const restartButton = document.getElementById('restartButton');
    const errorMessage = document.getElementById('errorMessage');
    
    pauseButton.style.display = 'none';
    restartButton.style.display = 'none';
    
    let remainingSeconds = 0;
    let intervalID = 0;
    let status = 'stop';

    function startTimer(){
        if(minutesInput.value !== 0 && secondsInput.value !== 0){
            if(remainingSeconds == 0){
                remainingSeconds = parseInt(minutesInput.value*60) + parseInt(secondsInput.value);
            }
        }

        if(remainingSeconds == 0){
            errorMessage.textContent = 'Please enter a valid time.';
        }else{
            errorMessage.textContent = '';
            intervalID = setInterval(updateTimer, 1000);
            status = 'start';
            displayElements();
        }
    }

    function pauseTimer(){
        clearInterval(intervalID);
        status = 'pause';
        displayElements();
    }

    function restartTimer(){
        clearInterval(intervalID);
        status = 'stop';
        displayElements();
    }

    function updateTimer(){
        let minutes = Math.floor(remainingSeconds / 60);
        let seconds = remainingSeconds % 60;
        let formattedMinutes = String(minutes).padStart(2, '0');
        let formattedSeconds = String(seconds).padStart(2, '0');
        timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
        if(remainingSeconds == 0){
            clearInterval(intervalID);
            status = 'end';
            errorMessage.textContent = 'Tiempo terminado.';
            displayElements();
            return;
        }
        remainingSeconds -= 1;
    }

    function displayElements(){
    switch(status){
        case 'stop':
            timer.textContent = '00:00';
            startButton.style.display = 'flex';
            pauseButton.style.display = 'none';
            restartButton.style.display = 'none';
            inputsContainer.style.display = 'flex';
            errorMessage.textContent = '';
            minutesInput.value = 0;
            secondsInput.value = 0;
            break;
        case 'start':
            startButton.style.display = 'none';
            pauseButton.style.display = 'flex';
            restartButton.style.display = 'flex';
            inputsContainer.style.display = 'none';
            break;
        case 'pause':
            startButton.style.display = 'flex';
            pauseButton.style.display = 'none';
            restartButton.style.display = 'flex';
            break;
        case 'end':
            startButton.style.display = 'none';
            pauseButton.style.display = 'none';
            restartButton.style.display = 'flex';
            break;
        }
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    restartButton.addEventListener('click', restartTimer);
}

document.addEventListener('DOMContentLoaded', loadApp);