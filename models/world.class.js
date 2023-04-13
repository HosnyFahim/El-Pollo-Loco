

/* Creating a new instance of the World class. */
class World {
    character = new Character();
    StatusBarHealth = new StatusBarHealth();
    StatusBarCoin = new StatusBarCoin();
    StatusBarBottle = new StatusBarBottle();
    StatusBarEndBossIcon = new StatusBarEndBossIcon();
    StatusBarEndBossHealth = new StatusBarEndBossHealth();
    throwableObjects = [];
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    /**
     * The constructor function is called when the object is created, and it sets the canvas context, the
     * canvas, the keyboard, and then calls the draw and setWorld functions.
     * @param canvas - The canvas element
     * @param keyboard - This is the keyboard object that we created earlier.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * It sets the world of the character to the world
     */
    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
            this.enemyCharacterColision();
        }, 200);
    }

    checkCollisions() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                this.coinCollected(coin);
                this.StatusBarCoin.setPercentage(this.character.coins, this.character.maxCoins);
            }
        });
        this.level.bottles.forEach((bottles) => {
            if (this.character.isColliding(bottles)) {
                this.character.collectBottle();
                this.bottleCollected(bottles);
                this.StatusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles);
            }
        });
    }

    enemyCharacterColision() {
        this.setFalling();
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingTop(enemy) && this.isDecreasing(this.oldValue, this.newValue)) {
                this.character.jump();
                enemy.dead = true;
                setTimeout(() => {
                    this.deletEnemyFromArray(this.level.enemies, enemy);
                }, 500);
            } else if (this.character.isColliding(enemy)) {
                this.character.hitCharacter();
                this.StatusBarHealth.setPercentage(this.character.energy, this.character.maxEnergy);

            } console.log('collision with Character, energy', this.character.energy, this.character.maxEnergy);
        });
    }

    checkThrowObject() {
        if (this.keyboard.S && this.character.bottles > 0) {
            let throwableBottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(throwableBottle);
            this.character.bottles--;
            this.StatusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles);
        }
    }



    coinCollected(coin) {
        let i = this.level.coins.indexOf(coin);
        this.level.coins.splice(i, 1);
    }

    bottleCollected(bottles) {
        let i = this.level.bottles.indexOf(bottles);
        this.level.bottles.splice(i, 1);
        this.maxBottlesToThrow++;
    }

    deletEnemyFromArray(enemy) {
        let i = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(i, 1);
    }


    /* Drawing the character, enemies, and clouds. */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endboss);
        this.addObjectToMap(this.level.bottles);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        // --------- Space for fixed Objects -------- //
        this.addToMap(this.StatusBarHealth);
        this.addToMap(this.StatusBarCoin);
        this.addToMap(this.StatusBarBottle);
        this.addToMap(this.StatusBarEndBossHealth);
        this.addToMap(this.StatusBarEndBossIcon);
        this.ctx.translate(this.camera_x, 0);  // --------- Forwards ----------- //
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
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
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
        mo.drawFrameCharacter(this.ctx);
        mo.drawFrameBottle(this.ctx);
        mo.drawFrameCoin(this.ctx);


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

    isDecreasing(oldValue, newValue) {
        return oldValue < newValue;
    }

    setFalling() {
        this.newValue = this.character.y;
        setTimeout(() => {
            this.oldValue = this.character.y;
        }, 500);
    }

}

