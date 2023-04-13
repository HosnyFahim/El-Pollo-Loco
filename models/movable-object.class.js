

/**
 *
 *
 * @class MovableObject
 */
class MovableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    maxEnergy = 100;
    maxCoins = 20;
    maxBottles = 17;
    coins = 0;
    bottles = 0;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }



    /**
     * The function moves an object to the right by increasing its x-coordinate based on its speed.
     */
    moveRight() {
        this.x += this.speed;
        this.walking_sound.play();
    }

    /**
     * Every 60th of a second, subtract the speed from the x value.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * The "jump" function sets the vertical speed of an object to 25 and plays a sound effect.
     */
    jump() {
        this.speedY = 25;
    }

    sleep() {
        let timepassed = new Date().getTime() - this.characterLastMovement;
        timepassed = timepassed / 1000;
        return timepassed > 1.5;
    }

    collectCoin() {
        this.coins++;
        console.log('co :>> ', this.coins);
    };

    collectBottle() {
        this.bottles++;
        console.log('bo :>> ', this.bottles);
    };


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




    /**
     * The function applies gravity to an object by decreasing its vertical position and speed over time.
     */
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
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 140;
        }

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
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&    //   right > left =>   Collision in front
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&     //    top > bottom =>   Collision bottom
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&       //     left > right =>   Collision behind
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    isCollidingTop(mo) {
        if (this.isColliding(mo) && this.isAboveGround()) {
            return true;
        }
    }


    /**
     * The function decreases the energy of a character by 5 and sets the last hit time if the energy is
     * not negative.
     */
    hitCharacter() {
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

    /**
     * The function checks if an object's energy level is equal to zero and returns a boolean value.
     * @returns The `isDead()` method is returning a boolean value that indicates whether the energy of the
    * object is equal to zero or not. If the energy is zero, it will return `true`, indicating that the
     * object is dead. Otherwise, it will return `false`, indicating that the object is still alive.
     */
    isDead() {
        return this.energy == 0;
    }


}



