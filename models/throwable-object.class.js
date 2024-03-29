class ThrowableObject extends MovableObject {
    imagesRotatingBottle = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    imagesSplashBottle = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    intervalIds = [];


    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.imagesRotatingBottle);
        this.loadImages(this.imagesSplashBottle);
        this.throwBottle();
        this.width = 80;
        this.height = 60;
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
    }


    /**
     * This Function is basically used to animate and move the Throwing bottle.
     * 
     */
    throwBottle() {
        this.addGravityToBottle();
        this.animateBottle();
    }


    /**
     * This Function add Gravity around to Throw the Bottle.
     * 
     */
    addGravityToBottle() {
        this.speedY = 20;
        this.addGravity();
        setStopableInterval(() => {
            if (this.otherDirection) {
                this.x -= 12;
            } else {
                this.otherDirection;
                this.x += 12;
            }
        }, 25);
    }


    /**
     * This Function animate the Bottle so that it turns.
     * 
     */
    animateBottle() {
        setStopableInterval(() => {
            if (!world.level.endboss[0].isHurtEndboss()) {
                this.playAnimationMo(this.imagesRotatingBottle);
            } else {
                this.playAnimationMo(this.imagesSplashBottle);
            }
        }, 1000 / 25);
    }
}