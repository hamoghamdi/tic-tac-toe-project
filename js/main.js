let turnVar = true;
let rowWinArray = ['row', 'row', 'row'];
let diagonalWinArray = ['d', 'd'];
let count = 0;

const winnerIsX = function(event){
    $("#winner").text(' Player X');
    $('.tic').off('click');
    $('#turn').parent().empty();
}
const winnerIsO = function(event){
    $("#winner").text(' Player O');
    $('.tic').off('click');
    $('#turn').parent().empty();
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
const tie = function(event){
    if (!$('#winner').text() && count == 9) {
        $('#winner').parent().text("It's a tie!");
        $('#turn').parent().empty();
    }
}
$('#reset').on('click', function (event) {
    location.reload();
})
$('.tic').one('click', function(event){
    event.preventDefault()
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
})