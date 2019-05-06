// play
// calc winner 
// scenario 1 : all col clicked by one player
// scenario 2 : all row clicked by one player
// reset game

let turn = true;
// if(turn) => X 
// else => O 

const winnerIsX = function(event){
    $("#winner").text(' Player X');
    $('.tic').off('click');
}

const winnerIsO = function(event){
    $("#winner").text(' Player O');
    $('.tic').off('click');
}
// an array to save all tics ? 
// let checkedTics = [];

$('.tic').one('click', function(event){
    event.preventDefault()
    if (turn) {
        $(event.target).html('<span>X</span>')
        turn = false;
    }else {
        $(event.target).html('<span>O</span>')
        turn = true;
}
})

// scenario 1 : if (all col-1 || all col-2 || all col-3 children) has been clicked
$('.tic').one('click', function (event) {
    if ($('#col-1').children().text() == 'XXX' || $('#col-2').children().text() == 'XXX' || $('#col-3').children().text() == 'XXX') {
        // console.log('all col clicked by X');
        winnerIsX(event);
    } else {
        if ($('#col-1').children().text() == 'OOO' || $('#col-2').children().text() == 'OOO' || $('#col-3').children().text() == 'OOO'){
            // console.log('all col clicked by O');
            winnerIsO(event); }
    }
})

// scenario 2 : all row clicked by one player
let rowWinArray = ['row', 'row', 'row'];
$('.tic').one('click', function (event) {
    if ($(event.target).index() == 0) 
    {
    // console.log(' 1st row clicked') // log three times 
    // are all X
    rowWinArray[0] += $(event.target).text();
    // console.log(rowWinArray);
    } else {
        if ($(event.target).index() == 1) {
            // console.log(' 2nd row clicked') // log three times 
            rowWinArray[1] += $(event.target).text();
            // console.log(rowWinArray);
        } else {
            if ($(event.target).index() == 2) {
                // console.log(' 3rd row clicked') // log three times 
                // are all X
                rowWinArray[2] += $(event.target).text();
                // console.log(rowWinArray);
            }
        }

    }

    // calc row winner 
    for (let i =0; i<rowWinArray.length; i++){
        if (rowWinArray[i] == 'rowOOO'){
            winnerIsO(event);
        } else {
            if (rowWinArray[i] == 'rowXXX'){
                winnerIsX(event);
            }
        }
    }
})

let diagonalWinArray = ['d', 'd'];
// scenario 3 : diagonal win
// index == 0 && col-1 || index == 0 && col-3
// index == 1 && col-2
// index == 2 && col-1 || index == 2 && col-3
$('.tic').one('click', function (event) {
    if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-1') {
        diagonalWinArray[0] += $(event.target).text();
        // console.log(diagonalWinArray);
        } else {
        if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-3'){
                diagonalWinArray[1] += $(event.target).text();
                // console.log(diagonalWinArray);  
            }
        }
     
    if ($(event.target).index() == 1 && $(event.target).parent('.col').attr('id') == 'col-2'){
            diagonalWinArray[0] += $(event.target).text();
            diagonalWinArray[1] += $(event.target).text();
            // console.log(diagonalWinArray);
        }
    if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-1'){
            diagonalWinArray[1] += $(event.target).text();
            // console.log(diagonalWinArray); 
            } else {
        if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-3'){
                    diagonalWinArray[0] += $(event.target).text();
                    // console.log(diagonalWinArray); 
                    }
                }
// calc diagonal win
for (let i=0; i<diagonalWinArray.length; i++){
    if (diagonalWinArray[i] == 'dXXX'){
        winnerIsX(event);
    } else {
        if (diagonalWinArray[i] == 'dOOO'){
            winnerIsO(event);  
        }
    }
}
            
})

$('#reset').on('click', function(event){
    location.reload();
})

// requirments:
// show if tie
// on each turn, who's turn is it

// KISS, DRY
const columnWin = function(event){

}
const rowWin = function(event){

}
const diagonalWin = function(event){

}