let turnVar = true;
let rowWinArray = ['row', 'row', 'row'];
let diagonalWinArray = ['d', 'd'];
let count = 0;

let xWins =0;
let oWins = 0;
let ties = 0;

let vsComput = false;

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

const columnWin = function (event) {
    if ($('#col-1').children().text() == 'XXX' || $('#col-2').children().text() == 'XXX' || $('#col-3').children().text() == 'XXX') { // ('all col clicked by X');
        winnerIsX(event);
    } else {
        if ($('#col-1').children().text() == 'OOO' || $('#col-2').children().text() == 'OOO' || $('#col-3').children().text() == 'OOO') { // ('all col clicked by O');
            winnerIsO(event);
        }
    }
}
const rowWin = function (event) {
    if ($(event.target).index() == 0) { // (' 1st row clicked') 
        rowWinArray[0] += $(event.target).text();
    } else {
        if ($(event.target).index() == 1) { // (' 2nd row clicked')
            rowWinArray[1] += $(event.target).text();
        } else {
            if ($(event.target).index() == 2) { // (' 3rd row clicked')
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

        if(vsComput){
            vsComputer();
            count++;
        }
    } 
}

$('#reset').on('click', function (event) {
    turnVar = true;
    rowWinArray = ['row', 'row', 'row'];
    diagonalWinArray = ['d', 'd'];
    count = 0;
    $('.tic').text("");
    $('#turn').empty();
    $('#winner').empty();
    $("#turn").text(' Player X');

    // $('.tic').on('click');
    vsComput = false;   
})
const playerO = function (event) {
    if ($('.tic').text() == "" && !vsComput) {
    turnVar = false;   
    $("#turn").text(' Player O');
    }
    // else console.log('not allowed to change to O turns once started playing');
}
const playerX = function (event) {
    if ($('.tic').text() == "" && !vsComput) {
    turnVar = true;   
    $("#turn").text(' Player X');
    }
    // else console.log('not allowed to change to X turns once started playing');
}
const score = function(){
    if (!vsComput)
        $('#score').text("X :(" + xWins + "), O :(" + oWins + "), ties :(" + ties + ").");
}
// default: player is x, computer is o

const vsComputer = function(event){
    if (vsComput && !turnVar && $('#winner').text() == "" ) {
        console.log('vs comp function')
        let randomTic = Math.floor(Math.random() * 10);
        if ($('div#box-' + randomTic).html() == "" && count <10) {
            console.log('vs comp if/ random ')
            $('div#box-' + randomTic).html('<span>O</span>');
            // $('div#box-' + randomTic).off('click');
            turnVar = true;
            $("#turn").text(' Player X');
        } else if ($('#winner').text() == "") {
            vsComputer();}
        //
        // for(let i=0; i<10; i++){
        //     console.log('vs comp for loop')
        //     if ($('div#box-' + i).html()  == ""){
        //         $('div#box-' + i).html('<span>O</span>');
        //         $('div#box-' + i).off('click');
        //         turnVar = true;
        //         $("#turn").text(' Player X');
        //         break;
        //     }
        // }
    }
}

$('.tic').on('click', playerTic);
$('#oChoice').on('click', playerO)
$('#xChoice').on('click', playerX)
$('#vsComp').on('click', function(event){
    console.log('vs comp click')
    vsComput = true;
    vsComputer();
})

// Next:
// allow user to play as O or X ----------------// DONE
// keeping score based on X and O --------------// DONE
// Responsive ---------------------------------// DONE 
// Add Audio ----------------------------------// DONE
// player 1 is first player regardless if x or o => track score , => show turns
// README FILE !!!
// Computer vs user
// Customized tokens 
// local storage?