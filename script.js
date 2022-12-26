let buttonsContainer = document.querySelector(".buttons")
let prviBroj = ""
let drugiBroj = null
let displayResult = 0
let brojacKlika = 0
let operator = ""
let zamjenskiOperator = ""

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
            button.classList.add("lightgray")
            button.addEventListener("click", function(){
            document.getElementById("result-display").innerHTML = "0";
            prviBroj = ""
            displayResult = 0
            drugiBroj = 0
            brojacKlika = 0
            operator = ""
            zamjenskiOperator = ""
            });
            break;
        case 1:
            button.textContent="+/-";
            button.classList.add("lightgray")
            
            break;
        case 2:
            button.textContent="%";
            button.classList.add("lightgray")
            break;
        case 3:
            button.textContent="÷";
            button.style.fontSize="55px";
            button.classList.add("orange")
            button.classList.add("proba")
            button.classList.add("divide")
            break;
        case 4:
            button.textContent="7";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "7"
              });
            break;
        case 5:
            button.textContent="8";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "8"
              });
            break;    
        case 6:
            button.textContent="9";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "9"
              });
            break; 
        case 7:
            button.textContent="x";
            button.classList.add("orange")
            button.classList.add("multiply")
            button.classList.add("proba")
            break; 
        case 8:
            button.textContent="4";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "4"
              });
            break;      
        case 9:
            button.textContent="5";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "5"
              });
            break;
        case 10:
            button.textContent="6";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "6"
              });
            break;
        case 11:
            button.textContent="-";
            button.classList.add("orange")
            button.style.fontSize="70px";
            button.classList.add("subtract")
            button.classList.add("proba")
            break;
        case 12:
            button.textContent="1";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "1"
              });
            break;
        case 13:
            button.textContent="2";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "2"
              });
            break;
        case 14:
            button.textContent="3";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "3"
              });
            break;
        case 15:
            button.textContent="+";
            button.classList.add("orange")
            button.setAttribute("id", "plus");
            button.classList.add("add")
            button.classList.add("proba")
            break;
        case 16:
            button.textContent="0 nastavak nakon +";
            button.style.fontSize="30px";
            button.classList.add("number")
            button.style.justifyContent="start"
            button.style.paddingLeft="20px";
            button.addEventListener("click", function(){
                prviBroj = prviBroj + "0"
              });
            break;
        case 17:
            button.textContent=",";
            button.classList.add("number")
            button.addEventListener("click", function(){
                prviBroj = prviBroj + ","
              });
            break;

        case 18:
            button.textContent="=";
            button.classList.add("orange")
            button.classList.add("jednako")
            break;
    }
}

let brojeviLista = document.querySelectorAll('.number');
brojeviLista.forEach(div => {  
    div.addEventListener("click", function(){
    document.getElementById("result-display").innerHTML = prviBroj;
});
});
 
let buttonOperator = document.querySelectorAll(".orange");
buttonOperator.forEach(div => {  
    div.addEventListener("click", function(){
        if(div.classList.contains("add")){
            operator = "+"
        }else if(div.classList.contains("subtract")){
            operator = "-"
        }else if(div.classList.contains("multiply")){
            operator = "*"
        }else if(div.classList.contains("divide")){
            operator = "/"
        }
    });
});

let sabiranje = document.querySelectorAll(".proba")
sabiranje.forEach(sabiranjee => {
sabiranjee.addEventListener("click", function(){
    if(prviBroj != "" && brojacKlika < 1){
        console.log("ovo je slucaj kada se prvi put unosi plus ili resetuje rezultat") 
        // ovo je slucaj kada se kucaju ponovo dva broja za sabiranje, ne obazirajuci se na rezultat nakon "="
        zamjenskiOperator = operator
        displayResult = 0
        drugiBroj = parseInt(prviBroj)
        prviBroj = ""
        brojacKlika += 1
    }else if(prviBroj == ""){
        console.log("ovo je slucaj klada se nastavlja sabiranje sa dobijenim rezultatom nakon znaka jednako") 
        // ovo je slucaj kada se nastavlja sabiranje sa dobijenim rezultatom nakon "="
        zamjenskiOperator = operator
        prviBroj = displayResult
        drugiBroj = parseInt(prviBroj)
        prviBroj = ""
        brojacKlika += 1
    }else if(brojacKlika === 1){
        console.log("ovo je slucaj kada 2 puta zaredom unesen znak operatora") 
        if(operator === "+" || operator === "*"){
            if(operator != zamjenskiOperator){
                displayResult = operate(drugiBroj, parseInt(prviBroj), zamjenskiOperator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis   
            }else{
                displayResult = operate(drugiBroj, parseInt(prviBroj), operator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis
            }
        zamjenskiOperator = operator
        }else if(operator === "-" || operator === "/"){
            if(operator != zamjenskiOperator){
                displayResult = operate(drugiBroj, parseInt(prviBroj), zamjenskiOperator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis   
            }else{
                displayResult = operate(drugiBroj, parseInt(prviBroj), operator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis
            }
        zamjenskiOperator = operator
        }
        prviBroj = ""
        brojacKlika += 1
    }else if(brojacKlika >= 2){
        // // ovo je slucaj kada je vise od 2 puta zaredom unesen "+"
        console.log("ovo je slucaj kada je vise od 2 puta zaredom unesen znak operatora") 
        document.getElementById("result-display").innerHTML = ""
        drugiBroj = parseInt(prviBroj)
        if(operator === "+" || operator === "*"){
            if(operator != zamjenskiOperator){
                
                displayResult = operate(displayResult, drugiBroj, zamjenskiOperator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis
            }else{
                displayResult = operate(displayResult, drugiBroj, operator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis
            }
            zamjenskiOperator = operator
        }else if(operator === "-" || operator === "/"){
            if(operator != zamjenskiOperator){ 
                displayResult = operate(displayResult, drugiBroj, zamjenskiOperator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis  
            }else{
                displayResult = operate(displayResult, drugiBroj, operator)
                let ispis = displayResult.toString()
                document.getElementById("result-display").innerHTML = ispis
            }
            zamjenskiOperator = operator
        }
        prviBroj = ""
    }
    
});
})

let jednako = document.querySelector(".jednako")
jednako.addEventListener("click", function(){
    if (operator === "+" || operator === "*"){
        if (displayResult === 0){
            // ovo je slucaj kada je ponisten dobijeni rezultat i ponovno uneseni brojevi ili tek uneseni
             displayResult = operate(drugiBroj, parseInt(prviBroj), operator)
        }else{
            //ovo je slucaj kada smo dobili rezultat kucanjem operatora nekoliko puta 
            displayResult = operate(displayResult, parseInt(prviBroj), operator)
    }
    }else if(operator === "-" || operator === "/"){
        if (displayResult === 0){
            displayResult = operate(drugiBroj, parseInt(prviBroj), operator)
        }else{
            displayResult = operate(displayResult, parseInt(prviBroj), operator)
        }
    }
    let ispis = displayResult.toString()
    document.getElementById("result-display").innerHTML = ispis
    brojacKlika = 0
    prviBroj = ""
});

function operate(x, y, op){
    if(op === "-"){
        return x - y
    }else if(op === "+"){
        return x + y
    }else if(op === "*"){
        return x * y
    }else if(op === "/"){
        if(y === 0){
            return "fuck off"
        }else{
            return x / y;
        }
    }
}