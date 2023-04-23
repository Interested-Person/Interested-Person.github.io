

//SOUND EFFECTS
var sfx={
    playerDeath:new Audio("playerDeath.mp3"),
    enemyDeath: new Audio("enemyDeath.mp3"),
    bullet: new Audio("bullet.mp3"),
    thunder: new Audio("_assets_audio_Thunder1.mp3"),
    bgmusic: new Audio("northern-ideas-144137.mp3"),
};
sfx.bullet.volume=0.1;

sfx.bgmusic.volume=0.4;
sfx.enemyDeath.volume=0.1;

//CANVAS
const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth; //1479
canvas.height=window.innerHeight-96 //650
const c=canvas.getContext("2d");

//GAME VARIABLES
var gameEnd=false;

//GAME OBJECTS
var mouse = {
    x: 0,
    y: 0,
}
var player={
    //variables
    x:700,
    y:300,
    speed:3,
    speed2:speed/1.414,//for situations when two keys are being pressed simultaneously
    rad:10,
    color:"blue",
    rightKey:false,
    leftKey:false,
    upKey:false,
    downKey:false,
    bulletx:0,
    bullety:0,
    
    //functions
    moveRight:function(){
        this.x+=this.speed;
    },
    moveLeft:function(){
        this.x-=this.speed;
    },
    moveUp:function(){
        this.y-=this.speed;
    },
    moveDown:function(){
        this.y+=this.speed;
    },
    move:function(){
        if(this.upKey){
            this.moveUp();
        }
        if(this.downKey){
            this.moveDown();
        }
        if(this.leftKey){
            this.moveLeft();
        }
        if(this.rightKey){
            this.moveRight();
        }
        
    },
    draw:function(){
        c.beginPath();
        c.arc(this.x,this.y,this.rad,0,Math.PI*2);
        c.fillStyle=this.color;
        c.fill();
        this.aim();
    },
    wallCollision: function(){
        //right wall
        if(this.x+this.rad>canvas.width){
            sfx.playerDeath.play();
            sfx.thunder.play();
            gameEnd=true; 
        }
        //left wall
        if(this.x-this.rad<0){
            sfx.playerDeath.play();
            sfx.thunder.play();
            gameEnd=true;
        }
        //lower wall
        if(this.y+this.rad>canvas.height){
            sfx.playerDeath.play();
            sfx.thunder.play();
            gameEnd=true;
        }
        //upper wall
        if(this.y-this.rad<0){
            sfx.playerDeath.play();
            sfx.thunder.play();
            gameEnd=true;
        }
    },
    aim:function(){
        c.beginPath();
        c.moveTo(this.x,this.y);

        var x=1;
        
        
        var dx=this.x-mouse.x;
        var absDX=Math.abs(dx);

        var dy=this.y-mouse.y;
        var absDY=Math.abs(dy);

        var total=absDX+absDY;
        
        var speedX=1.0*(absDX/total);
        if(mouse.x>this.x){
            speedX*=-1;
        }
        var speedY=1.0*(absDY/total);
        if(mouse.y>this.y){
            speedY*=-1;
        }
        var a=this.x, b=this.y;

        while(true){
            a+=-1*speed(speedX);
            b+=-1*speed(speedY);
            if(a>canvas.width || a<0){
                break;
            }
            else if(b>canvas.height || b<0){
                break;
            }
            c.lineTo(a,b);
            x++;
            if(x>10000){
                break;
            }
        }
        this.bulletx=a;
        this.bullety=b;
        c.strokeStyle=this.color;
        c.stroke();
        
    },
    shoot:function(){
        bulletArr.push(new Bullet(this.x,this.y,this.bulletx,this.bullety,this.color));
    },
}
function Bullet(x,y,destinationX,destinationY,color){
    //variables

    this.rad=3;
    this.color=color;
    if(this.color==player.color){
        this.speed=10;
    }
    else{
        this.speed=5;
    }


    this.enemyDistance=1000;
    this.playerDistance=1000;
    this.x=x;
    this.y=y;
    this.destinationX=destinationX;
    this.destinationY=destinationY;

    

    var dx=this.x-destinationX;
    var absDX=Math.abs(dx);

    var dy=this.y-destinationY;
    var absDY=Math.abs(dy);
    
    var total=absDX+absDY;
        
    this.vx=this.speed*(absDX/total);
    if(destinationX>this.x){
        this.vx*=-1;
    }
    this.vy=this.speed*(absDY/total);
    if(destinationY>this.y){
        this.vy*=-1;
    }

    
    
    
    //functions
    this.move=function(){
        this.x-=speed(this.vx);
        this.y-=speed(this.vy);
        
        
    };
    this.draw=function(){
        c.beginPath();
        c.fillStyle=this.color;
        c.arc(this.x,this.y,this.rad,0,Math.PI*2);
        c.fill();
        if(this.color!=player.color){
            this.killPlayer();
        }
        else{
            this.killEnemies();
        }

    };
    this.killPlayer=function(){
        var dx=Math.abs(this.x-player.x);
        var dy=Math.abs(this.y-player.y);
        var buffer=1;
        if(dx+buffer<player.rad+this.rad && dy+buffer<player.rad+this.rad){
            sfx.playerDeath.play();
            sfx.thunder.play();
            gameEnd=true;
        }
    };
    this.killEnemies=function(){
        for(var i=0;i<enemyArr.length;i++){ 
            if(enemyArr[i]!=undefined){
            var dx=Math.abs(enemyArr[i].x-this.x);
            var dy=Math.abs(enemyArr[i].y-this.y);
            var buffer=1;
            if(dx+buffer<enemyArr[i].rad+this.rad && dy+buffer<enemyArr[i].rad+this.rad){
                sfx.enemyDeath.play();
                delete enemyArr[i];
            }
            }
        }
    };
    

}
var bulletArr=[];


