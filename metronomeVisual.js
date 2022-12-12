document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.height = 130;
    canvas.width = 420;

    c.fillRect(0, 0, 420, 130);

    let x = 1;
    let dx = 2.3;
    let bpm = 120;
    let visual = false;

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    if (visual == false) {
        playButton.addEventListener('click', (event) => {
            animate();
            visual = true;
            console.log(visual);
        })
    } else if (visual == true) {

    }

    pauseButton.addEventListener('click', (event) => {
        visual = false;
        console.log(visual);
    })

    if (visual === true) {
        animate();
    } 

    function animate() {
        requestAnimationFrame(animate);
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
    }



})