let input=document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let inputvalue='';
for(item of buttons){
    item.addEventListener('click',(e) => {
         buttontext=e.target.innerText;
         
        if(buttontext == '='){
            input.value=eval(inputvalue);
        }
        else if(buttontext == 'C'){
            inputvalue = "";
            input.value =inputvalue;  
        }
        else{
            inputvalue+=buttontext;
            input.value=inputvalue;
        }

    });
}