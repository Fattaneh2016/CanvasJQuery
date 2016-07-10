
$(document).ready(function() {
    //drawSomething();
    //drawUsingCssColor();
    //drawGradient();
    //drawPattern();
    //drawImage();
    //drawLineWidth();
    //drawLineJoin();
    //drawGradientStroke();
    //saveRestore();
    drawLine();
});


function drawSomething()
{
    var canvas = document.getElementById("myCanvas")
        ,ctx = canvas.getContext('2d')
    
        , offset = 15
        , clearOffset = 30
        , pushDownOffset = 10
        , height = 50
        , width = 100
        , count = 4
        , i = 0;

    for (i = 0; i < count; i++) {
        ctx.fillRect(i * (offset + width) + offset, offset, width, height);
        ctx.clearRect(i * (offset + width) + (clearOffset / 2) + offset,
            offset + (clearOffset / 2) + pushDownOffset,
            width - clearOffset, height - clearOffset)
        ctx.strokeRect(i * (offset + width) + offset,
           (2 * offset) + height, width, height);
    }

}

    function drawUsingCssColor() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d')
            , offset = 10
            , size = 50;

        ctx.fillStyle = "red";
        ctx.fillRect(offset + (0 * (offset + size)), offset, size, size);
        ctx.fillRect(offset + (1 * (offset + size)), offset, size, size);

        ctx.fillStyle = "#00FF00";
        ctx.fillRect(offset + (2 * (offset + size)), offset, size, size);
        ctx.fillRect(offset + (3 * (offset + size)), offset, size, size);

        ctx.fillStyle = "rgba(0, 0, 255, 0.25)";
        ctx.fillRect(offset + (4 * (offset + size)), offset, size, size);
        ctx.fillRect(offset + (5 * (offset + size)), offset, size, size);
    }


    function drawGradient() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d')
            , x0 = 0
            , y0 = 0
            , r0 = 0
            , x1 = 200
            , y1 = 0
            , r1 = 100
            , width = 300
                , height = 50
        , offset = 10;
        gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        addColorStops(gradient);
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 0 * (height + offset), width, height);
        ctx.fillRect(100, 1 * (height + offset), width, height);
        y1 = 300;
        gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        addColorStops(gradient);
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 2 * (height + offset), width, height);
        ctx.fillRect(100, 3 * (height + offset), width, height);
        x0 = x1 = width / 2;
        y0 = y1 = 4 * (height + offset) + (height / 2);
        gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        addColorStops(gradient);
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 4 * (height + offset), width, height);
        ctx.fillRect(100, 5 * (height + offset), width, height);
        y0 = 5 * (height + offset) + (height / 2);
        y1 = y0 + 100;
        gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        addColorStops(gradient);
        ctx.fillStyle = gradient;
        ctx.fillRect(10, 6 * (height + offset), width, height);
        ctx.fillRect(100, 7 * (height + offset), width, height);
        function addColorStops(gradient) {
            gradient.addColorStop("0", "magenta");
            gradient.addColorStop(".25", "blue");
            gradient.addColorStop(".50", "green");
            gradient.addColorStop(".75", "yellow");
            gradient.addColorStop("1.0", "red");
        }
    }

    function drawPattern() {
        var canvas = document.getElementById('myCanvas')
           , ctx = canvas.getContext('2d');

        // create new image object to use as pattern
        var img = new Image();
        img.src = 'images/repeat.jpg';
        img.onload = function () {
            // create pattern
            var ptrn = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = ptrn;
            ctx.fillRect(0, 0, 600, 800);
        }
    }
    function drawImage(){

        var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = "images/Mybackground.jpg";
        img.onload = function () {

            ctx.font = 'bold 24pt Arial';

            ctx.drawImage(img, 175, 0, 450, 600);

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(405, 180);
            ctx.lineTo(325, 180);
            ctx.stroke();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText('Mast', 325, 180);
            ctx.strokeText('Mast', 325, 180);

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(420, 220);
            ctx.lineTo(525, 220);
            ctx.stroke();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText('Sail', 525, 220);
            ctx.strokeText('Sail', 525, 220);

            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(420, 360);
            ctx.lineTo(500, 360);
            ctx.stroke();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText('Boom', 500, 360);
            ctx.strokeText('Boom', 500, 360);


        }


    }

    function drawLineWidth() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d')
            , offset = 40
            , width = 5
            , height = 5
            , lineWidth = 1
            , i = 0
            , centerX = canvas.width / 2
            , centerY = canvas.height / 2;

        for (i = 1; i < 15; i++) {
            ctx.lineWidth = i;
            ctx.strokeRect(centerX - (width / 2) - (i * offset / 2),
                centerY - (height / 2) - (i * offset / 2),
                width + (i * offset), height + (i * offset));
        }
    }
    
    function drawLineJoin() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d');
        ctx.lineWidth = 20;

        ctx.lineJoin = 'round';
        ctx.strokeRect(20, 20, 50, 50);

        ctx.lineJoin = 'bevel';
        ctx.strokeRect(100, 100, 50, 50);

        ctx.lineJoin = 'miter';
        ctx.strokeRect(180, 180, 50, 50);
    }

    function drawGradientStroke() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d')
            , x0 = 0
            , y0 = 0
            , r0 = 0
            , x1 = 200
            , y1 = 0
            , r1 = 100
            , width = 300
            , height = 40
            , offset = 25;

        ctx.lineWidth = 15;
        gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        addColorStops(gradient);
        ctx.strokeStyle = gradient;
        ctx.strokeRect(10, 0 * (height + offset), width, height);
        ctx.strokeRect(100, 1 * (height + offset), width, height);
        y1 = 300;
        gradient = ctx.createLinearGradient(x0, y0, x1, y1);
        addColorStops(gradient);
        ctx.strokeStyle = gradient;
        ctx.strokeRect(10, 2 * (height + offset), width, height);
        ctx.strokeRect(100, 3 * (height + offset), width, height);

        x0 = x1 = width / 2;
        y0 = y1 = 4 * (height + offset) + (height / 2);
        gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        addColorStops(gradient);
        ctx.strokeStyle = gradient;
        ctx.strokeRect(10, 4 * (height + offset), width, height);
        ctx.strokeRect(100, 5 * (height + offset), width, height);
        y0 = 5 * (height + offset) + (height / 2);
        y1 = y0 + 100;
        gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        addColorStops(gradient);
        ctx.strokeStyle = gradient;
        ctx.strokeRect(10, 6 * (height + offset), width, height);
        ctx.strokeRect(100, 7 * (height + offset), width, height);
    }
    function addColorStops(gradient) {
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop(".25", "blue");
        gradient.addColorStop(".50", "green");
        gradient.addColorStop(".75", "yellow");
        gradient.addColorStop("1.0", "red");
    }


    function saveRestore() {
        var canvas = document.getElementById('myCanvas')
            , ctx = canvas.getContext('2d');
        ctx.lineWidth = 20;
        ctx.strokeStyle = "green";
        ctx.lineJoin = 'round';
        ctx.strokeRect(20, 20, 50, 50);
        ctx.save();

        ctx.lineWidth = 10;
        ctx.strokeStyle = "red"; 
        ctx.lineJoin = 'bevel'; 
        ctx.strokeRect(100, 100, 50, 50);

        ctx.restore();
        ctx.strokeRect(180, 180, 50, 50);
    }

    function drawLine(){
        var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.lineTo(150, 350);
        ctx.lineTo( 50, 350); 
        ctx.closePath(); 
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(150, 250);
        ctx.lineTo(250, 250);
        ctx.lineTo(200, 350); 
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(300, 250);
        ctx.lineTo(350, 350);
        ctx.lineTo(250, 350);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 250);
        ctx.lineTo(500, 350);
        ctx.moveTo(450, 300);
        ctx.lineTo(550, 300)
        ctx.fill();
        ctx.stroke();

    }
