let canvas;
let world;
let keyboard = new Keyboard();
let audioBackgroundMusicInGame = new Audio('audio/backgroundMusicInGame.mp3');
let audioWalkCharacter = new Audio('audio/walkingCharacter.mp3');
let audioJumpCharacter = new Audio('audio/jumpCharacter.mp3');
let auidoHurtCharacter = new Audio('audio/hurtCharacter.mp3');
let audioSleepCharacter = new Audio('audio/sleepCharacter.mp3');
let audioGameLost = new Audio('audio/deadCharacter.mp3');
let audioCoinCollected = new Audio('audio/coinCollected.mp3');
let audioBottleCollected = new Audio('audio/bottleCollected.mp3');
let audioThrowBottle = new Audio('audio/throwBottle.mp3');
let audioSplashBottle = new Audio('audio/bottleSplash.mp3');
let audioGameWin = new Audio('audio/soundWin.mp3');
let audioDeadChicken = new Audio('audio/deadChicken.mp3');
let audioBackgroundMusicEndboss = new Audio('audio/backgroundMusicEndboss.mp3');
let intervalIds = [];


/**
 * This function start the Game.
 * 
 */
function startGame() {
    showLoadingScreen();
    setTimeout(() => {
        initLevel();
        hideElementsInStartScreen();
        showSoundBtns();
        showMobileBtns();
        showFullscreenBtn();
        canvas = document.getElementById('canvas');
        world = new World(canvas, keyboard);
        closeLoadingScreen();
        playBackgroundMusic();
    }, 3500);
}


/**
 * This Function show the Loading Screen.
 * 
 */
function showLoadingScreen() {
    document.getElementById('loadingScreenContainer').classList.remove('hide');
}


/**
 * This Function close the Loading Screen.
 * 
 */
function closeLoadingScreen() {
    document.getElementById('loadingScreenContainer').classList.add('hide');
}


/**
 * This function hide all the elements in the StartScreen.
 * 
 */
function hideElementsInStartScreen() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('btnPlay').classList.add('d-none');
    document.getElementById('steeringIcon').classList.add('d-none');
    document.getElementById('infoIcon').classList.add('d-none')
}


/**
 * This Function show the Sound Buttons.
 * 
 */
function showSoundBtns() {
    document.getElementById('audioOnIcon').classList.remove('d-none');
    document.getElementById('audioOffIcon').classList.remove('d-none');
}


/**
 * This Function show the Mobile Buttons.
 * 
 */
function showMobileBtns() {
    document.getElementById('positionAbsoluteLeft').classList.remove('d-none');
    document.getElementById('positionAbsoluteRight').classList.remove('d-none');
}


/**
 * This Function show the Fullscreen Button.
 * 
 */
function showFullscreenBtn() {
    document.getElementById('enterFullscreenIcon').classList.remove('d-none');
}


/**
 * This Function Play the Backgroundmusic.
 * 
 */
function playBackgroundMusic() {
    audioBackgroundMusicInGame.volume = 0.2;
    audioBackgroundMusicInGame.play();
    audioBackgroundMusicInGame.loop = true;
}


/**
 * This Function restart the Game.
 * 
 */
function restartGame() {
    document.getElementById('gameOverScreenContainer').classList.add('d-none');
    document.getElementById('winScreenContainer').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('audioOffIcon').classList.remove('d-none');
    document.getElementById('audioOnIcon').classList.remove('d-none');
    document.getElementById('enterFullscreenIcon').classList.remove('d-none');
    closeFullscreen();
    clearAllIntervals();
    resetBackgroundMusic();
    startGame();
    document.getElementById('canvas').classList.remove('d-none');
}


/**
 * This Function go back to Start screen.
 * 
 */
