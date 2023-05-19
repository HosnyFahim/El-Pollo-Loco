class World {
    character = new Character();
    statusbarHealth = new StatusbarHealth();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    statusbarEndbossHealth = new StatusbarEnbossHealth();
    statusbarIconEndboss = new StatusbarIconEndboss();
    throwableObject = [];
    maxBottlesToThrow = 0;
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    intervalIds = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorldWithCharacter();
        this.checkCollisionsWithMo();
        this.checkCollisionsWithThrowingBottle();
    }


    /**
     * This Function draw all Elements in the Canvas.
     * 
     */
    draw() {
        this.clearCanvas();
        this.ctx.translate(this.cameraX, 0); // ===> Move the Map Forward.
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.cameraX, 0); // ===> Move the Map Backward.
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.addToMap(this.statusbarEndbossHealth);
        this.addToMap(this.statusbarIconEndboss);
        this.ctx.translate(this.cameraX, 0); // ===> Move the Map Forward.
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.ctx.translate(-this.cameraX, 0); // ===> Move the Map Backward.
        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    /**
     * This Function Clear the whole Canvas.
     * 
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    /**
     * This Function add the objects from the Arrays to Map.   
     * 
     * @param {string} objects - These are the objects added from the corresponding Arrays.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    /**
     * This Function add the MovableObject to Map.
     * 
     * @param {string} mo - This is the MovableObject for example Character Class or Enboss Class.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);   // ===> Mirror the Character.
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);  // ===> Turn around the Character.
        }
        // mo.drawFrameCharacter(this.ctx);
        // mo.drawFrameCoins(this.ctx)
        // mo.drawFrameBottles(this.ctx);
        // mo.drawFrameThrowableBottle(this.ctx);
        // mo.drawFrameChickenNormal(this.ctx);
        // mo.drawFrameChickenSmall(this.ctx);
        // mo.drawFrameEnboss(this.ctx);
    }


    /**
     * This Function mirror the Character Class.   
     * 
     * @param {string} mo - This is the MovableObject for example Character Class or Enboss Class.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * This Function turn around the Character Class.   
     * 
     * @param {string} mo - This is the MovableObject for example Character Class or Enboss Class.
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    /**
     * This Function link the World Class with the Character Class.
     * 
     */
    setWorldWithCharacter() {
        this.character.world = this;
    }


    /**
     * This Function asks general all Collisions.
     *  
     */
    checkCollisionsWithMo() {
        setStopableInterval(() => {
            this.checkCollisionsChicken();
            this.checkCollisionsEndboss();
            this.checkCollectedCoins();
            this.checkCollectedBottles();
        }, 1000 / 25);
    }


    /**
     * This Function asks general all Collisions with the Throwing Bottle.
     */
    checkCollisionsWithThrowingBottle() {
        setStopableInterval(() => {
            this.checkThrowObjects();
            this.checkCollisionWithBottleEndboss();
        }, 230);
    }


    /**
     * This Function asks the Collisions with the Chicken Enemies.
     * 
     */
    checkCollisionsChicken() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !this.character.isHurtCharacter()) {
                if (this.character.isAboveGround()) {
                    this.killChickenWithJumpFromTop(enemy);
                } else {
                    this.character.hitCharacter()
                    this.statusbarHealth.setPercentage(this.character.energy);
                }
            }
        });
    }


    /**
     * This Function kill the Chicken as soon as Jump on the Chicken. (Like in Super Mario).
     * 
     * @param {string} enemy - This is the Current enemy in the Array.
     */
    killChickenWithJumpFromTop(enemy) {
        enemy.chickenKilled();
        this.character.speedY = 30;
        audioDeadChicken.play();
        audioDeadChicken.volume = 0.3
        setTimeout(() => {
            this.eraseEnemyFromArray(enemy);
        }, 750);
    }


    /**
     * This Function Check only Collisions with the Enboss.
     * 
     */
    checkCollisionsEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hitCharacter();
                this.statusbarHealth.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * This Function Check only Collisions with the Coins, to Collect them.
     * 
     */
    checkCollectedCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isCollected(coin)) {
                this.coinCollected(coin);
                this.character.raiseProgressbarCoin();
                audioCoinCollected.play();
                this.statusbarCoin.setPercentage(this.character.progessCoinBar);
            }
        });
    }


    /**
     * This Function Check the index, in the coins Array.
     * 
     * @param {string} coin - This is the Current coin in the Array. 
     */
    coinCollected(coin) {
        let i = this.level.coins.indexOf(coin);
        this.level.coins.splice(i, 1);
    }


    /**
     * This Function Check only Collisions with the Bottles, to Collect them.
     * 
     */
    checkCollectedBottles() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isCollected(bottle)) {
                this.bottleCollected(bottle);
                this.character.raiseProgressbarBottle();
                audioBottleCollected.play();
                this.statusbarBottle.setPercentage(this.character.progessBottleBar);
            }
        });
    }


    /**
    * This Function Check the index, in the bottles Array.
    * 
    * @param {string} bottle - This is the Current bottle in the Array. 
    */
    bottleCollected(bottle) {
        let i = this.level.bottles.indexOf(bottle);
        this.level.bottles.splice(i, 1);
        this.maxBottlesToThrow++;
    }


    /**
     * This Function is used to Throw the bottles. 
     */
    checkThrowObjects() {
        if (this.keyboard.a && this.maxBottlesToThrow > 0) {
            let bottle = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection);
            this.throwableObject.push(bottle);
            audioThrowBottle.play();
            this.maxBottlesToThrow--;
            this.character.reduceProgressbarBottleThroughThrow();
            this.statusbarBottle.setPercentage(this.character.progessBottleBar);
        }
    }


    /**
    * This Function Check the Collisions, if the Bottle hit the Enboss. 
    * 
    */
    checkCollisionWithBottleEndboss() {
        this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach(endboss => {
                if (bottle.isColliding(endboss)) {
                    endboss.hitEndboss(endboss.energy);
                    this.playSoundEnbossHit();
                    this.statusbarEndbossHealth.setPercentage(world.level.endboss[0].energy);
                    setTimeout(() => {
                        this.eraseThrowingBottleFromArray(bottle);
                    }, 180);
                }
            });
        });
    }


    /**
     * This Function Play Sound, if Bottle Colliding with the Enboss Class.
     * 
     */
    playSoundEnbossHit() {
        audioSplashBottle.volume = 0.2;
        audioSplashBottle.play();
        audioDeadChicken.volume = 0.3;
        audioDeadChicken.play();
    }


    /**
     * This Function erase the current enemy from the Array.
     * 
     * @param {string} enemy - This is the Current enemy from the Array. 
     */
    eraseEnemyFromArray(enemy) {
        let i = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(i, 1);
    }


    /**
    * This Function erase the current throwing Bottle from the Array.
    * 
    * @param {string} bottle - This is the Current bottle from the Array. 
    */
    eraseThrowingBottleFromArray(bottle) {
        let i = this.throwableObject.indexOf(bottle);
        this.throwableObject.splice(i, 1);
    }
}

