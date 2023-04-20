//initialise canvas
const canvas=document.getElementById('canvas');
canvas.width=700;
canvas.height=700;
const c=canvas.getContext('2d');
const body=document.getElementById('body');
var button=document.getElementById('button');

//game variables
var gameEnd=false;

//game objects
var mouse={
    //variables
    x:undefined,
    y:undefined,
}
var player={
    //variables
    x:10,
    y:690,
    vx:1,
    vy:-1,
    rad:10,
    color:"black",
    //functions
    draw:function(){
        c.beginPath();
        c.fillStyle=this.color;
        c.arc(this.x,this.y,this.rad,0,Math.PI*2);
        c.fill();
    },
    move:function(){
        if(mouse.x!=undefined)
        {this.accelerate();this.x+=this.vx;
            this.y+=this.vy;}
        
    },
    accelerate:function(){
        var dx=this.x-mouse.x;
        //console.log("dx="+dx)
        var absDX=Math.abs(dx);
        var dy=this.y-mouse.y;
        //console.log("dy="+dy)
        var absDY=Math.abs(dy);
        var total=absDX+absDY;
        //console.log("total="+total)
        var speedX=2.0*(absDX/total);
        //console.log("speedX="+speedX)
        var speedY=2.0*(absDY/total);
        //console.log("speedY="+speedY)
        if(dx>=0){
            this.vx=-1*speed(speedX);
            console.log(speed(speedX));
        }
        else{
            this.vx=speed(speedX);
            console.log(-1*speed(speedX));
        }

        if(dy>0){
            this.vy=-1*speed(speedY);
            console.log(speed(speedY));
        }
        else{
            this.vy=speed(speedY);
            console.log(-1*speed(speedY));
        }

        /*if(this.x>mouse.x){
            this.vx=-1;
        }
        else{
            this.vx=1;
        }

        if(this.y>mouse.y){
            this.vy=-1;
        }
        else{
            this.vy=1;
        }*/
    },
    bounce:function(){
        //WALLS
        //right wall
        if(this.x+this.rad>(canvas.width)){
            this.vx=0;
            this.x=canvas.width-this.rad;
            canvas.style.backgroundColor="green";
            body.style.backgroundColor="green";
            
            gameEnd=true;
            
        }
        //left wall
        if(this.x-this.rad<(0)){
            this.vx=0;
            this.x=0+this.rad;
        }

        //upper wall
        if(this.y-this.rad<(0)){
            this.vy=0;
            this.y=0+this.rad;
        }
        //lower wall
        if(this.y+this.rad>(canvas.height)){
            this.vy=0;
            this.y=canvas.height-this.rad;
        }
    },
    detectCollision:function(x,y,height,width){
        if(this.x+this.rad>x+2 && this.x-this.rad<x+height-2  && this.y+this.rad>y+2 && this.y-this.rad<y+width-2){
           return true;           
        }
    },

}

var arrObstacle=[];
var n=300;
var createObstacle={
    x:function(){
        return Math.floor((Math.random()*(690-50))+100)
    },
    y:function(){
        return Math.floor((Math.random()*(690)))-7
    },
    width:function(){
        return Math.floor(Math.random() * 4) + 4; 
    },
    height:function(){
        return Math.floor(Math.random() * 21) + 10;
    }
}
function Obstacle(){
    this.x=createObstacle.x();
    this.y=createObstacle.y();
    this.height=createObstacle.height();
    this.width=createObstacle.width();
    this.color="red";
    this.draw=function(){
        c.beginPath();
        c.fillStyle=this.color;
        c.rect(this.x,this.y,this.width,this.height);
        c.fill();
    };

}
for(var i=0; i<n; i++){
    arrObstacle.push(new Obstacle);
}

//safe path
function Safepath(){
    
}

//EVENTS


// main game loop
function gameLoop() {
    clearCanvas();


    if(gameEnd){
        button.style.visibility="hidden";
        return;
    }

    //player
    player.move();
    player.bounce();
    player.draw();

    //obstacles
    for(var i=0; i<arrObstacle.length;i++){
        arrObstacle[i].draw();
        if(player.detectCollision(arrObstacle[i].x,arrObstacle[i].y,arrObstacle[i].width,arrObstacle[i].height)){
            clearCanvas();
            body.style.backgroundColor="#FF7F7F";
            canvas.style.borderColor="#FF7F7F";
            canvas.style.backgroundColor="#FF7F7F";
            button.style.visibility="hidden";
            return;
        }
    }

	window.requestAnimationFrame(gameLoop);
    
}
gameLoop();
function startGame(){
    canvas.addEventListener("mousemove",function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        console.log(mouse);
    })
}


//FUNCTIONS
function clearCanvas(){
    c.clearRect(0,0,canvas.width,canvas.height);

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
    var ans= speedInt+testProbability(speedDouble);
    if(isNaN(ans)){
        return 0;
    }
    else{
        return ans;
    }
}
//change made




