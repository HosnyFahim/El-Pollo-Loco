/**
    * @description      : BackgroundObject is a MovableObject that has an imagePath, x, and y.
    * @author           : hosny
    * @group            : 
    * @created          : 17/10/2022 - 20:06:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

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