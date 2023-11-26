//alert(window.innerWidth+","+window.innerHeight)
//GAME VARIABLES
var s='[ "abase", "abet", "abeyance", "abjure", "abjure", "abut", "abysmal", "accede", "accede", "accolade", "accord", "acme", "acme", "acrimony", "actuate", "adage", "adjure", "admonish", "admonish", "admonish", "admonish", "adverse", "advert", "advocate", "affable", "affect", "afflict", "aggrieve", "aide", "alacrity", "alcove", "allay", "allege", "allege", "ambrosia", "amenable", "amicable", "animus", "anodyne", "anodyne", "aphorism", "aphorism", "aphorism", "apostate", "apostate", "apparent", "appeal", "appease", "append", "appoint", "apposite", "approach", "approach", "apropos", "apt", "aquiline", "aquiline", "aquiline", "aquiline", "aria", "armada", "arrogate", "arrogate", "arrogate", "askance", "asperity", "asperity", "assail", "assay", "assent", "assert", "assert", "assert", "asunder", "atavism", "attitude", "attitude", "attitude", "augury", "august", "auspices", "austere", "automate", "avarice", "aversion", "aversion", "axiom", "badinage", "baleful", "banal", "bandy", "bane", "banter", "bate", "bauble", "beatific", "beguile", "beguile", "belie", "bemuse", "bemused", "bemused", "bent", "bequeath", "beseech", "besiege", "bestow", "betoken", "betoken", "bilious", "blanch", "bland", "blatant", "blighted", "bluster", "boast", "bolt", "bouillon", "brawn", "brooch", "brook", "bucolic", "bullion", "bulwark", "burgeon", "burnish", "buxom", "cabal", "cabal", "cajole", "callous", "cameo", "campaign", "candid", "canon", "cant", "canto", "canto", "caprice", "caprice", "captious", "cardinal", "careen", "carrion", "carrion", "caucus", "cavalier", "cede", "chaff", "chagrin", "chamber", "chary", "chastise", "chastise", "chide", "choleric", "choleric", "choleric", "choleric", "cite", "clad", "clad", "clarion", "cleave", "coast", "coax", "codicil", "cogent", "cognate", "cohere", "cohort", "coiffure", "coiffure", "coiffure", "coiffure", "commit", "compel", "comport", "comport", "conceit", "concept", "concern", "concern", "conduct", "confer", "confer", "congeal", "conjugal", "conjure", "conjure", "conjure", "conjure", "conjure", "consider", "consider", "constant", "constant", "constant", "constant", "construe", "contempt", "contend", "contract", "contrive", "contrive", "contrive", "contrive", "contrive", "convince", "convince", "convince", "court", "cower", "coy", "cozen", "crabbed", "craven", "credence", "credible", "credo", "crevice", "crew", "crone", "cryptic", "cupidity", "dais", "dapper", "dearth", "debacle", "debase", "debase", "debase", "decorum", "decree", "deduce", "deduce", "defray", "deign", "delicacy", "delve", "delve", "delve", "delve", "dense", "depose", "deprave", "deprave", "derelict", "derived", "descry", "despair", "despoil", "device", "devolve", "diadem", "dictum", "didactic", "didactic", "didactic", "didactic", "dingy", "dint", "dint", "dint", "dint", "dint", "discreet", "discreet", "discreet", "discreet", "discreet", "disgorge", "disgorge", "dispatch", "disport", "disport", "disport", "disport", "disport", "distend", "distend", "distend", "divulge", "docile", "dogged", "doggerel", "dormer", "dotage", "dote", "dregs", "dulcet", "dutiful", "dwell", "dwell", "earnest", "ebb", "edict", "edifice", "edifice", "effete", "effete", "effete", "effete", "effete", "ellipsis", "elude", "elysian", "emblazon", "emboss", "embroil", "emend", "emetic", "emetic", "enamor", "enclave", "enclave", "encumber", "endemic", "endow", "endue", "enduring", "enervate", "engage", "enigma", "enjoin", "enjoin", "ensconce", "ensue", "ensue", "ensue", "entreat", "equable", "erode", "errant", "errant", "eschew", "espouse", "espouse", "esteem", "estrange", "eugenic", "euphony", "euphony", "evident", "exalt", "exalt", "excise", "excise", "execrate", "exegesis", "exert", "exertion", "exigency", "exigency", "exigency", "expiate", "expiate", "exploit", "exploit", "exploit", "exploit", "extol", "extort", "extort", "facile", "faction", "factious", "factious", "fad", "fallow", "fancy", "fanfare", "fare", "fathom", "fatuous", "fawning", "fawning", "fervent", "fiasco", "filch", "filch", "filch", "fissure", "fitful", "flag", "flail", "flair", "flay", "flotilla", "flourish", "foil", "foist", "foist", "ford", "forebear", "forebear", "formal", "forsake", "forsake", "foster", "fracas", "fracas", "fraught", "fray", "fresco", "frieze", "frontier", "fructify", "fructify", "fructify", "fructify", "furnish", "gadfly", "gainsay", "gale", "garble", "garish", "gaunt", "gawk", "generate", "genesis", "genesis", "gentry", "gestate", "gibe", "gird", "gist", "glib", "glower", "gouge", "granary", "granary", "grant", "grapple", "gratis", "gravity", "gripe", "grisly", "grove", "grovel", "grudging", "gruel", "gusto", "gusty", "gusty", "haggle", "halcyon", "hale", "halting", "halting", "harry", "headlong", "heed", "heed", "heed", "hew", "heyday", "hireling", "hoary", "homespun", "homily", "hoodwink", "horde", "hubbub", "humble", "humble", "hummock", "hurtle", "hurtle", "hurtle", "ideology", "ideology", "ideology", "ignominy", "ignominy", "imbibe", "immure", "immure", "impart", "impel", "impel", "impel", "impetus", "impiety", "impiety", "impiety", "impiety", "imposed", "imposing", "imposing", "imposing", "imposing", "imposing", "imposing", "imposing", "incisive", "incisive", "inclined", "inclined", "inclined", "inclined", "inclined", "inclined", "inclined", "inclined", "indite", "indite", "infest", "infest", "infest", "infest", "inimical", "inimical", "inimical", "innate", "innate", "innate", "innate", "insist", "inspire", "instance", "instance", "instance", "intend", "intend", "intend", "intend", "intimate", "intrepid", "intrigue", "inured", "inured", "inured", "inured", "irksome", "irksome", "issue", "jet", "jibe", "jocund", "junket", "justify", "keen", "kindle", "knack", "knight", "knoll", "labor", "laggard", "lancet", "languid", "larder", "largesse", "latitude", "league", "level", "levity", "liberal", "liberal", "libretto", "libretto", "libretto", "loath", "lode", "lofty", "lofty", "lout", "luminary", "luminary", "luminary", "madrigal", "madrigal", "majority", "majority", "malaise", "malaise", "malaise", "malice", "malice", "manifest", "manifest", "mannered", "manumit", "maraud", "maraud", "maul", "maxim", "meander", "meander", "meander", "merit", "mettle", "mettle", "mien", "mincing", "minute", "minute", "miserly", "mite", "mode", "modest", "modicum", "monetary", "moot", "morbid", "mordant", "moribund", "mortify", "mote", "mote", "mote", "mundane", "mundane", "muse", "muster", "natty", "nettle", "nexus", "nicety", "nihilist", "nominal", "nominal", "nonplus", "nostrum", "notion", "notion", "novel", "nuance", "obdurate", "obdurate", "obloquy", "obtain", "obtrude", "obtuse", "obviate", "odium", "ominous", "ominous", "onset", "oppress", "oratorio", "ordain", "ornate", "ornate", "ornate", "ornate", "ornate", "pacifist", "pacify", "pacify", "palatial", "pall", "palliate", "pallid", "pallid", "parable", "parable", "parity", "parity", "parry", "parry", "partial", "partial", "partisan", "passage", "passe", "pastoral", "pastoral", "pastoral", "pastoral", "pastoral", "pedantic", "pellucid", "penchant", "penchant", "peon", "peon", "peon", "perish", "permeate", "permeate", "permeate", "permeate", "persist", "persist", "pert", "pert", "pervade", "petulant", "petulant", "petulant", "petulant", "pilfer", "pillage", "pinion", "pious", "pique", "pithy", "placate", "placate", "plead", "plead", "plumb", "plus", "podium", "podium", "polemic", "polemic", "policy", "polity", "pomp", "pomp", "pomp", "practice", "practice", "prattle", "precept", "precept", "precept", "preen", "premise", "premise", "premise", "premise", "proceeds", "proceeds", "proceeds", "project", "project", "project", "project", "project", "property", "property", "property", "property", "property", "property", "provoke", "prowess", "proxy", "prude", "pucker", "puissant", "pummel", "pundit", "purport", "purse", "purvey", "purvey", "quaff", "quagmire", "quail", "quail", "quip", "rail", "raiment", "rakish", "ramify", "rampart", "rancor", "range", "ranging", "rankle", "rapt", "rarefied", "ratify", "ratify", "rave", "ravel", "ravel", "ravel", "rebuke", "rebus", "rebus", "recourse", "recourse", "redolent", "redolent", "redolent", "reflect", "reflect", "reflect", "reflect", "rend", "render", "renegade", "repast", "repeal", "repine", "reprise", "reprise", "resonant", "resource", "resource", "retainer", "retainer", "reticent", "retinue", "retiring", "retort", "retrench", "revelry", "reverie", "reverie", "rhetoric", "rider", "rile", "ripple", "rococo", "roil", "roseate", "rout", "rubric", "rudiment", "ruse", "salient", "sanction", "sate", "satire", "satire", "savant", "scabbard", "scale", "scarce", "scheme", "scheme", "scheme", "scheme", "sedulous", "seemly", "seethe", "seethe", "seethe", "sentient", "sentinel", "sextant", "sherbet", "siege", "simper", "sinecure", "sinuous", "skill", "skittish", "slay", "sleight", "slew", "sluice", "sluice", "sob", "sonorous", "spangle", "spat", "spate", "specious", "spectral", "squalor", "squalor", "staid", "stake", "stanch", "steep", "steep", "stilted", "stint", "stint", "stock", "straight", "stratum", "striate", "striate", "stultify", "stump", "stump", "suavity", "suavity", "suavity", "suavity", "sublime", "subside", "subside", "succor", "suffrage", "sully", "sultry", "sultry", "sultry", "sultry", "surly", "surly", "surly", "swerve", "sybarite", "sybarite", "sybarite", "symmetry", "tarry", "tawdry", "teem", "temper", "temper", "tenable", "tenable", "tenable", "testator", "theory", "thrall", "thrall", "throng", "tide", "toil", "tour", "tout", "tract", "traduce", "traduce", "tread", "tread", "tribunal", "trite", "trite", "troth", "turbid", "tureen", "turgid", "tutelage", "tyro", "ulterior", "ulterior", "ulterior", "ulterior", "ulterior", "uncouth", "unction", "unction", "unction", "unction", "unction", "ungainly", "ungainly", "ungainly", "unseemly", "untoward", "unwonted", "upbraid", "upshot", "urbane", "usurp", "utter", "vacate", "vagary", "vain", "vapid", "vassal", "vat", "vat", "venerate", "venial", "venture", "venture", "venture", "vestige", "vestment", "vex", "vilify", "vintner", "virtuoso", "visage", "viscid", "viscous", "vitiate", "vitiate", "voluble", "waffle", "waive", "wander", "wanton", "warble", "warrant", "wax", "waylay", "weigh", "welt", "wheedle", "whet", "whittle", "whorl", "willful", "wistful", "wizened", "wont", "wraith", "wrangle", "wreak", "wry", "yeoman", "yield", "zealot", "zenith", "zephyr" ]';
var alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
s=JSON.parse(s);

