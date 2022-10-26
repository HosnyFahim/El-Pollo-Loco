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
    speed = 10;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('audio/pepe_walking.mp3');


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
            this.walking_sound.pause();
            /* Moving the character to the right. */
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            /* Moving the character to the left. */
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            /* Moving the camera to the left. */
            this.world.camera_x = -this.x + 120;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.walkAnimation();
            }
        }, 70);
    }

    jump() {

    }

    /**
     * "The walkAnimation() function is called every time the game loop runs. It increments the
     * currentImages variable by 1, and then uses the currentImages variable to determine which image to
     * display."
     * 
     * The walkAnimation() function is called every time the game loop runs. It increments the
     * currentImages variable by 1, and then uses the currentImages variable to determine which image to
     * display.
     * 
     * The currentImages variable is incremented by 1 every time the game loop runs. The currentImages
     * variable is used to determine which image to display.
     * 
     * The currentImages variable is incremented by 1 every time the game loop runs. The currentImages
     * variable is used to determine which image to display.
     * 
     * The currentImages variable is incremented by 1 every time the game loop runs. The currentImages
     * variable is used to determine which image to display.
     * 
     * The currentImages variable is incremented by 1 every time the game
     */
    walkAnimation() {
        let i = this.currentImages % this.IMAGES_WALKING.length; // let i = 0 % 10;
        // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImages++;
    }
}