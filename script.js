document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.height = 130;
    canvas.width = 420;

    c.fillRect(0, 0, 420, 130);

    let x = 1;
    let dx = 50;
    let bpm = 120;
    let requestId; 
    let slider = document.getElementById("sliderBPM");
    let output = document.getElementById("bpm");

    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        } 

    const playButton = document.getElementById('play');
        function startMet() {
            let audio = new Audio("click.mp3");
            audio.play();
        }
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', function() {
        start();
        startMet();
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

// Add audio click

