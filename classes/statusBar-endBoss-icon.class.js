class StatusBarEndBossIcon extends DrawableObject {
    IMAGES_ENDBOSSICON = [
        'img/7_statusbars/3_icons/icon_health_endboss.png'
    ];
    percentage = 100;


        constructor() {
            super().loadImage(this.IMAGES_ENDBOSSICON[0]);
            this.x = 470;
            this.y = 40;
            this.width = 50;
            this.height = 50;
        }
    
}