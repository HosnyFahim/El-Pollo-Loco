/**
    * @description      : Creating a new class called Endboss that inherits from the MovableObject class.
    * @author           : hosny
    * @group            : 
    * @created          : 27/10/2022 - 01:06:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

class Endboss extends MovableObject {
    height = 400;
    width = 250;
    x = 50;
    y = 50;
    IMAGES_WALKING = [
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
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 720 * 7 + 200;
        this.animate();
    }

    /**
     * Every 200 milliseconds, call the playAnimation function and pass it the IMAGES_WALKING array.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}