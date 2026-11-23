let canvas;


let world;
let keyboard = new Keyboard();











function init(){
 canvas = document.getElementById('canvas');
 world = new World(canvas, keyboard);


 ctx =  canvas.getContext('2d');


 console.log('My Charcter is', world.character);
 

}

window.addEventListener("keydown", (event) =>{
    if(event.keycode == 68){
        keyboard.RIGHT = true;
    }
        if(event.keycode == 65){
        keyboard.LEFT = true;
    }
            if(event.keycode == 83){
        keyboard.DOWN = true;
    }
            if(event.keycode == 87){
        keyboard.UP = true;
    }
            if(event.keycode == 32){
        keyboard.SPACE = true;
    }
console.log(event);


});

window.addEventListener("keyup", (event) =>{
    if(event.keycode == 68){
        keyboard.RIGHT = false;
    }
        if(event.keycode == 65){
        keyboard.LEFT = false;
    }
            if(event.keycode == 83){
        keyboard.DOWN = false;
    }
            if(event.keycode == 87){
        keyboard.UP = false;
    }
            if(event.keycode == 32){
        keyboard.SPACE = false;
    }


});