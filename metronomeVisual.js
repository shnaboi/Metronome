document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.height = 130;
    canvas.width = 420;

    c.fillRect(0, 0, 420, 130);

    let x = 1;
    let dx = 2.3;
    let bpm = 120;
    let requestId;

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    playButton.addEventListener('click', function() {
        start();
    })
    pauseButton.addEventListener('click', function() {
        stop();
        x = 1;
    })

    function animate() {
        requestId = undefined;
        // requestAnimationFrame(animate);
        x += dx;
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.strokeStyle = 'white';
        c.moveTo(x, 0);
        c.lineTo(x, 130);
        c.stroke();
        if (x >= canvas.width || x <= 0) {
            dx = -dx;
        }
        if (pause == true) {
            setTimeout(function() {
                window.cancelAnimationFrame;
            })
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

// Play & Pause "work", however Play does not reset animation from beginning