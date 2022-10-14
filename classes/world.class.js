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

class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    draw() {

    }
}