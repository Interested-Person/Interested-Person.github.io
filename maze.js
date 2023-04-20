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
        if(this.x>mouse.x){
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
        }
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
var n=370;
var createObstacle={
    x:function(){
        return Math.floor((Math.random()*(690-25))+50)
    },
    y:function(){
        return Math.floor((Math.random()*(690)))
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
//change made




