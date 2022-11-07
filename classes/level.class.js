/**
    * @description      : level is a collection of enemies, clouds, and background objects
    * @author           : hosny
    * @group            : 
    * @created          : 26/10/2022 - 17:18:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 700*5;
    /**
     * This function takes in three arrays and assigns them to the properties of the object that it is
     * called on.
     * @param enemies - An array of enemy objects.
     * @param clouds - an array of objects that have a position and a velocity.
     * @param backgroundObjects - An array of objects that are in the background.
     */
    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}