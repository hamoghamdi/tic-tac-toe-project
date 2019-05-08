let turnVar = true;
let count = 0;
let xWins =0;
let oWins = 0;
let ties = 0;
let vsComput = false;
let playBoard = ["", "", "", "", "", "", "", "", ""];

const winnerIsX = function(event){
    $("#winner").text(' Player X won!');
    $('#turn').empty();
    xWins++;
    score();
    $('audio')[0].play();
}
const winnerIsO = function(event){
    $("#winner").text(' Player O won!');
    $('#turn').empty();
    oWins++;
    score();
    $('audio')[0].play();
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
const winner = function () {
    for (let i = 0; i < 9; i++) {
        playBoard[i] = $("div#box-" + (i + 1)).text();
    }
    if (playBoard[0] == 'X' && playBoard[1] == 'X' && playBoard[2] == 'X' || playBoard[3] == 'X' && playBoard[4] == 'X' && playBoard[5] == 'X' || playBoard[6] == 'X' && playBoard[7] == 'X' && playBoard[8] == 'X') {
        winnerIsX();
    }
    if (playBoard[0] == 'O' && playBoard[1] == 'O' && playBoard[2] == 'O' || playBoard[3] == 'O' && playBoard[4] == 'O' && playBoard[5] == 'O' || playBoard[6] == 'O' && playBoard[7] == 'O' && playBoard[8] == 'O') {
        winnerIsO();
    }
    if (playBoard[0] == 'X' && playBoard[3] == 'X' && playBoard[6] == 'X' || playBoard[1] == 'X' && playBoard[4] == 'X' && playBoard[7] == 'X' || playBoard[2] == 'X' && playBoard[5] == 'X' && playBoard[8] == 'X') {
        winnerIsX();
    }
    if (playBoard[0] == 'O' && playBoard[3] == 'O' && playBoard[6] == 'O' || playBoard[1] == 'O' && playBoard[4] == 'O' && playBoard[7] == 'O' || playBoard[2] == 'O' && playBoard[5] == 'O' && playBoard[8] == 'O') {
        winnerIsO();
    }
    if (playBoard[0] == 'X' && playBoard[4] == 'X' && playBoard[8] == 'X' || playBoard[6] == 'X' && playBoard[4] == 'X' && playBoard[2] == 'X') {
        winnerIsX();
    }
    if (playBoard[0] == 'O' && playBoard[4] == 'O' && playBoard[8] == 'O' || playBoard[6] == 'O' && playBoard[4] == 'O' && playBoard[2] == 'O') {
        winnerIsO();
    }
}
const playerTic = function (event) {
    event.preventDefault()
    if ($(event.target).text() == "" && $('#winner').text() == ""){
        turn(event);
        winner();
        count++;
        tie(event);
        if(vsComput){
            vsComputer();
            count++;
        }
    } 
}
$('#reset').on('click', function (event) {
    turnVar = true;
    playBoard = ["", "", "", "", "", "", "", "", ""];
    count = 0;
    $('.tic').text("");
    $('#turn').empty();
    $('#winner').empty();
    $("#turn").text(' Player X');
    vsComput = false;   
})
const playerO = function (event) {
    if ($('.tic').text() == "" && !vsComput) {
    turnVar = false;   
    $("#turn").text(' Player O');
    }
}
const playerX = function (event) {
    if ($('.tic').text() == "" && !vsComput) {
    turnVar = true;   
    $("#turn").text(' Player X');
    }
}
const score = function(){
    if (!vsComput)
        $('#score').text("X :(" + xWins + "), O :(" + oWins + "), ties :(" + ties + ").");
}
const vsComputer = function (event) { // default: player is x, computer is o
    if (vsComput && !turnVar && $('#winner').text() == "" ) {
        let randomTic = Math.floor(Math.random() * 10);
        if ($('div#box-' + randomTic).html() == "" && count <10) {
            $('div#box-' + randomTic).html('<span>O</span>');
            turnVar = true;
            $("#turn").text(' Player X');
        } 
        winner();
        if ($('#winner').text() == "") {
            vsComputer();
        }
    }
}

$('.tic').on('click', playerTic);
$('#oChoice').on('click', playerO)
$('#xChoice').on('click', playerX)
$('#vsComp').on('click', function(event){
    vsComput = true;
    vsComputer();
})

// Next:
// allow user to play as O or X ----------------// DONE
// keeping score based on X and O --------------// DONE
// Responsive ----------------------------------// DONE 
// Add Audio -----------------------------------// DONE
// Computer vs user ----------------------------// DONE

//------------ needed fixes -----------// 
// README FILE !!! 
// show when computer wins 
// show when it's on computer mode // one player, tow players
// refresh round/ reload page 
//------------ needed fixes -----------//

//------------ extra features -----------//
// vs computer score