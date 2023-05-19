class StatusbarIconEndboss extends DrawableObject {
    x = 558;
    y = 45;
    width = 40;
    height = 40;
    imageIconEnbossStatusbar = [
        'img/7_statusbars/3_icons/icon_health_endboss.png',
    ];


    constructor() {
        super().loadImage(this.imageIconEnbossStatusbar);
    }
}