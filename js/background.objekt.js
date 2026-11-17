class BackgroundObject extends MoveableObject {


    width = 500;
    height = 800;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}