class Chicken extends MoveableObject {

    y = 390;
    height = 70;
    width = 50;
    IMAGES_Walking = [
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'

    ]
    constructor() {
        super().loadImage('img_pollo_locco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_Walking);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random()*0.25;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_Walking.length;
            let path = this.IMAGES_Walking[i];
            this.img = this.imageCache[path];
            this.currentImage++;

        }, 100);
    }




}