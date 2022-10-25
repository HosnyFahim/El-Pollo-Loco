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
    img;
    imageCache = {};
    currentImages = 0;
    speed = 0.15;

    
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

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

}
