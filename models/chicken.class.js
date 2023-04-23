/* It creates a class called Chicken that inherits from MovableObject. */
class Chicken extends MovableObject {
    x = 120;
    y = 350;
    height = 80;
    width = 60;
    dead = false;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD_CHICKEN = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD_CHICKEN);
        this.x = 200 + Math.random() * 6000;
        this.speed = 0.20 + Math.random() * 1;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.moveLeft();
        setInterval(() => {
            if (this.isDead()) {
                chickenDead();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    chickenDead() {
        this.playAnimation(this.IMAGES_DEAD_CHICKEN);
        this.speed = 0;
    }



}