# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Tic Tac Toe Game 

## Description 
The first student project of the Web Development Immersive course offered through Misk Academy in partnership with General Assembly, and as title implies, **it's a tic tac toe web game!**


[comment]: <> (- List technologies used)
## Technologies used
* HTML
* CSS
* JavaScript, and jQuery for DOM manipulation

## Approach
A breakdown to specifics approach was followed to build this game, by dividing page layout into small parts, writing meaningful html tags using simplified and focused css to style each html element, organizing and cleaning JavaScript lines following KISS and DRY principles. 


[comment]: <> (- Link to wireframes and user stories.)
### *Wireframes and User Stories*
In having [Project-1-Prompt: User Stories](https://github.com/wdi-red-coral/project-1-prompt/blob/master/README.md#user-stories) as a reference, main requirement were met, using on-files comment lines as pseudocode lines.  
Also some extra features were added as suggested in [Potential Extra Tic Tac Toe Features](https://github.com/wdi-red-coral/project-1-prompt/blob/master/README.md#potential-extra-tic-tac-toe-features).

---
[comment]: <> (- Document your planning and tell a story about your development process and problem-solving strategy.)
## Planning and Development Process
Planning started with searching and exploring different options and ways to build the game with an open mind
then: 

Day 1:
- Basic html layout
- Basic styling with css
- Adding special classes and IDs to html elements
- Building jQuery lines to enable clicks actions 
- Using developer tools all the way from here 

Day 2:
- Defining variables and building functions to use in jQuery to: manipulate page's content
- Defining winning scenarios, psudocode them
- Building  winning functions, along with ``turn()`` , ``tie()`` , ``reset()`` functions 
- Debugging functions

Day 3:
- Discussing, sharing thoughts on solving problems 
- Debugging and fixing JavaScript bugs 
- Adding a feature so the first player gets to pick X or O to play as
- Adding a feature to track and show winning/tie ``score()``
- Working on page styles and making it responsive 

Day 4:
- Adding sound feature
- Adding play vs computer feature
- Update ``winner()`` function
- Final touches on html, css and jQuery

## Problem-Solving Strategy
Using developer tools in chrome, ``console.log('')`` in JavaScript, and searching for different ways to run a code 

[comment]: <> (- List unsolved problems which would be fixed in future iterations.)
### Unsolved problems
- Playing vs computer feature doesn't allow the user to choose to play as O instead of X
- Animated view
- Allowing player to use other tokens than (X, O)

---
[comment]: <> (- Describe how you solved for the winner)
## winner() function
*side note: this function was written on the last day to replace three ones that were used before*
```javascript
let playBoard = ["", "", "", "", "", "", "", "", ""];
// the GameBoard:
// "box-1",     "box-4",    "box-7"
// "box-2",     "box-5",    "box-8"
// "box-3",     "box-6",    "box-9"
const winner = function () {
    // filling in a globally defined array with gameboared content
    for (let i = 0; i < 9; i++) { 
        playBoard[i] = $("div#box-" + (i + 1)).text();
    }
    if (playBoard[0] == 'X' && playBoard[1] == 'X' && playBoard[2] == 'X' || playBoard[3] == 'X' && playBoard[4] == 'X' && playBoard[5] == 'X' || playBoard[6] == 'X' && playBoard[7] == 'X' && playBoard[8] == 'X') // if X won with a column
    {
        winnerIsX(); // a function to print out the winner and update score 
    }
    if (playBoard[0] == 'O' && playBoard[1] == 'O' && playBoard[2] == 'O' || playBoard[3] == 'O' && playBoard[4] == 'O' && playBoard[5] == 'O' || playBoard[6] == 'O' && playBoard[7] == 'O' && playBoard[8] == 'O') // if O won with a column
    {
        winnerIsO(); 
    }
    if (playBoard[0] == 'X' && playBoard[3] == 'X' && playBoard[6] == 'X' || playBoard[1] == 'X' && playBoard[4] == 'X' && playBoard[7] == 'X' || playBoard[2] == 'X' && playBoard[5] == 'X' && playBoard[8] == 'X') // if X won with a row
    {
        winnerIsX(); 
    }
    if (playBoard[0] == 'O' && playBoard[3] == 'O' && playBoard[6] == 'O' || playBoard[1] == 'O' && playBoard[4] == 'O' && playBoard[7] == 'O' || playBoard[2] == 'O' && playBoard[5] == 'O' && playBoard[8] == 'O') {
        winnerIsO();
    }
    if (playBoard[0] == 'X' && playBoard[4] == 'X' && playBoard[8] == 'X' || playBoard[6] == 'X' && playBoard[4] == 'X' && playBoard[2] == 'X') // if X won diagonally
    {
        winnerIsX(); 
    }
    if (playBoard[0] == 'O' && playBoard[4] == 'O' && playBoard[8] == 'O' || playBoard[6] == 'O' && playBoard[4] == 'O' && playBoard[2] == 'O') {
        winnerIsO();
    }
}
```


[comment]: <> (- Describe how some of your favorite functions work)
## Highlights
**Lessons learned :**
- There is more than one right way to get your code running perfectlly
- Despite how useful open source libraries are, you have to learn how and when it is best to use them and when it's not
- Discussing your way of thinking in solving problems with others can be as helpful as searching online
- No matter how complicated your html layout can get, IDs and classes are such a life savor! they can save you so much coding lines and neck-pain bugs and issues

**Interesting lines of code :**

*was edited out on last version*
```javascript
if ($("#col-1").text() == "XXX" || $("#col-2").text() == "XXX" || $("#col-3").text() == "XXX")
winnerIsX();
```

## Game Demo 
**Try it out!**  
|| [Game Demo](https://hamoghamdi.github.io/tic-tac-toe-project/) ||
