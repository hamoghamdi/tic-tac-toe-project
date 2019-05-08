let turnVar = true;
let count = 0;
let xWins =0;
let oWins = 0;
let ties = 0;
let vsComput = false;
let playBoard = ["", "", "", "", "", "", "", "", ""];

let compX = 0;
let compO = 0;
let compTie = 0;

const winnerIsX = function(event){
    $("#winner").text(' Player X won!');
    $('#turn').empty();
    if (!vsComput) xWins++;
    else compX++;
    score();
    $('audio')[0].play();
}
const winnerIsO = function(event){
    $("#winner").text(' Player O won!');
    $('#turn').empty();
    if (!vsComput){ 
        oWins++;
        $('audio')[0].play();
    } else compO++;
    score();
}
const tie = function (event) {
    if (!$('#winner').text() && playBoard.every(element => element != "")) {
        $('#winner').text("It's a tie!");
        $('#turn').empty();
        if (!vsComput) ties++;
        else compTie++;
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
const reset = function (event) {
    turnVar = true;
    playBoard = ["", "", "", "", "", "", "", "", ""];
    count = 0;
    $('.tic').text("");
    $('#turn').empty();
    $('#winner').empty();
    $("#turn").text(' Player X');
    vsComput = false;
    $('#mode').text('Two Players');
    $('#xChoice').parent().removeClass('hidden');
    $('#computerScore').parent().addClass('hidden');
    $('#score').parent().removeClass('hidden');
}
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
    else 
        $('#computerScore').text("X :(" + compX + "), Computer :(" + compO + "), ties :(" + compTie + ").");
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
        tie();
        if ($('#winner').text() == "") {
            vsComputer();
        }
    }
}

$('#reset').on('click', reset)
$('.tic').on('click', playerTic);
$('#oChoice').on('click', playerO)
$('#xChoice').on('click', playerX);
$('#vsComp').on('click', function(event){
    reset();
    vsComput = true;
    $('#mode').text('Player vs Computer');
    $('#xChoice').parent().addClass('hidden');
    $('#computerScore').parent().removeClass('hidden');
    $('#score').parent().addClass('hidden');
    vsComputer();
})

// Next:
// allow user to play as O or X ----------------// DONE
// keeping score based on X and O --------------// DONE
// Responsive ----------------------------------// DONE 
// Add Audio -----------------------------------// DONE
// Computer vs user ----------------------------// DONE
// show game mode (vs computer,two players) ----// DONE
// vs computer score ---------------------------// DONE

//------------ needed fixes -----------// 
// README FILE !!! 

//------------ extra features -----------//
// allow user to choose (x,o) when playing vs computer
// show when computer wins 