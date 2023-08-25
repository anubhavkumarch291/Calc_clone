const display=document.getElementById("result");
let bag="";
 function appendToDisplay(value){
    bag=bag+value;
    display.value=bag;
 }
 function clearDisplay(){
    bag="";
    display.value="";
 }
  function calculate(){
    try{
        if(bag==""){
            display.value="";
        }else{
        bag=eval(bag);
        display.value=bag;
        }
    }
    catch(Error){
        display.value="Error";
    }
  }

  document.addEventListener("keydown", (event)=>{
    const key = event.key   // value of key pressed
    if(key>'0'&&key<='9'||key=='.'||key=='/'||key=='*'||key=='-'||key=='+'){
        appendToDisplay(key);
    }else if(key=="Enter"){
        calculate();
    }else if(key=="Backspace"){
        bag=bag.slice(0,-1);
        display.value=bag;
    }else if(key=='c'||key=="C"){
        clearDisplay();
    }
  })
