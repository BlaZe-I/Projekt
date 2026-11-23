class Character extends MoveableObject {
speed = 10;
    y = 200;
    IMAGES_Walking = [
        'img_pollo_locco/img/2_character_pepe/2_walk/W-21.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-22.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-23.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-24.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-25.png',
        'img_pollo_locco/img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    currentImage = 0;
    constructor() {
        super().loadImage('img_pollo_locco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_Walking);

        this.animate();

    }

    animate() {
                setInterval(() => {
if (this.world.keyboard.RIGHT){
    this.x += this.speed;
}
            },  1000 / 60 );
    

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {

                
                let i = this.currentImage % this.IMAGES_Walking.length;
                let path = this.IMAGES_Walking[i];
                this.img = this.imgCache[path];
                this.currentImage++;
            }
        }, 100);
    }

    jump() {


    }



}