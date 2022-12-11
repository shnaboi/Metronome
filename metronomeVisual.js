document.addEventListener('DOMContentLoaded', () => {

    let canvas = document.getElementById('canvas'); 
    let c = canvas.getContext('2d');

    canvas.height = 130;
    canvas.width = 420;

    c.fillRect(0, 0, 420, 130);

    let x = 1;

    function animate() {
        requestAnimationFrame(animate);
        x += 1;
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.beginPath();
        c.strokeStyle = 'white';
        c.moveTo(x, 0);
        c.lineTo(x, 130);
        c.stroke();

}

    animate();


})