var arr2d=new Array(12);
for(var i=0;i<arr2d.length;i++){
    arr2d[i]=new Array(12);
    for(var j=0;j<arr2d[i].length;j++){
        arr2d[i][j]=false;
    }
}
console.log(arr2d);


//CANVAS
const canvas=document.getElementById("canvas")
const c=canvas.getContext("2d")
const body=document.getElementById("body")

canvas.width=600;
canvas.height=600; 

//html elements
var title=document.querySelector("title");



//GAME OBJECTS
var mouse={
    x:undefined,
    y:undefined,

}





















//FUNCTIONS
function fill(){
    for(var i=0;i<12;i++){
        for(var j=0;j<12;j++){
            if(arr2d[i][j]==false){
                arr2d[i][j]=true;
                drawLetter(alphabets[randomBetween(0,25)].toUpperCase(),j*50,i*50);
            }
        }
    }
}
function drawGrid(){
   
    drawVertical();
    drawHorizontal();

}
function drawVertical(){
    for(var i=0;i<10000;i+=50){
    c.beginPath();
    c.moveTo(i,0);
    c.lineTo(i,canvas.height);
    c.strokeStyle="white";
    c.lineWidth=1;
    c.stroke();
    }
}
function drawHorizontal(){
    for(var i=0;i<10000;i+=50){
    c.beginPath();
    c.moveTo(0,i);
    c.lineTo(canvas.width,i);
    c.strokeStyle="white";
    c.lineWidth=1;
    c.stroke();
    }
}
function drawLetter(letter,x,y){
    c.font = "50px Space Mono, monospace";
    c.fillStyle = "#ffffff83";
    c.fillText(letter, x+7, y+43);
}
function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateGameWords(gameWords){
    for(var i=0; i<5; i++){
        document.getElementById("word"+i).innerHTML=gameWords[i].toUpperCase();
    }
}
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }
    return true;
  }
  function copy2dArray(arr) {
    return arr.map(function(row) {
      return row.slice();
    });
  }

