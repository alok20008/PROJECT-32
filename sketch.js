const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    noStroke();
    textSize(35)
    fill("white")
    //text("Score  " + score, width-300, 50)

    Engine.update(engine);

    sunrise1.png.display    
    sunrise2.png.display
    sunrise3.png.display
    sunrise4.png.display
    sunrise5.png.display
    sunrise6.png.display
    sunset7.png.display
    sunset8.png.display
    sunset9.png.display
    sunset10.png.display
    sunset11.png.display
    sunset12.png.display
    
    // write code to display time in correct format here
    var hour = datetime.slice(11,13);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");

    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=05 ){
      bg = "sunrise1.png";
    }else if(hour>=05 && hour<=06 ){
      bg = "sunrise2.png";  
    }else if(hour>=06 && hour<=07 ){
        bg = "sunrise3.png";
    }else if(hour>=07 && hour<=08){
        bg = "sunrise4.png";
    }else if(hour>=08 && hour<=09){
        bg = "sunrise5.png";
    }else if(hour<=09 && hour<=10){
        bg = "sunrise5.png";
    }else if(hour>=10 && hour<=11){
        bg = "sunrise6.png";
    }else if(hour>=11 && hour<=12){
        bg = "sunrise6.png";
    }else if (hour>=12 && hour<=13){
        bg = "sunset7.png";
    }else if(hour>=13 && hour<=14){
        bg = "sunset8.png";
    }else if(hour>=14 && hour<=15){
        bg = "sunset8.png";
    }else if(hour>=15 && hour<=16){
        bg = "sunset9.png";
    }else if(hour>=16 && hour<=17){
        bg = "sunset9.png";
    }else if(hour>=17 && hour<=18){
        bg = "sunset10.png";
    }else if(hour>=18 && hour<=19){
        bg = "sunset10.png";
    }else if(hour>=19 && hour<=20){
        bg = "sunset11.png";
    }else if(hour>=20 && hour<=21){
        bg = "sunset11.png";
    }else if(hour>=21 && hour<=22){
        bg = "sunset11.png";
    }else if(hour>=22 && hour<=23){
        bg = "sunset12.png";
    }else if(hour>=23 && hour==0){
        bg = "sunset12.png";
    }

        //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
