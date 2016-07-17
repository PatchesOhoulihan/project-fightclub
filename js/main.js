/* Generated by Babel */
/*------------------------------------------------------------------------------------------
| Global Variables
--------------------------------------------------------------------------------------------*/

'use strict';

var player1 = null;

/*------------------------------------------------------------------------------------------
| Eventhandler
--------------------------------------------------------------------------------------------*/

document.querySelector('#create-fighter').addEventListener('click', function () {
    player1 = new Fighter(document.querySelector('#fighterName').value);
    player1.updateList();
});

document.querySelector('#fight').addEventListener('click', function () {
    var arena = new Ring();

    if (typeof player1 == null) {
        console.log("Create a player first:");
    } else {
        arena.battle(player1, new Fighter('dummy'));
    }
});