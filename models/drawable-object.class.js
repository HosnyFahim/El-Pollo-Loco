
class DrawableObject {
    x = 30;
    y = 230;
    width = 40;
    height = 70;
    img;
    imgCache = {};
    currentImage = 0;


    /**
     * This Function is used to load the Current Image Path. 
     * 
     * @param {string} path - The Current Image Path. 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This Function load the Images from the Current Array.
     * 
     * @param {string} arrayImages - The Images from the Current Array. 
     */
    loadImages(arrayImages) {
        arrayImages.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }


    /**
     * This Function is used to draw the Elements on the Canvas, with a try catch command.
     * 
     * @param {string} ctx - The context to draw Elements on the Canvas. 
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (error) {
            console.warn('Image could not loaded', error);
            console.log(this.img.src);
        }

    }


    // drawFrameCharacter(ctx) {
    //     if (this instanceof Character) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.x + 15, this.y + 80, this.width - 30, this.height - 90);
    //         ctx.stroke();
    //     }
    // }


    // drawFrameCoins(ctx) {
    //     if (this instanceof Coin) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'green';
    //         ctx.rect(this.x + 28, this.y + 28, this.width - 55, this.height - 55);
    //         ctx.stroke();
    //     }
    // }


    // drawFrameBottles(ctx) {
    //     if (this instanceof Bottle) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'green';
    //         ctx.rect(this.x + 30, this.y + 15, this.width - 55, this.height - 25);
    //         ctx.stroke();
    //     }
    // }



    // drawFrameThrowableBottle(ctx) {
    //     if (this instanceof ThrowableObject) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'green';
    //         ctx.rect(this.x + 30, this.y + 20, this.width - 60, this.height - 50);
    //         ctx.stroke();
    //     }
    // }


    // drawFrameChickenNormal(ctx) {
    //     if (this instanceof NormalChicken) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x + 2.5, this.y + 2.5, this.width - 5, this.height - 5);
    //         ctx.stroke();
    //     }
    // }


    // drawFrameChickenSmall(ctx) {
    //     if (this instanceof SmallChicken) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x + 2.5, this.y + 2.5, this.width - 5, this.height - 5);
    //         ctx.stroke();
    //     }
    // }


    // drawFrameEnboss(ctx) {
    //     if (this instanceof Endboss) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x + 90, this.y + 120, this.width - 150, this.height - 200);
    //         ctx.stroke();
    //     }
    // }
}