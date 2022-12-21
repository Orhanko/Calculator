let buttonsContainer = document.querySelector(".buttons")
for(let x = 0 ; x < 19 ; x++){
    let button = document.createElement("div")
    button.classList.add('button');
    buttonsContainer.appendChild(button);
    if(x===16){
        button.style.gridColumn= "1 / 3";
    }
    switch(x){
        case 0:
            button.textContent="AC";
            button.classList.add("lightgrayButton")
            break;
        case 1:
            button.textContent="+/-";
            button.classList.add("lightgrayButton")
            break;
        case 2:
            button.textContent="%";
            button.classList.add("lightgrayButton")
            break;
        case 3:
            button.textContent="/";
            button.classList.add("orangeButton")
            break;
        case 4:
            button.textContent="7";
            button.classList.add("numberButton")
            break;
        case 5:
            button.textContent="8";
            button.classList.add("numberButton")
            break;    
        case 6:
            button.textContent="9";
            button.classList.add("numberButton")
            break; 
        case 7:
            button.textContent="x";
            button.classList.add("orangeButton")
            break; 
        case 8:
            button.textContent="4";
            button.classList.add("numberButton")
            break;      
        case 9:
            button.textContent="5";
            button.classList.add("numberButton")
            break;
        case 10:
            button.textContent="6";
            button.classList.add("numberButton")
            break;
        case 11:
            button.textContent="-";
            button.classList.add("orangeButton")
            button.style.fontSize="70px";
            break;
        case 12:
            button.textContent="1";
            button.classList.add("numberButton")
            break;
        case 13:
            button.textContent="2";
            button.classList.add("numberButton")
            break;
        case 14:
            button.textContent="3";
            button.classList.add("numberButton")
            break;
        case 15:
            button.textContent="+";
            button.classList.add("orangeButton")
            break;
        case 16:
            button.textContent="0";
            button.classList.add("numberButton")
            button.style.justifyContent="start"
            button.style.paddingLeft="20px";
            break;
        case 17:
            button.textContent=",";
            button.classList.add("numberButton")
            break;
        case 18:
            button.textContent="=";
            button.classList.add("orangeButton")
            break;
    }
}


