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
let ctx;
let world = new World();

/**
 * The function init() is called when the page loads. It gets the canvas element from the HTML page and
 * stores it in the variable canvas. It then gets the 2D drawing context and stores that in the
 * variable ctx. The context is an object with properties and methods that you use to draw on the
 * canvas.
 */
function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    console.log('my charcter is', world.character);

}