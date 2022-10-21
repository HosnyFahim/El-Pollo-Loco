/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 17:02:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/
class Character extends MovableObject {
    height = 290;
    width = 120; 
    x = 120;
    y = 145;
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
    }

    jump() {
        
    }
}