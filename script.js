document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.height = 130;
    canvas.width = 420;

    let x = 1;
    let dx = 50;
    let bpm = 120;
    let requestId; 
    let slider = document.getElementById("sliderBPM");
    let output = document.getElementById("bpm");
    let visualTick = document.getElementById("visualTick");

    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        visualTick.style.transitionDuration = (slider.value*2 + 'ms');
        // 60,000 / Bpm = Ms
        } 

    const playButton = document.getElementById('play');
        function startMet() {
            let audio = new Audio("click.mp3");
            audio.play();
        }
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', function() {
        start();
        // startMet();
        visualTick.classList.add('animation');
    })
    pauseButton.addEventListener('click', function() {
        stop();
        x = 1;
    })

    function animate() {
        requestId = undefined;
        x += dx;
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.strokeStyle = 'white';
        c.moveTo(x, 0);
        c.lineTo(x, 130);
        c.stroke();
        if (x >= canvas.width || x <= 0) {
            dx = -dx;
            startMet();
        }
        start();
    }

    function start() {
        if (!requestId) {
            requestId = window.requestAnimationFrame(animate);
        }
    }

    function stop() {
        if (requestId) {
            c.clearRect(0, 0, canvas.width, canvas.height);
            window.cancelAnimationFrame(requestId);
            requestId = undefined;
        }
    }

})

// Make bpm slider align with click sound
// make visual move correctly with click sound
// add subdivision feature, both visual and audio
// add tempo automation feature