//functions for placing ywords
function getPosition(){
    var position=new Array(2);
    while(true){
        position[0]=randomBetween(0,11);//row
        position[1]=randomBetween(0,11);//column
        
        if(arr2d[position[0]][position[1]]==false){
            //arr2d[position[0]][position[1]]=true;  
            break;
        }
    }
    return position;

}
function place(word){
    var position,x;
    for(var i=0;i<100;i++){
        position=getPosition();
        console.log(position);
        x=copy2dArray(arr2d);
        if(Math.random()>0.5){
            placeHorizontally(word, position);
            console.log("horizontal");
        }
        else{
            placeVertically(word,position); 
            console.log("vertical");
        }
        if(!arraysEqual(x,arr2d)){
            break;
        }
    }    
        


    
}
function placeHorizontally(word,position){
    word=word.toUpperCase();
    var length = word.length;
    console.log("length="+length);
    var direction=0;
    var canBePlaced=true;
    if(position[1]+word.length<=11){
        direction=1;
    }
    else if(position[1]-word.length>=0){
        direction=-1;
    }
    else{
        console.log("nope")
        canBePlaced=false;
        return;
    }
    console.log(direction);

    //check if available
    if(direction==1){
        for(var i=position[1];i<=position[1]+length;i++){
            if(arr2d[position[0]][i]==true){
                canBePlaced=false;
            }
        }
        if(canBePlaced){
            for(var i=position[1];i<position[1]+length;i++){
                arr2d[position[0]][i]=true;
                //drawLetter(word[0],position[0]*50,i*50);
                drawLetter(word[i-position[1]],i*50,position[0]*50);
                
            }
            console.log("yup");
            return;
        }
        else{
            direction=-1;
        }
    }
    if(direction==-1){
        for(var i=position[1];i>=position[1]-length;i--){
            if(arr2d[position[0]][i]==true){
                canBePlaced=false;
            }
        }
        if(canBePlaced){
            for(var i=position[1],x=0;i>position[1]-length;i--,x++){
                arr2d[position[0]][i]=true;
                //drawLetter(word[0],position[0]*50,i*50);
                drawLetter(word[x],i*50,position[0]*50);
                
            }
            console.log("yup");
            return;
        }
    }
    else{
        console.log("oh, no");
        return;
    }
    
}
function placeVertically(word, position) {
    try {
      word = word.toUpperCase();
      var length = word.length;
      console.log("length=" + length);
      var direction = 0;
      var canBePlaced = true;
      if (position[0] + word.length <= 11) {
        direction = 1;
      } else if (position[0] - word.length >= 0) {
        direction = -1;
      } else {
        console.log("nope");
        canBePlaced = false;
        throw new Error();
      }
      console.log(direction);
  
      //check if available
      if (direction == 1) {
        for (var i = position[0]; i <= position[0] + length; i++) {
          if (arr2d[i][position[1]] == true) {
            canBePlaced = false;
          }
        }
        if (canBePlaced) {
          for (var i = position[0]; i < position[0] + length; i++) {
            arr2d[i][position[1]] = true;
            drawLetter(word[i - position[0]], position[1] * 50, i * 50);
          }
          console.log("yup");
          return;
        } else {
          direction = -1;
        }
      }
      if (direction == -1) {
        for (var i = position[0]; i >= position[0] - length; i--) {
          if (arr2d[i][position[1]] == true) {
            canBePlaced = false;
          }
        }
        if (canBePlaced) {
          for (var i = position[0], x = 0; i > position[0] - length; i--, x++) {
            arr2d[i][position[1]] = true;
            drawLetter(word[x], position[1] * 50, i * 50);
          }
          console.log("yup");
          return;
        } else {
          console.log("oh, no");
          throw new Error();
        }
      } else {
        console.log("oh, no");
        throw new Error();
      }
    } catch (e) {
      console.log("Couldn't be placed");
    }
  }
  
  
  




