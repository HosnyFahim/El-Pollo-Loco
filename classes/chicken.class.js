/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 17:33:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/

/* It creates a class called Chicken that inherits from MovableObject. */
class Chicken extends MovableObject {
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
    }
}