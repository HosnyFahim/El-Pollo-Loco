/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 17:33:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

/* It creates a class called Chicken that inherits from MovableObject. */
class Chicken extends MovableObject {
    x = 120;
    y = 350;
    height = 80;
    width = 60;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 6000;
        this.speed = 0.20 + Math.random() * 1;
        this.animate();
    }


    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }



}
