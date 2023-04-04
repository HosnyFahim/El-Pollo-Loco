
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    S = false;
}


/* Listening to the keyboard and setting the keyboard object to true when the key is pressed. */
window.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight") {
        keyboard.RIGHT = true;
    }

    if (e.code == "ArrowLeft") {
        keyboard.LEFT = true;
    }

    if (e.code == "ArrowUp") {
        keyboard.UP = true;
    }

    if (e.code == "ArrowDown") {
        keyboard.DOWN = true;
    }

    if (e.code == "Space") {
        keyboard.SPACE = true;
    }

})

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