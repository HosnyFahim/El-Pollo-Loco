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


class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 200;
    width = 100; 
/**
 * It creates a new image object, and sets the source of that image to the path that was passed in
 * @param path - The path to the image file.
 */
    loadImage(path) {
        this.img = new Image();  // this.img = document.getElementById('image) <img id = "image" src = "path"/>
        this.img.src = path;
    }

    moveRight() {
        
    }

    moveLeft() {
        
    }
}
