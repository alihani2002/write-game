var array = ["ali","ahmed","batoot","yousef","saad","husian","mohamed","eldeep","emam",
"salma","hannen","aya","eslam","mandoh","samir","betso","mosimani","hamada","tasnim","yara",
"osama","mahmoud","omar","amr","nariman","good", "bad","nice", "rocket","information","system",
"instractor","function","methods","string","individul","error"];
var removebtn = document.getElementById("btn");
var removeTxt = document.getElementById("txt");
var displayTextArea = document.getElementById("usr");
var displayScore = document.getElementById("score");
var displaytime = document.getElementById("Time");
var randomName = document.getElementById("raname");
var showName = document.querySelector(".form-control");
var myselect = document.getElementById("mySelect");
var again = document.getElementById("try");
var btnTry = document.getElementById("btntry");
var EndScore = document.getElementById("endScore");
var selectVal = document.getElementById("mySelect").value;
var container = document.getElementById("container");
var mainNav = document.getElementById("mainNav");
var i = 0;

//////////////////////////////// timer of the game ///////////////////////////////////////////////
const Time = () => {
    let timeleft = 30;
    selectVal = document.getElementById("mySelect").value;
    if (selectVal == 1) {
        timeleft = 60 ;
    }
    else if (selectVal == 2) {
        timeleft = 50 ;
    }
    else if (selectVal == 3) {
        timeleft = 40 ;
    }
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){  
    document.getElementById("numtime").innerHTML = "Time out.";
    clearInterval(downloadTimer);
    displayTextArea.remove();
    randomName.remove();
    again.style.display="flex";
    btnTry.style.display="flex";  
    displayScore.remove();
    displaytime.remove();
    EndScore.innerHTML = " Your final score is : ( " + (i-1) +" )";
    EndScore.style.display="flex";
    }
    
    else {
    document.getElementById("numtime").innerHTML = timeleft + " sec";
    }
    timeleft -= 1;
}, 1000);
};


///////////////////////// function to save data of select box  ///////////////////////////
const LocalStorage = () => {

    if( myselect.value== 1 ){
        localStorage.level = 1;
        selectbox();
    }
    if(myselect.value== 2 ){
        localStorage.level = 2;
        selectbox();
    }
    if( myselect.value== 3 ){
        localStorage.level = 3;
        selectbox();
    }

};

const selectbox = () => {

    if ( Number(localStorage.level) == 1) {
        myselect.value =1; 
        container.style.backgroundImage = "linear-gradient(to left, rgba(127, 249, 149, 0), rgb(121, 121, 121)) ";
    }
    else if ( Number(localStorage.level) == 2) {
    
        myselect.value =2; 
        container.style.backgroundImage = "linear-gradient(to left, rgb(8 227 48 / 0%), rgb(23 217 156))";
    }
    else if ( Number(localStorage.level) == 3) {
        
        myselect.value =3; 
        container.style.backgroundImage = "linear-gradient(to left, rgba(127, 249, 149, 0), rgb(208 62 0)) ";
    }

};

selectbox();


/////////////////////////////////////  function to remove methods and show   ////////////////////////////////////////////
const removeBtn = () => {
    
    displayTextArea.focus();
    Time();
    removebtn.remove();
    removeTxt.remove();
    myselect.remove();

displayTextArea.style.display="flex";
displayScore.style.display="flex";
displaytime.style.display="flex";
randomName.style.display="flex";

    startPlay();

};

const startPlay = () => {

        Genrate();
        
        
        if ( displayTextArea.value == randomtxt ) {
            startPlay();
            }
    Score();
    
    
};



const test = () => {

    if(displayTextArea.value == randomtxt){
        startPlay();
    }
};

function Genrate(){

    randomtxt =  array[Math.floor(Math.random()*array.length)];
    document.getElementById("raname").innerHTML= randomtxt ;
    let wordIndex = array.indexOf(randomtxt);
    displayTextArea.value = "";
    array.splice(wordIndex,1);

}

const Score = () => {

    displayScore.innerHTML = " Score : &nbsp; " + i ;
    i++;
};
