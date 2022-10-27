/**
    * @description      : The Cloud class is a MovableObject that has a y value of 20, a width of 500, a height of 250, and a
random x value.
    * @author           : hosny
    * @group            : 
    * @created          : 17/10/2022 - 18:48:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250
    IMAGES_WALKING = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.x = Math.random() * 500;
        this.animate();
    }

    /**
     * Every 60th of a second, subtract 0.1 from the x property of the object.
     */
    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}