function goBackToStartScreen() {
    clearAllIntervals();
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('gameOverScreenContainer').classList.add('d-none');
    document.getElementById('winScreenContainer').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('btnPlay').classList.remove('d-none');
    document.getElementById('positionAbsoluteLeft').classList.add('d-none');
    document.getElementById('positionAbsoluteRight').classList.add('d-none');
    document.getElementById('steeringIcon').classList.remove('d-none');
    document.getElementById('infoIcon').classList.remove('d-none');
    closeFullscreen();
    resetBackgroundMusic();
}


/**
 * This Function show the Gameover Screen.
 * 
 */
function showGameOverScreen() {
    setTimeout(() => {
        document.getElementById('positionAbsoluteLeft').classList.add('d-none');
        document.getElementById('positionAbsoluteRight').classList.add('d-none');
        document.getElementById('gameOverScreenContainer').classList.remove('d-none');
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('audioOffIcon').classList.add('d-none');
        document.getElementById('audioOnIcon').classList.add('d-none');
        document.getElementById('enterFullscreenIcon').classList.add('d-none');
        document.getElementById('exitFullscreenIcon').classList.add('d-none');
        resetBackgroundMusic();
    }, 1500);
}


/**
 * This Function show the Win Screen.
 * 
 */
function showWinScreen() {
    setTimeout(() => {
        document.getElementById('winScreenContainer').classList.remove('d-none');
        document.getElementById('canvas').classList.add('d-none');
        document.getElementById('audioOffIcon').classList.add('d-none');
        document.getElementById('audioOnIcon').classList.add('d-none');
        document.getElementById('positionAbsoluteLeft').classList.add('d-none');
        document.getElementById('positionAbsoluteRight').classList.add('d-none');
        document.getElementById('enterFullscreenIcon').classList.add('d-none');
        document.getElementById('exitFullscreenIcon').classList.add('d-none');
        resetBackgroundMusic();
    }, 1500);
}


/**
 * This Function reset Sounds.
 * 
 */
function resetBackgroundMusic() {
    audioBackgroundMusicInGame.currentTime = 0;
    audioBackgroundMusicEndboss.currentTime = 0;
    audioBackgroundMusicEndboss.pause();
    audioBackgroundMusicInGame.pause();
}


/**
 * This Function set a Stopable Interval to after clear the Intervals.
 * 
 * @param {string} fn - This is a Function to call the Interval
 * @param {string} time - This is the Time how often call the Interval.
 */
function setStopableInterval(fn, time) {
    let idIntervall = setInterval(fn, time);
    intervalIds.push(idIntervall);
}


/**
 * This Function clear the Intervals, with Interval IDs.
 * 
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++)  window.clearInterval(i);
}


/**
 * This function open the Fullscreen Mode.
 * 
 */
function openFullscreen() {
    let fullScreen = document.getElementById('fullScreen');
    if (fullScreen.requestFullscreen) {
        fullScreen.requestFullscreen();
    } else if (fullScreen.webkitRequestFullscreen) { /* Safari */
        fullScreen.webkitRequestFullscreen();
    } else if (fullScreen.msRequestFullscreen) { /* IE11 */
        fullScreen.msRequestFullscreen();
    }
    addStylesForFullScreen();
}


/**
 * This Function add Styles for Fullscreen.
 * 
 */
