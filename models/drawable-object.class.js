
class DrawableObject {
    img;
    imageCache = {};
    currentImages = 0;
    x = 120;
    y = 280;
    width = 100;
    height = 120;

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
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameCharacter(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 20, this.y + 80, this.width - 40, this.height - 90);
            ctx.stroke();
        }
    }

    drawFrameBottle(ctx) {
        if (this instanceof Bottle) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 35, this.y + 20, this.width - 60, this.height - 30);
            ctx.stroke();
        }
    }

    drawFrameCoin(ctx) {
        if (this instanceof Coin) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 30, this.y + 30, this.width - 60, this.height - 60);
            ctx.stroke();
        }
    }


}