class Bottle extends MovableObject {
    x = 120;
    y = 345;
    width = 100;
    height = 100;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 700 + Math.random() * 4000;
    }
} 