function addStylesForFullScreen() {
    document.getElementById('enterFullscreenIcon').classList.add('d-none');
    document.getElementById('exitFullscreenIcon').classList.remove('d-none');
    document.getElementById('canvas').classList.add('canvasFullScreen');
    document.getElementById('winScreenContainer').classList.add('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
    document.getElementById('gameOverScreen').classList.add('gameOverScreenFullScreen');
}


/**
 * This function close the Fullscreen Mode.
 * 
 */
function closeFullscreen() {
    if (document.fullscreenElement || /* Standard syntax */ document.webkitFullscreenElement || /* Safari and Opera syntax */  document.msFullscreenElement /* IE11 syntax */) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
    removeStylesForFullScreen();
}


/**
 * This Function remove Styles for Normal Screen.
 * 
 */
function removeStylesForFullScreen() {
    document.getElementById('enterFullscreenIcon').classList.remove('d-none');
    document.getElementById('exitFullscreenIcon').classList.add('d-none');
    document.getElementById('canvas').classList.remove('canvasFullScreen');
    document.getElementById('winScreenContainer').classList.remove('winScreenContainerFullScreen', 'winScreenContainerFullScreenh2', 'imgTrophyContainerFullScreenimg');
    document.getElementById('gameOverScreen').classList.remove('gameOverScreenFullScreen');
}


/**
 * This Function mute Sound if, you click on the mute Sound Button.
 * 
 */
function turnSoundOff() {
    audioBackgroundMusicEndboss.muted = true;
    audioBackgroundMusicInGame.muted = true;
    audioDeadChicken.muted = true;
    audioWalkCharacter.muted = true;
    audioJumpCharacter.muted = true;
    auidoHurtCharacter.muted = true;
    audioGameLost.muted = true;
    audioCoinCollected.muted = true;
    audioBottleCollected.muted = true;
    audioThrowBottle.muted = true;
    audioSplashBottle.muted = true;
    audioSleepCharacter.muted = true;
}


/**
 * This Function turn Sound on, if you click on the Sound Button.
 * 
 */
function turnSoundOn() {
    audioBackgroundMusicEndboss.muted = false;
    audioBackgroundMusicInGame.muted = false;
    audioDeadChicken.muted = false;
    audioWalkCharacter.muted = false;
    audioJumpCharacter.muted = false;
    auidoHurtCharacter.muted = false;
    audioGameLost.muted = false;
    audioCoinCollected.muted = false;
    audioBottleCollected.muted = false;
    audioThrowBottle.muted = false;
    audioSplashBottle.muted = false;
    audioSleepCharacter.muted = false;
}


/**
 * This Function open the Steering Menu.
 * 
 */
function openSteeringMenu() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('containerGameControlls').classList.remove('d-none');
    document.getElementById('btnPlay').classList.add('d-none');
    document.getElementById('audioOffIcon').classList.add('d-none');
    document.getElementById('audioOnIcon').classList.add('d-none');
    document.getElementById('steeringIcon').classList.add('d-none');
    document.getElementById('arrowBackGameControlls').classList.remove('d-none');
}

/**
 * This Function close the Steering Menu.
 *
 */
function closeSteeringMenu() {
    document.getElementById('containerGameControlls').classList.add('d-none');
    document.getElementById('arrowBackGameControlls').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('btnPlay').classList.remove('d-none');
    document.getElementById('audioOffIcon').classList.remove('d-none');
    document.getElementById('steeringIcon').classList.remove('d-none');
    document.getElementById('audioOffIcon').classList.add('d-none');
    document.getElementById('audioOnIcon').classList.add('d-none');
}


/**
 * This Function open the Game Description Menu.
 * 
 */
function openGameDescription() {
    document.getElementById('containerGameDescription').classList.remove('d-none');
    document.getElementById('infoIcon').classList.add('d-none');
    document.getElementById('arrowBackGameDescription').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('btnPlay').classList.add('d-none');
    document.getElementById('audioOffIcon').classList.add('d-none');
    document.getElementById('steeringIcon').classList.add('d-none');
    document.getElementById('audioOffIcon').classList.add('d-none');
    document.getElementById('audioOnIcon').classList.add('d-none');
}


/**
 * This Function close the Game Description Menu.
 * 
 */
function closeGameDescription() {
    document.getElementById('containerGameDescription').classList.add('d-none');
    document.getElementById('infoIcon').classList.remove('d-none');
    document.getElementById('arrowBackGameDescription').classList.remove('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('btnPlay').classList.remove('d-none');
    document.getElementById('steeringIcon').classList.remove('d-none');
    document.getElementById('audioOffIcon').classList.add('d-none');
    document.getElementById('audioOnIcon').classList.add('d-none');
}

