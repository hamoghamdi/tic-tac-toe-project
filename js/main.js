let turnVar = true;
let rowWinArray = ['row', 'row', 'row'];
let diagonalWinArray = ['d', 'd'];
let count = 0;

let xWins =0;
let oWins = 0;
let ties = 0;

const winnerIsX = function(event){
    $("#winner").text(' Player X won!');
    // $('.tic').off('click'); // ---------------------------- // try not to use off 
    $('#turn').empty();
    xWins++;
    score();
}
const winnerIsO = function(event){
    $("#winner").text(' Player O won!');
    // $('.tic').off('click'); // ---------------------------- // try not to use off
    $('#turn').empty();
    oWins++;
    score();
}
const tie = function (event) {
    if (!$('#winner').text() && count == 9) {
        $('#winner').text("It's a tie!");
        $('#turn').empty();
        ties++;
        score();
    }
}
const turn = function (event) {
    if (turnVar) {
        $(event.target).html('<span>X</span>')
        turnVar = false;
        $("#turn").text(' Player O');
    } else {
        $(event.target).html('<span>O</span>')
        turnVar = true;
        $("#turn").text(' Player X');
    }
}
const columnWin = function (event) {
    if ($('#col-1').children().text() == 'XXX' || $('#col-2').children().text() == 'XXX' || $('#col-3').children().text() == 'XXX') {
        // console.log('all col clicked by X');
        winnerIsX(event);
    } else {
        if ($('#col-1').children().text() == 'OOO' || $('#col-2').children().text() == 'OOO' || $('#col-3').children().text() == 'OOO') {
            // console.log('all col clicked by O');
            winnerIsO(event);
        }
    }
}
const rowWin = function (event) {
    if ($(event.target).index() == 0) {
        // console.log(' 1st row clicked') 
        rowWinArray[0] += $(event.target).text();
    } else {
        if ($(event.target).index() == 1) {
            // console.log(' 2nd row clicked')
            rowWinArray[1] += $(event.target).text();
        } else {
            if ($(event.target).index() == 2) {
                // console.log(' 3rd row clicked')
                rowWinArray[2] += $(event.target).text();
            }
        }
    }
    for (let i = 0; i < rowWinArray.length; i++) { // calc row winner 
        if (rowWinArray[i] == 'rowOOO') {
            winnerIsO(event);
        } else {
            if (rowWinArray[i] == 'rowXXX') {
                winnerIsX(event);
            }
        }
    }
}
const diagonalWin = function (event) {
    if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-1') {
        diagonalWinArray[0] += $(event.target).text();
    } else {
        if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-3') {
            diagonalWinArray[1] += $(event.target).text(); 
        }
    }
    if ($(event.target).index() == 1 && $(event.target).parent('.col').attr('id') == 'col-2') {
        diagonalWinArray[0] += $(event.target).text();
        diagonalWinArray[1] += $(event.target).text();
    }
    if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-1') {
        diagonalWinArray[1] += $(event.target).text();
    } else {
        if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-3') {
            diagonalWinArray[0] += $(event.target).text(); 
        }
    }
    for (let i = 0; i < diagonalWinArray.length; i++) { // calc diagonal win
        if (diagonalWinArray[i] == 'dXXX') {
            winnerIsX(event);
        } else {
            if (diagonalWinArray[i] == 'dOOO') {
                winnerIsO(event);
            }
        }
    }
}
const playerTic = function (event) {
    event.preventDefault()
    if ($(event.target).text() == "" && $('#winner').text() == ""){
    // $(event.target).off("click"); // allow one click per box // off f up everything better not use it since reset is not page refresh
    turn(event);
    // scenario 1 : col win
    columnWin(event);
    // scenario 2 : row win
    rowWin(event);
    // scenario 3 : diagonal win
    diagonalWin(event);
    // scenario 4 : tie
    count++;
    tie(event);
    console.log("playerTic function");
    // console.log("playerTic if entered");
    } 
    else console.log("playerTic if(else) entered");
}

$('#reset').on('click', function (event) {
    // location.reload();
    turnVar = true;
    rowWinArray = ['row', 'row', 'row'];
    diagonalWinArray = ['d', 'd'];
    count = 0;
    $('.tic').text("");
    $('#turn').empty();
    $('#winner').empty();
    $("#turn").text(' Player X');
    console.log("reset function");
})
const playerO = function (event) {
    if ($('.tic').text() == "") {
    turnVar = false;   
    $("#turn").text(' Player O');
    // console.log("oChoice function, there shouldn't be a problem now");
    }
    // else console.log('not allowed to change to O turns once started playing');
}
const playerX = function (event) {
    if ($('.tic').text() == "") {
    turnVar = true;   
    $("#turn").text(' Player X');
    // console.log("xChoice function");
    }
    // else console.log('not allowed to change to X turns once started playing');
}
const score = function(){
    $('#score').text("X :(" + xWins + "), O :(" + oWins + "), ties :(" + ties + ").");
}

$('.tic').on('click', playerTic);
$('#oChoice').on('click', playerO)
$('#xChoice').on('click', playerX)

// Next:
// Have O play first insted of X ------// DONE
// keeping score based on X and O-------------// Done
// keeping score based on players 1 and 2 (a player could chose x or o, player 1 is alwayes the one who starts first)
// Responsive
// Computer vs user