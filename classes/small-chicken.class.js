/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 09/11/2022 - 18:11:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/11/2022
    * - Author          : hosny
    * - Modification    : 
**/
class SmallChicken extends MovableObject {
    // x = 120;
    y = 385;
    height = 40;
    width = 40;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 5000;
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