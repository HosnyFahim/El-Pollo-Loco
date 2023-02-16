
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;
/**
 * The constructor function is a function that is called when an object is created from a class.
 * @param imagePath - The path to the image you want to load.
 * @param x - The x coordinate of the image.
 */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}