

class Endboss extends MovableObject {
    height = 400;
    width = 250;
    x = 50;
    y = 50;
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    /**
     * The constructor function is called when the object is created. It sets the initial values for the
     * object's properties and methods.
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.x = 720 * 7 + 200;
        this.animateAlertEndboss();
    }


/**
 * Every 200 milliseconds, call the playAnimation function and pass it the IMAGES_ALERT array.
 */
    animateAlertEndboss() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);
        }, 200);
    }
}