function Enemy(){
    this.ignore=randomBetween(1,4);
    //varibales
    this.speed=1;
    this.color="red";
    this.rad=10;
    this.bulletx=undefined;
    this.bullety=undefined;;

    if(this.ignore==1){
        this.x=randomBetween(0,75);
        this.y=randomBetween(0,75);
    }
    else if(this.ignore==2){
        this.x=randomBetween(canvas.width-75,canvas.width);
        this.y=randomBetween(canvas.height-75,canvas.height);
    }
    else if(this.ignore==3){
        this.x=randomBetween(0,75);
        this.y=randomBetween(canvas.height-75,canvas.height);
    }
    else if(this.ignore==4){
        this.x=randomBetween(canvas.width-75,canvas.width);
        this.y=randomBetween(0,75);

    }
    //functions
    this.move=function(){
        var err=randomBetween(0,9);
        
        if(err<8){
            if(this.x>player.x){
                this.x-=speed(this.speed)
            }
            else{
                this.x+=speed(this.speed)
            }
        }
        else{
            if(this.x>player.x){
                this.x+=speed(this.speed)
            }
            else{
                this.x-=speed(this.speed)
            }
        }

        if(err<7){
            if(this.y>player.y){
                this.y-=speed(this.speed)
            }
            else{
                this.y+=speed(this.speed)
            }
        }
        else{
            if(this.y>player.y){
                this.y+=speed(this.speed)
            }
            else{
                this.y-=speed(this.speed)
            }
        }
    }
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.rad,0,Math.PI*2);
        c.fillStyle=this.color;
        c.fill();
    }
    this.aim=function(){
        c.beginPath();
        c.moveTo(this.x,this.y);

        var x=1;
        
        
        var dx=this.x-player.x;
        var absDX=Math.abs(dx);

        var dy=this.y-player.y;
        var absDY=Math.abs(dy);

        var total=absDX+absDY;
        
        var speedX=1.0*(absDX/total);
        if(player.x>this.x){
            speedX*=-1;
        }
        var speedY=1.0*(absDY/total);
        if(player.y>this.y){
            speedY*=-1;
        }
        var a=this.x, b=this.y;

        while(true){
            a+=-1*speed(speedX);
            b+=-1*speed(speedY);
            if(a>canvas.width || a<0){
                break;
            }
            else if(b>canvas.height || b<0){
                break;
            }
            c.lineTo(a,b);
            x++;
            if(x>10000){
                break;
            }
        }
        this.bulletx=a+randomBetween(-5,5);
        this.bullety=b+randomBetween(-5,5)
        c.strokeStyle=this.color;
        //c.stroke();
        
    };
    this.shoot=function(){
        if(speed(0.005)==1){
        bulletArr.push(new Bullet(this.x,this.y,this.bulletx,this.bullety,this.color));
    }
    };
}
var enemyArr=[];
var n=1;




//EVENT LISTENERS
canvas.addEventListener("mousemove",function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
})
window.addEventListener("keydown",function(event){
    var key = event.key;
    console.log(key);
    if(key=="ArrowUp" || key=="w"){
        player.upKey=true;
    }
    else if(key=="ArrowDown" || key=="s"){
        player.downKey=true;
    }
    else if(key=="ArrowLeft" || key=="a"){
        player.leftKey=true;
    }
    else if(key=="ArrowRight" ||key=="d"){
        player.rightKey=true;
    }
})
window.addEventListener("keyup",function(event){
    var key=event.key;
    if(key=="ArrowUp" || key=="w"){
        player.upKey=false;
    }
    else if(key=="ArrowDown"|| key=="s"){
        player.downKey=false;
    }
    else if(key=="ArrowLeft"|| key=="a"){
        player.leftKey=false;
    }
    else if(key=="ArrowRight"||key=="d"){
        player.rightKey=false;
    }
})
canvas.addEventListener("click", function(e){
    player.shoot();
    sfx.bullet.play();
})


var time=document.getElementById("time");
var t=60*60;




//GAME LOOP
function gameLoop() {
    t--;
    time.innerText=Math.ceil(t/60)+"s  ";


    clearCanvas();


    player.move();
    player.wallCollision();
    player.draw();

    n++; 
    if(n%60*5==0){
        enemyArr.push(new Enemy);
    }
    for(var i=0; i<enemyArr.length;i++){
        if(enemyArr[i]!=undefined){
        enemyArr[i].move();
        enemyArr[i].aim();
        enemyArr[i].shoot();
        enemyArr[i].draw();}
    }

    for(var i=0; i<bulletArr.length;i++){
        if(bulletArr[i]!=undefined){
        bulletArr[i].move();
        bulletArr[i].draw();}
    }

    
    

    if(gameEnd){
        sfx.bgmusic.pause();
        clearCanvas();
        canvas.style.backgroundColor = "red";
        return;
    }
    if(t<=0){
        sfx.bgmusic.pause();
        clearCanvas();
        canvas.style.backgroundColor = "green";
        return;

    }
	window.requestAnimationFrame(gameLoop);
    
}
//gameLoop();

//FUNCTIONS
function clearCanvas(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}
function speed(x){
    function testProbability(probability) {
        if (Math.random() < probability) {
          return 1;
        } else {
          return 0;
        }
    }
    var speedInt=Math.floor(x);
    var speedDouble=x-speedInt;
    return speedInt+testProbability(speedDouble);
}

function startGame(){
    canvas.style.backgroundColor = "black";

    player.x=700;
    player.y=300;
    t=60*60;
    
    gameEnd=false;
    bulletArr=[];
    enemyArr=[];
    
    gameLoop();
}
function reloadPage() {
    location.reload();
}
function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  

