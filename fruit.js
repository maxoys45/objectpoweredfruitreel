$(function() {

    // CLEAR CONSOLE
    console.clear()

    // RANDOM WINNER
    function randomNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    // PRIZE OBJECT
    var prizes = {
        "one" : {
            id : 1,
            name : "Graffiti Hoodie",
            position : "one",
            tickets : 600,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ8PDm57EliZdK7KLPuuh3dxC3m4m05gD06zfiP1MVjt5Cq5YiyCimcXB1THZvQDvOSn49Z/96fx96f",
            src : "graffiti-hoodie"
        },
        "two" : {
            id : 2,
            name : "Anodized AR15",
            position : "two",
            tickets : 100,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6ABCWVPVzWN8FBvesesAZDuqifR3in78VcuvCY7xfD-8dtbqAWI47E/96fx96f",
            src : "anodized-ar"
        },
        "three" : {
            id : 3,
            name : "Boonie Hat",
            position : "three",
            tickets : 1000,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AEWSdRIQWj8FZuTO2lBLvsgA3szSby83AdmjcYyPKi4NljsI2h8IT-FiKk6h3kZe4/96fx96f",
            src : "boonie"
        },
        "four" : {
            id : 4,
            name : "White Battle Royale T-Shirt",
            position : "four",
            tickets : 1000,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AYSztnER6T3G1URNWgEbfdjDb7zSW75lwWK21gK-8/96fx96f",
            src : "white-br-tshirt"
        },
        "five" : {
            id: 5,
            name : "Black Canvas Outback Hat",
            position: "five",
            tickets : 900,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6ADTSdsAgmn1l5_TP6oC6TjrADyzSv-yWEFijMziu2-5rT9od8g/96fx96f",
            src : "cowboy"
        },
        "six" : {
            id: 6,
            name : "ANGRYPUG Motorcycle Helmet",
            position: "six",
            tickets : 400,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ8PDm57EliZdK7KLPuuh3WySnxyXoUgz870MKd7sFTkZq98oW1ORiqAVsCUYfbNu3SUQqvUSGyY__iEw/96fx96f",
            src : "angrypug"
        },
        "seven" : {
            id: 7,
            name : "Wasteland Skull Helmet",
            position: "seven",
            tickets : 300,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6ABWSBlPDmn61NnTO69ALPv8TLwy4g76JoI/96fx96f",
            src : "skull"
        },
        "eight" : {
            id: 8,
            name : "Velvet Slacks",
            position: "eight",
            tickets : 900,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6AbXTJ8PDm57EliZdK7KLPuuh3SyS_myWIQgSYt-8684NZXkKaS9IWmAzicPFsGUoaQGbSAjm84cCU/96fx96f",
            src : "slacks"
        },
        "nine" : {
            id: 9,
            name : "Tech Fingerless Gloves",
            position: "nine",
            tickets : 1000,
            url : "http://steamcommunity-a.akamaihd.net/economy/image/iGm5OjgdO5r8OoJ7TJjS39tTyGCTzzQwmWl1QPRXu8oaf69-NOHLAbqw_23aLe8AcRQ8-3uyKA7_CGvsJYds9U65FMF7i6ALVDx4BhmT2FZldNi7CbfxrB3KzSvh_1EQgxUsweSP0sFZgpTq4Ye3fW3aDRQ/96fx96f",
            src : "black-gloves"
        }
    };


    // VARS
    var $totalTix = 0;
    var $winningPrize = 0;
    var $sumSoFar = 0;
    var $spinDistance = 0;
    var $objLength = Object.keys(prizes).length;
    var $angle = 360 / $objLength;
    var $previousPrize = $objLength;
    var $sideWidth = 200;
    var $transZ = (($sideWidth / 2) / Math.tan(($angle / 2) * (Math.PI / 180))) / 10;

    console.log($transZ);


    // ADD UP TICKET NUMBERS
    $.each(prizes, function(key, prize) {

        $totalTix += prize.tickets;

    });

    //console.log("total number of tickets = " + $totalTix);

    // PICK A WINNER
    function decideWinner() {

        // RESET SUM
        $sumSoFar = 0;
        var $num = randomNum(1, $totalTix);

        //console.log("random number = " + $num);

        $('.odd').remove();

        $.each(prizes, function(key, prize) {

            var o = (prize.tickets / $totalTix) * 100;
            var odd = o.toFixed(2);

            $('.odds').append('<span class="odd">' + prize.name + ' = ' + odd + '%</span>');

            if($num > $sumSoFar && $num <= ($sumSoFar += prize.tickets)) {

                console.log("You won a " + prize.name);

                $winningPrize = prize.id;

            }

        });

        return $winningPrize;

    }

    // SETUP CUBE
    var $cube = $('.cube');

    $cube.css({

        "transform" : "translateZ(" + -($transZ) + "rem) rotateX(0deg)"

    });

    // POPULATE REEL
    function createReel() {

        //console.log(prizes.length);

        $.each(prizes, function(index, prize) {



            //console.log($angle);
            var $deg = -($angle * prize.id);

            var $bgImg = "img/" + prize.src + ".png";

            var $style = 'background-image:url(' + $bgImg + '); transform: rotateX(' + $deg + 'deg) translateZ(' + $transZ + 'rem);';
            //var $style = 'transform: rotateX(' + $deg + 'deg) translateZ(24.14213562373095rem);';

            $cube.append(
                '<figure class="side side-' + prize.id + '" style="' + $style + '"><img src="' + prize.url + '"</figure>'
            );

            $cube.append(
                '<figure class="side side-' + prize.id + '" style="' + $style + '"></figure>'
            )

        });
    }

    // RESET PRIZE REEL
    function resetPrizes() {

        decideWinner();

        $cube.css({
            "transform" : "rotateX(0deg)",
            "transition" : "none"
        })

        return $winningPrize;

    }

    // SPIN THE REEL
    function spinReel(winNum) {

        console.log("$previousPrize = " + $previousPrize + ", $winningPrize = " + winNum);

        // SET MOVE DISTANCE FOR WINNING PRIZE
        $spinDistance += ((($objLength - $previousPrize) + ($objLength * 3)) + winNum) * $angle;

        console.log("spinDistance = " + $spinDistance);
        $previousPrize = winNum;

        var $spinStr = "translateZ(" + -($transZ) + "rem) rotateX(" + $spinDistance + "deg)";

        /*$('.startBlock').css({ "opacity" : 1}).animate({
            "opacity" : 0
        });*/

        $cube.css({
            // "transition" : "transform 10s ease-out",
            "transition" : "transform 4s cubic-bezier(0.265, -0.190, 0.340, 0.995)",
            "transform" : $spinStr
        });

    }

    // MAKE REEL
    createReel();

    $('.rollBtn').click(function() {

        resetPrizes();

        //console.log($winningPrize);
        spinReel($winningPrize);

    });

    /*$('.resetBtn').click(function() {

        $cube.css({
            "transform" : "rotateX(0deg)"
        })

    });
*/

});