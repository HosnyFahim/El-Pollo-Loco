/**
    * @description      : 
    * @author           : hosny
    * @group            : 
    * @created          : 17/10/2022 - 20:06:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/10/2022
    * - Author          : hosny
    * - Modification    : 
**/
class BackgroundObject extends MovableObject {
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}