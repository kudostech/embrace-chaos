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
const ooo=document.getElementById("oo")
var bbb=[];
var nc=1;
var pv=0;
var kk=0;
var po="=";
function ff1(ee){
   //bbb[0].value="ert";
   nv=parseInt(rr.innerText);
   switch (this.value) {
    case "+":
    case "-":
    case "×":
    case "=":
        switch (po) {
            case "+":nv=pv+nv;break;
            case "-":nv=pv-nv;break;
            case "×":nv=pv*nv;break;
            case "=":break;

        }
        nc=1;
        ooo.innerText= po=this.value;
        rr.innerText=nv;
        pv=nv;
        break;
   
    default:
        if(nc>0){
           rr.innerText="";
           nc=0;
        }
        rr.innerText+=this.value;
        break;
   }
   
   for(var i=0;i<10;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*9);
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }
   if(kk>10)
    for(var i=10;i<14;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*3)+10;
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }
   if(kk>20)
    for(var i=0;i<14;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*13);
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }

   kk++;
}
for(var i=0;i<14;i++){
   bbb[i]=document.getElementById("bb"+i)
   bbb[i].addEventListener("click",ff1)
}
b1.addEventListener("click",ff)