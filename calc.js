let display = document.getElementById("display");

let button = document.querySelectorAll("button");

let string = " "
let arr = Array.from(button)
arr.forEach(button => {
    button.addEventListener("click", function(e){
       if(e.target.innerHTML == "="){
        string = eval(string);
        display.value = string;
       }
       else if(e.target.innerHTML == "AC") 
       {
        string = "";
        display.value = string;
       }
       else if(e.target.innerHTML == "Del"){
        string = string.substring(0, string.length-1);
        display.value = string;
       }
       else{
        string += e.target.innerHTML;
        display.value = string;
        console.log("hii");
       }


 
       
     })
});

