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
    img;
    height = 80;
    width = 60;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.6;
        this.animate();
    }


    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImages % this.IMAGES_WALKING.length; // let i = 0 % 10;
            // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImages++;
        }, 200);
    }



}
