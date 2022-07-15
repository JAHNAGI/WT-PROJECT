
function check(){

}
function gay3(x){
    if (x.value=="" | x.value=="none"){
        x.parentElement.parentElement.parentElement.nextElementSibling.style.display="block";
    }
    else{
        x.parentElement.parentElement.parentElement.nextElementSibling.style.display="";
 
    }
}
function vis(a){
    var ask1=document.getElementById("ask2");
    var ask2=document.getElementById("ask3");
    if (a.name=="inter0"){
        if (a.checked==true){
            ask1.style.display="block";
            a.nextElementSibling.setAttribute("class","btnb");
           
           
        }
        else{
            ask1.style.display="";
            a.nextElementSibling.removeAttribute("class");
        }
    }
    else if(a.name=="diploma"){
        if (a.checked==true){
            ask2.style.display="block";
            a.nextElementSibling.setAttribute("class","btnb");
           
        }
        else{
            ask2.style.display="";
            a.nextElementSibling.removeAttribute("class");
        }

    }
}
function rad(a){

}

function btns(a){
    
    if (a.getAttribute("class")==null){
        a.setAttribute("class","btn");
        if (a.id=="btn1"){
            a.nextElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="block";
        }
        else if(a.id=="btn3"){
            a.nextElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="block";

        }
        else if (a.id=="btn2"){
            a.previousElementSibling.removeAttribute("class");
            a.parentElement.nextElementSibling.style.display="";
        }
        else if(a.id=="btn4"){
            a.parentElement.nextElementSibling.style.display="";
            a.previousElementSibling.removeAttribute("class");
        }
        
    }
    else{
        a.removeAttribute("class");
        if (a.id=="btn1"){
            a.parentElement.nextElementSibling.style.display="";
        }
        else if(a.id=="btn3"){
            a.parentElement.nextElementSibling.style.display="";

        }
       
    }

   
    
  return false;  
}