//Event listeners
window.addEventListener("mousemove",function(e){
    mouse.x=e.x;
    mouse.y=e.y;
    title.innerHTML="x:"+mouse.x+", "+"y:"+mouse.y;
})



//GAME
function generatePuzzle(){
   
    var gameWords=[];
    for(var i=0;i<5;i++){
        gameWords.push(s[randomBetween(0,s.length-1)]);
    }
    console.log(gameWords);
    updateGameWords(gameWords);
    for(var i=0;i<gameWords.length;i++){
        place(gameWords[i]);
        //document.write(gameWords[i]+",");
    }
    fill();
    drawGrid();





}
generatePuzzle();












var mouseDraw=false;
var path=false;


//OBJECTS
//mouse
var mouse={
    x:undefined,
    y:undefined,
    draw:function(){
        c.lineTo(this.x,this.y);
        c.strokeStyle="grey";
        c.lineWidth=5;
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
/*canvas.onclick=function(){
    if(mouseDraw){
        mouseDraw=false;
        path=true;
    }
    else{
        mouseDraw=true;
        
    }
    
}*/
canvas.addEventListener("mousedown",function(e){
    if(mouseDraw){
        mouseDraw=false;
        path=true;
    }
    else{
        mouseDraw=true;
        path=true;
    }
})
canvas.addEventListener("mouseup",function(e){
    mouseDraw=false;
    path=true;
})