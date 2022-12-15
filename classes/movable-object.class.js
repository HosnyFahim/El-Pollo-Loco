/**
    * @description      : MovableObject has an x and y coordinate and can move left or right. 
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 15:19:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

/**
 *
 *
 * @class MovableObject
 */
class MovableObject extends DrawableObjaect {
    speed = 0.15;
    speedY = 0;
    acceleration = 2;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }



    moveRight() {
        this.x += this.speed;
    }

    /**
     * Every 60th of a second, subtract the speed from the x value.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 23;
        this.jumping_sound.play();
    }



    /**
     * "The function playAnimation() takes an array of images as a parameter, and then it sets the
     * current image to the first image in the array, and then it increments the current image by one."
     * 
     * 
     * The first line of the function is:
     * 
     * let i = this.currentImages % this.IMAGES_WALKING.length;
     * 
     * This line of code is a little confusing, so let's break it down.
     * 
     * this.currentImages is a variable that keeps track of the current image.
     * 
     * this.IMAGES_WALKING.length is the length of the array of images.
     * 
     * The % symbol is the modulus operator. It returns the remainder of a division operation.
     * 
     * So, this.currentImages % this.IMAGES_WALKING.length is the remainder of this.currentImages
     * divided by this.IMAGES_
     * @param images - an array of image paths
     */
    playAnimation(images) {
        let i = this.currentImages % images.length; // let i = 0 % 10;
        // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++;
    }


    playIdleAnimation(images) {
        let i = this.currentImages % this.IMAGES_IDLE.length; // let i = 0 % 10;
        // i = 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; 0, 1, 2, 3, 4, 5; ...
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImages++;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     *
    *
    * @return {*} 
    * @memberof MovableObject
    */
    isAboveGround() {
        return this.y < 140;
    }


    /**
     * If the right side of the player is greater than the left side of the monster, and the bottom of the
     * player is greater than the top of the monster, and the left side of the player is less than the
     * right side of the monster, and the top of the player is less than the bottom of the monster, then
     * the player is colliding with the monster.
     * @param {the object to be drawn} mo
     * @return {character.isColliding(chcicken);}  
     * @memberof MovableObject
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
    /**
     *
     *
     * @return {*} 
     * @memberof MovableObject
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // Difference in Seconds
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }


}


// if (character.x + character.width > chicken.x &&
//     character.y + character.height > chciken.y &&
//     character.x < chicken.x &&
//     character.y < chicken.y + chicken.height
// )

