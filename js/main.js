// play
// calc winner
// reset game

let turn = true;
// if(turn) => change to X 
// else change to O 

// an array to save all tics ? 

let checkedTics = [];
let show;
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

// check col winnig scenarios
// scenario 1 : if (all col-1 || all col-2 || all col-3 children) has been clicked

$('.tic').one('click', function (event) {
    // console.log('col-1 clicked'); // this would log three times 
    // i wanna check if all three are clicked 
    if ($('#col-1').children().text() == 'XXX' || $('#col-2').children().text() == 'XXX' || $('#col-3').children().text() == 'XXX') {
        // console.log('all col-1 clicked by X');
        $("#winner").text(' Player X');
        $('.tic').off('click');
    } else {
        if ($('#col-1').children().text() == 'OOO' || $('#col-2').children().text() == 'OOO' || $('#col-3').children().text() == 'OOO'){
            // console.log('all col-1 clicked by O');
            $("#winner").text(' Player O');
            $('.tic').off('click');}
    }
}) // this happens to col-2 and col-3 , in total 3 scenarios
