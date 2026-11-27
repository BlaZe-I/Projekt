class MoveableObject {
    x = 100;
    y = 250;
    img;
    height = 100;
    width = 250;
speed = 0.15;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr) {
        arr.forEach( (path) => {

        
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
    });
}

moveRight() {

}




moveLeft() {
                setInterval(  () =>{
            this.x -= 1;
        },5000 / 120 );
    
}
}