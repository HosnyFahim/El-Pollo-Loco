class StatusBarEndBossIcon extends StatusBar {
    IMAGES = [
        'img/7_statusbars/3_icons/icon_health_endboss.png'
    ];



        constructor() {
            super().loadImage(this.IMAGES[0]);
            this.x = 520;
            this.y = 40;
            this.width = 50;
            this.height = 50;
        }
    
}