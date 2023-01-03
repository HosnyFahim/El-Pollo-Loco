class StatusBarCoin extends DrawableObject {

    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];
    percentage = 100;


    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 80;
        this.y = 60;
        this.width = 200;
        this.height = 60;
    }


}