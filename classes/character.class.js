/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 17:02:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/
class Character extends MovableObject {
    height = 290;
    width = 120;
    x = 120;
    y = 145;
    speed = 2;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    /**
     * Every 200 milliseconds, set the image to the next image in the array.
     */
    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation 
                let i = this.currentImages % this.IMAGES_WALKING.length; // let i = 0 % 10;
                // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImages++;
            }
        }, 70);
    }

    jump() {

    }
}