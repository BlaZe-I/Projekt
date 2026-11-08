class World {

    character = new Character();
    enemis = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }







    draw() {
this.ctx.drawImage(this.character.img, this.character, this.character.y, 100, 100);
    }
}