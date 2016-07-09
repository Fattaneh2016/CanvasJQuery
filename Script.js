
$(document).ready(function() {
    //drawSomething();
    //drawUsingCssColor();
    //drawGradient();
    drawPattern();
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
        img.src = 'images/pattern.gif';
        img.onload = function () {
            // create pattern
            var ptrn = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = ptrn;
            ctx.fillRect(0, 0, 400, 400);
        }
    }
