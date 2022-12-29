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
    bottles;
    coins; 
    level_end_x = 720*7;

/**
 * This function takes in 5 arrays and assigns them to the properties of the object that is being
 * created.
 * @param enemies - an array of enemy objects
 * @param clouds - an array of objects that are clouds
 * @param backgroundObjects - An array of objects that are in the background.
 * @param bottles - Array of bottle objects
 * @param coins - Array of coin objects
 */
    constructor(enemies, clouds, backgroundObjects, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}