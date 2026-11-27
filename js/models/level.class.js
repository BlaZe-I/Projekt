class Level{
    enemis;
    clouds;
    backgroundObjects;
    level_end_x = 1600;

    constructor(enemis, clouds,backgroundObjects){
        this.enemis = enemis;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}