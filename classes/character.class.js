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
    IMAGES_WALKING = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    world;


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

/**
 * Every 200 milliseconds, set the image to the next image in the array.
 */
    animate() {
        setInterval(() => {
            let i = this.currentImages % this.IMAGES_WALKING.length; // let i = 0 % 10;
            // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImages++;
        }, 200);
    }

    jump() {

    }
}