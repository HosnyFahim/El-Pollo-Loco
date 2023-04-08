
let canvas;
let world;
let keyboard = new Keyboard();
// walking_sound = new Audio('audio/pepe_walking.mp3');
// jumping_sound = new Audio('audio/pepe_jumping.mp3');
// hurt_sound = new Audio('audio/pepe_hurt.mp3');
// dead_sound = new Audio('audio/pepe_dead.mp3');

/**
 * The function init() is called when the page loads. It creates a new World object and stores it in
 * the variable world. It also stores the canvas element in the variable canvas.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My character is', world.character);
}

function turnSoundOff() {
    document.getElementById('sound-on').classList.remove('d-none');
    document.getElementById('sound-off').classList.add('d-none');
    // setTimeout(() => {
    //     document.getElementById('sound-on').setAttribute(`onclick`, );
    // }, 100);
}

function turnSoundOn() {
    document.getElementById('sound-off').classList.remove('d-none');
    document.getElementById('sound-on').classList.add('d-none');
}

function turnFullScreenOn() {
    document.getElementById('fullScreen-off').classList.remove('d-none');
    document.getElementById('fullScreen-on').classList.add('d-none');
}

function turnFullScreenOff() {
    document.getElementById('fullScreen-on').classList.remove('d-none');
    document.getElementById('fullScreen-off').classList.add('d-none');
}

