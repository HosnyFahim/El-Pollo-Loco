class StatusBar extends DrawableObject {
    width = 160;
    height = 40;
    percentage = 100;

    /**
     * It takes a percentage and sets the image to the appropriate image in the imageStatusbar array.
     * @param percentage - The percentage of the bar to fill.
     */
    setPercentage(percentage, object) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveimageIndex(percentage, object)];
        this.img = this.imageCache[path];

    }

    /**
     * If the percentage is 100, return 5. If the percentage is greater than 80, return 4. If the
     * percentage is greater than 60, return 3. If the percentage is greater than 40, return 2. If the
     * percentage is greater than 20, return 1. Otherwise, return 0.
     * @param percentage - The percentage of the progress bar that is filled.
     * @returns the index of the image to be displayed.
     */
    resolveimageIndex(percentage, object) {
        if (percentage == object) {
            return 5;
        } else if (percentage > object/5*4) {
            return 4;
        } else if (percentage > object/5*3) {
            return 3;
        } else if (percentage > object/5*2) {
            return 2;
        } else if (percentage > object/5) {
            return 1;
        } else {
            return 0;
        }
    }
}