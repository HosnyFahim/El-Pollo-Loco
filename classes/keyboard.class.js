/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 25/10/2022 - 01:49:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/10/2022
    * - Author          : hosny
    * - Modification    : 
**/
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    S = false;
}


/* Listening to the keyboard and setting the keyboard object to true when the key is pressed. */
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }


});

/* Listening to the keyboard and setting the keyboard object to false when the key is released. */
window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

});