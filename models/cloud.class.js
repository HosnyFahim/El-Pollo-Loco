

class Cloud extends MovableObject {
    y = 20;
    x = 20;
    width = 500;
    height = 250;
    speed = 0.15;


    constructor(imagePath, x) {
        super().loadImage(imagePath, x);
        this.x = x;
        this.animateClouds();
    }

    /**
     * Every 60th of a second, subtract 0.1 from the x property of the object.
     */
    animateClouds() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}