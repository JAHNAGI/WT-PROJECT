function check(){
    var names=["school","school2","board"];
    var ids=["jah1","jah2","jah3","jah4"];
    var a=document.forms[0];
   for (var i=0;i<names.length;i++){
    if (a[names[i]].value==""){
        document.getElementById(ids[i]).nextElementSibling.innerHTML="helo";
        document.getElementById("ask").innerHTML+="this field is required<br>";
        console.log("hello");
        
    }
  
    
   }
   return false;
}