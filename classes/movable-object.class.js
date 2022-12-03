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
class MovableObject {
    img;
    y = 20;
    imageCache = {};
    currentImages = 0;
    speed = 0.15;
    speedY = 0;
    acceleration = 2;
    otherDirection = false;



    /**
     * It creates a new image object, and sets the source of that image to the path that was passed in
     * @param path - The path to the image file.
     */
    loadImage(path) {
        this.img = new Image();  // this.img = document.getElementById('image) <img id = "image" src = "path"/>
        this.img.src = path;
    }

    /**
     * It takes an array of image paths, creates a new image object for each path, sets the source of the
     * image to the path, and then adds the path to the imageCache object.
     * @param arr - An array of image paths
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    /**
     * Every 60th of a second, subtract the speed from the x value.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
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
        let i = this.currentImages % this.IMAGES_WALKING.length; // let i = 0 % 10;
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

}


