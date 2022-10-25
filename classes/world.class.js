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
        requestAnimationFrame(function() {
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
 * It draws an image to the canvas
 * @param mo - the object to be drawn
 */
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}