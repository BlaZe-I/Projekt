class MoveableObject {
    x = 100;
    y = 250;
    img;
    height = 100;
    width = 250;
speed = 0.15;
    imgCache = {};
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr) {
        arr.forEach( path => {

        
        let img = new Image();
        img.src = path;
        this.imgCache[path] = img;
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