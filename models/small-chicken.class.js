class SmallChicken extends MovableObject {
    // x = 120;
    y = 385;
    height = 40;
    width = 40;
    dead = false;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    IMAGES_DEAD_SMALLCHICKEN = [
        'El-Pollo-Loco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        'El-Pollo-Loco/img/3_enemies_chicken/chicken_small/2_dead/dead.png',
        'El-Pollo-Loco/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD_SMALLCHICKEN);
        this.x = 150 + Math.random() * 6000;
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
                this.smallChickenDead();
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    smallChickenDead() {
        this.playAnimation(this.IMAGES_DEAD_SMALLCHICKEN);
        this.speed = 0;
    }
}