const main = document.querySelector(".maincontainer");

function defaultGrid(size){
    main.style.setProperty('--grid-rows', size);
    main.style.setProperty('--grid-cols', size);
    for (let x=0;x<size*size;x++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover",changecolor);
        main.appendChild(cell).className="gridcell";
    }
}

function changecolor(){
    //alert("hi");
    this.style.backgroundColor= "#FFFFFF";
}

defaultGrid(20)