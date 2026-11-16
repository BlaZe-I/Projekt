class World {

    character = new Character();
    enemis = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()];
    backgroundObjects = [
        new BackgroundObject('img_pollo_locco/img/5_background/first_half_background.png')
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }







    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);

        this.addObjectsToMap(this.backgroundObjects);

        this.addObjectsToMap(this.enemis);

        this.addObjectsToMap(this.backgrcloudsundObjects);








        let self = this;

        requestAnimationFrame(function () {
            self.draw();
        }
        )
    };

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);

    }
}