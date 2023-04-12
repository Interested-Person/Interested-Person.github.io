//CANVAS
//canvas elements
const canvas=document.querySelector('canvas');
const c=canvas.getContext('2d');

c.imageSmoothingEnabled=false
//canvas styles
canvas.width=255*6;
canvas.height=255*3;

//VARIABLES
var mouseDraw=false;
var path=false;


//OBJECTS
//mouse
var mouse={
    x:undefined,
    y:undefined,
    draw:function(){
        c.lineTo(this.x,this.y);
        c.stroke();
    }
}

//EVENT LISTENERS
window.addEventListener('mousemove',function(e){
    mouse.x=e.x;
    mouse.y=e.y;
    console.log(mouse);
    if(mouseDraw){
        if(path){
            path=false;
            c.beginPath();
            c.moveTo(mouse.x,mouse.y);
        }
        
        mouse.draw();
    }
})
canvas.onclick=function(){
    if(mouseDraw){
        mouseDraw=false;
        path=true;
    }
    else{
        mouseDraw=true;
        
    }
    
}

//FUNCTIONS
function clearCanvas(){
    c.clearRect(0, 0, canvas.width, canvas.height);
}