class Coin extends MovableObject {
    width = 100;
    height = 100;
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.loadImages(this.IMAGES_COINS);
        this.x = 500 + Math.random() * 4000;
        this.y = 70 + Math.random() * 70;
        this.animateCoins();
    }

    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 200);
    }
}