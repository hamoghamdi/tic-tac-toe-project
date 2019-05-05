// play
// calc winner 
// scenario 1 : all col clicked by one player
// scenario 2 : all row clicked by one player
// reset game

let turn = true;
// if(turn) => X 
// else => O 

// an array to save all tics ? 

let checkedTics = [];
// let show;
$('.tic').one('click', function(event){
    event.preventDefault()
    if (turn) {
        $(event.target).html('<span>X</span>')
        turn = false;
        // show = $(event.target).index();
        // console.log(show);
    }else {
        $(event.target).html('<span>O</span>')
        turn = true;
        // show = $(event.target).index();
        // console.log(show)
}
})

// scenario 1 : if (all col-1 || all col-2 || all col-3 children) has been clicked
$('.tic').one('click', function (event) {
    if ($('#col-1').children().text() == 'XXX' || $('#col-2').children().text() == 'XXX' || $('#col-3').children().text() == 'XXX') {
        // console.log('all col clicked by X');
        $("#winner").text(' Player X');
        $('.tic').off('click');
    } else {
        if ($('#col-1').children().text() == 'OOO' || $('#col-2').children().text() == 'OOO' || $('#col-3').children().text() == 'OOO'){
            // console.log('all col clicked by O');
            $("#winner").text(' Player O');
            $('.tic').off('click');}
    }
})

// scenario 2 : all row clicked by one player
let rowWin = ['row', 'row', 'row'];
$('.tic').one('click', function (event) {
    if ($(event.target).index() == 0) 
    {
    // console.log(' 1st row clicked') // log three times 
    // are all X
    rowWin[0] += $(event.target).text();
    // console.log(rowWin);
    } else {
        if ($(event.target).index() == 1) {
            // console.log(' 2nd row clicked') // log three times 
            rowWin[1] += $(event.target).text();
            // console.log(rowWin);
        } else {
            if ($(event.target).index() == 2) {
                // console.log(' 3rd row clicked') // log three times 
                // are all X
                rowWin[2] += $(event.target).text();
                // console.log(rowWin);
            }
        }

    }

    // calc row winner 
    for (let i =0; i<rowWin.length; i++){
        if (rowWin[i] == 'rowOOO'){
            $("#winner").text(' Player O');
            $('.tic').off('click');
        } else {
            if (rowWin[i] == 'rowXXX'){
                $("#winner").text(' Player X');
                $('.tic').off('click'); 
            }
        }
    }
})

let diagonalWin = ['d', 'd'];
// scenario 3 : diagonal win
// index == 0 && col-1 || index == 0 && col-3
// index == 1 && col-2
// index == 2 && col-1 || index == 2 && col-3
$('.tic').one('click', function (event) {
    if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-1') {
        diagonalWin[0] += $(event.target).text();
        // console.log(diagonalWin);
        } else {
        if ($(event.target).index() == 0 && $(event.target).parent('.col').attr('id') == 'col-3'){
                diagonalWin[1] += $(event.target).text();
                // console.log(diagonalWin);  
            }
        }
     
    if ($(event.target).index() == 1 && $(event.target).parent('.col').attr('id') == 'col-2'){
            diagonalWin[0] += $(event.target).text();
            diagonalWin[1] += $(event.target).text();
            // console.log(diagonalWin);
        }
    if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-1'){
            diagonalWin[1] += $(event.target).text();
            // console.log(diagonalWin); 
            } else {
        if ($(event.target).index() == 2 && $(event.target).parent('.col').attr('id') == 'col-3'){
                    diagonalWin[0] += $(event.target).text();
                    // console.log(diagonalWin); 
                    }
                }
// calc diagonal win
for (let i=0; i<diagonalWin.length; i++){
    if (diagonalWin[i] == 'dXXX'){
        $("#winner").text(' Player X');
        $('.tic').off('click'); 
    } else {
        if (diagonalWin[i] == 'dOOO'){
            $("#winner").text(' Player O');
            $('.tic').off('click');  
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