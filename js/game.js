/**
    * @description      : Variables
    * @author           : hosny
    * @group            : 
    * @created          : 14/10/2022 - 15:03:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/10/2022
    * - Author          : hosny
    * - Modification    : 
**/
let canvas;
let world;

/**
 * The function init() is called when the page loads. It creates a new World object and stores it in
 * the variable world. It also stores the canvas element in the variable canvas.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    console.log('my charcter is', world.character);

}