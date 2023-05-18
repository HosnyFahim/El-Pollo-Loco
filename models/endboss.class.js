

class Endboss extends MovableObject {
    x = 4600;
    y = 95;
    width = 300;
    height = 350;
    speed = 20;
    speedThroughHit = 50;
    imagesWalkingEndboss = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    imagesAlertEndboss = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    imagesAttackEndboss = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    imagesHurtEndboss = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    imagesDeadEndboss = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    offset = {
        top: 100,
        bottom: 50,
        left: 40,
        right: 40,
    }
    hadFirstContact = false;
    intervalIds = [];


    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png');
        this.loadImages(this.imagesWalkingEndboss);
        this.loadImages(this.imagesAlertEndboss);
        this.loadImages(this.imagesAttackEndboss);
        this.loadImages(this.imagesHurtEndboss);
        this.loadImages(this.imagesDeadEndboss);
        this.animateEndboss();
    }


    /**
     * This Function Animate basically the Enboss Class.
     * 
     */
    animateEndboss() {
        let i = 0;
        setStopableInterval(() => {
            this.playEndboss(i);
            i++;
            if (this.endbossReached()) {
                i = 0;
                this.hadFirstContact = true;
                this.playBackgroundMusicEndboss();
            }
        }, 120);
    }


    /**
     * This Function Play the Endboss with different Animations.
     * 
     * @param {number} i - The Current number for Play the Intro Animation from Endboss. 
     */
    playEndboss(i) {
        if (i < 15) {
            this.playAnimationMo(this.imagesAlertEndboss);
        } else if (!this.isDead() && !this.isHurtEndboss() && this.endbossFightBegins()) {
            this.playAnimationMo(this.imagesWalkingEndboss);
            this.moveLeft();
        } else if (this.isHurtEndboss()) {
            this.playAnimationMo(this.imagesAttackEndboss);
            this.endBossRushForward();
        } else if (this.isDead()) {
            this.playAnimationMo(this.imagesDeadEndboss);
            setTimeout(() => {
                this.gameIsWin();
            }, 350);
        }
    }


    /**
     * This Function show the Game Over Screen, after the Endboss was beaten.
     * 
     */
    gameIsWin() {
        audioGameWin.play();
        clearAllIntervals();
        resetBackgroundMusic();
        showWinScreen();
    }


    /**
     * This Function play the Endboss Backgroundmusic while the Bossfight.
     * 
     */
    playBackgroundMusicEndboss() {
        audioBackgroundMusicEndboss.volume = 0.2;
        audioBackgroundMusicEndboss.play();
        audioBackgroundMusicEndboss.loop = true;
        audioBackgroundMusicInGame.pause();
    }


    /**
     * This Function triggers the Intro Animation from the Enboss Class.
     * 
     * @returns {boolean} Return True or False, depending on the Character Class is near enough to the Endboss Class.
     */
    endbossReached() {
        return world.character.x > 3800 && !this.hadFirstContact;
    }


    /**
     * This Function use to begin the Boss fight.
     * 
     * @returns {boolean} Return True or False, depending on the Character Class is near enough to the Endboss Class.
     */
    endbossFightBegins() {
        return world.character.x > world.level.endboss[0].x - 1000;
    }


    /**
     * This Function is used with it, the Endboss Class rush forward when he gets hit.            
     * 
     * @returns {speedIncreaseThroughHit} Return the Value of the increased Speed.
     */
    endBossRushForward() {
        let speedIncreaseThroughHit = world.level.endboss[0].x -= this.speedThroughHit;
        return speedIncreaseThroughHit;
    }
}