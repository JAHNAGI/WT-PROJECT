
function check(){

}
function vis(a){
    var ask1=document.getElementById("ask2");
    var ask2=document.getElementById("ask3");
    if (a.name=="inter0"){
        if (a.checked==true){
            ask1.style.display="block";
        }
        else{
            ask1.style.display="";
        }
    }
    else if(a.name=="diploma"){
        if (a.checked==true){
            ask2.style.display="block";
        }
        else{
            ask2.style.display="";
        }

    }
}
var btn1=0,btn2=0,btn3=0,btn4=0;


function btns(a){
    let back1=document.getElementById("back1");
let back2=document.getElementById("back2");
    if (a.id=="btn1"){
     
        if (btn1==0){
            btn1=1;
            a.style.color="#5e1f89";
            a.style.backgroundColor="#edcfff";
            a.style.border="2px solid #5e1f89"
            a.firstChild.style.border="2px solid #5e1f89";
           back1.style.display="block";
        }
        else{
            btn1=0;
            a.style.color="black";
            a.style.backgroundColor="white";
            a.style.border="2px solid black"
            a.firstChild.style.border="2px solid black";
            back1.style.display="";
        }
    }
    else if(a.id=="btn2"){
        back1.style.display="";
        if (btn2==0){
            btn2=1;
            a.style.color="#5e1f89";
            a.style.backgroundColor="#edcfff";
            a.style.border="2px solid #5e1f89"
            a.firstChild.style.border="2px solid #5e1f89";
           
        }
        else{
            btn2=0;
            a.style.color="black";
            a.style.backgroundColor="white";
            a.style.border="2px solid black"
            a.firstChild.style.border="2px solid black";
            
        }

    }
    else if(a.id=="btn3"){
        if (btn3==0){
            btn3=1;
            back2.style.display="block";
            a.style.color="#5e1f89";
            a.style.backgroundColor="#edcfff";
            a.style.border="2px solid #5e1f89"
            a.firstChild.style.border="2px solid #5e1f89";
        }
        else{
            back2.style.display=""
            btn3=0;
            a.style.color="black";
            a.style.backgroundColor="white";
            a.style.border="2px solid black"
            a.firstChild.style.border="2px solid black";

        }
        
    }
    else if(a.id=="btn4"){
        back2.style.display="";
        if (btn4==0){
            btn4=1;
            a.style.color="#5e1f89";
            a.style.backgroundColor="#edcfff";
            a.style.border="2px solid #5e1f89"
            a.firstChild.style.border="2px solid #5e1f89";
        }
        else{
            btn4=0;
            a.style.color="black";
            a.style.backgroundColor="white";
            a.style.border="2px solid black"
            a.firstChild.style.border="2px solid black";

        }
        
        
    }
   
    
  return false;  
}