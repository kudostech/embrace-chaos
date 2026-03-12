const n1= document.getElementById("n1")
const n2= document.getElementById("n2")
const b1=document.getElementById("b1")
const oo=document.getElementById("cal")

function ff(ee){
   //window.alert("cat");
   v1=parseFloat(n1.value);
   v2=parseFloat(n2.value);
   //n2.value=Math.random();
   switch (oo.value) {
    case "plus":
        out=v2+v1;
        break;
    case "minus":
        out=v1-v2;
        
        break;
    case "multiply":
        out=v2*v1;
        
        break;
    case "devision":
        out=v1/v2;
        
        break;
   
    default:
        break;
   }
   //window.alert(oo.value);
   if(Math.random()<0.5){
    window.alert("cat"+out);
   } else{
    window.alert("dog");

   }
}
const rr=document.getElementById("rr")
var bbb=[];
function ff1(ee){
   //bbb[0].value="ert";
   
   rr.innerText+=this.value;
   for(var i=0;i<10;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*9);
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }


}
for(var i=0;i<10;i++){
   bbb[i]=document.getElementById("bb"+i)
   bbb[i].addEventListener("click",ff1)
}
b1.addEventListener("click",ff)