/**
    * @description      : The World class has a character property that is an instance of the Character class, and an enemies
                          property that is an array of three Chicken instances.
                          </code>
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 17:37:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

/* Creating a new instance of the World class. */
class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),


    ];
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    /**
     * It sets the world of the character to the world
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * It clears the canvas, draws the character, and then calls itself again.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        this.addObjectToMap(this.clouds);

        /* Calling the draw function again. */
        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * For each object in the array, add it to the map.
     * @param objects - An array of objects to add to the map.
     */
    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


/**
 * "If the object has a property called otherDirection, flip the image, draw it, then flip it back."
 * 
 * The function is called by the following code:
 * @param mo - the object to be drawn
 */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * "The function flips the image by translating the canvas to the width of the image, scaling the
     * canvas by -1, and then setting the x position of the image to the negative of the x position of the
     * image."
     * 
     * The first line of the function saves the canvas state. This is important because we are going to be
     * changing the canvas state. We want to be able to restore the canvas state to what it was before we
     * changed it.
     * 
     * The second line of the function translates the canvas to the width of the image. This is important
     * because we want to flip the image around the center of the image. If we don't translate the canvas
     * to the width of the image, the image will be flipped around the left edge of the canvas.
     * 
     * The third line of the function scales the canvas by -1. This is important because we want to flip
     * the image. If we don't scale the canvas by -1,
     * @param mo - the object to be drawn
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * This function flips the image back to its original orientation.
     * @param mo - the object you want to flip
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}