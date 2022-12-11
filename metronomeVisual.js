document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.canvasHeight = 130;
    canvas.canvasWidth = 420;

    c.fillRect(0, 0, 420, 130);


    c.beginPath();
    c.strokeStyle = 'white';
    c.moveTo(10, 0);
    c.lineTo(10, 130);
    c.stroke();





    
})