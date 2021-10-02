const main = document.querySelector(".maincontainer");
const random = document.querySelector("#random");
const eraser = document.querySelector("#erase");
const clear = document.querySelector("#clear");
const gradient = document.querySelector("#gradient")
let usercolor = document.querySelector("#colorpicker");


let currentsize=16;
let mode="userpick";
let color;

clear.onclick= () => actclear;
random.onclick = () => changemode("random");
eraser.onclick= () => changemode("erase");
gradient.onclick= () => changemode("gradient");
usercolor.onchange= (e) => changemode("userpick");
  

function changemode(selectedmode){
    mode=selectedmode;
    alert("changed"+mode);
    changecolor;
}

function actclear(){
    let elements = document.getElementsByClassName("gridcell");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    defaultGrid(currentsize);
}

function defaultGrid(size){
    main.style.setProperty('--grid-rows', size);
    main.style.setProperty('--grid-cols', size);
    for (let x=0;x<size*size;x++){
        let cell = document.createElement("div");
        cell.style.backgroundColor= "#FFFFFF";
        cell.addEventListener("mouseover",changecolor);
        main.appendChild(cell).className="gridcell";
    }
}

function changecolor(e){
    if(mode === "random"){
        let x = Math.floor(Math.random() * 256);
        let y = 100 + Math.floor(Math.random() * 256);
        let z = 50 + Math.floor(Math.random() * 256);
        let  bgColor = "rgb(" + x + "," + y + "," + z + ")";
        e.target.style.backgroundColor= bgColor;
    }
    else if(mode === "gradient"){ 
              
    }
    else if(mode === "erase"){
        e.target.style.backgroundColor="#FFFFFF";
    }

    else if(mode === "userpick"){
        color=usercolor.value;
        e.target.style.backgroundColor=color;
    }
}

defaultGrid(currentsize)
