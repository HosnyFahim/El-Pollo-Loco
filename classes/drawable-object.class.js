
class DrawableObjaect {
    img;
    imageCache = {};
    currentImages = 0;
    x = 120;
    y = 280;
    width = 100;
    height = 150;

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

    /**
    *
    *
    * @param {*} ctx
    * @memberof MovableObject
    */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('image could not loaded', error);
            console.log(this.img.src);
        }

    }

    /**
    *
    * It draws a blue rectangle around the character
    * @param {*} ctx
    * @memberof MovableObject
    */

    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof SmallChicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameCharacter(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'green';
            ctx.rect(this.x + 15, this.y + 100, this.width - 30, this.height - 100);
            ctx.stroke();
        }
    }


}