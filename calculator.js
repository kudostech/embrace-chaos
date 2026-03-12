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
var ct="";
const hos=["u","b","i","sub","sup"]
function ff1(ee){
   //bbb[0].value="ert";
   nv=parseInt(ct);
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
        ct=nv;
        pv=nv;
        break;
   
    default:
        if(nc>0){
           ct="";
           nc=0;
        }
        ct=ct+this.value;
        break;
   }
   
   for(var i=0;i<10;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*9);
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }
   if(kk>20)
    for(var i=10;i<14;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*3)+10;
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }
   if(kk>40)
    for(var i=0;i<14;i++){
      var t=bbb[i].value;
      var r=Math.floor(Math.random()*13);
      bbb[i].value=bbb[r].value;
      bbb[r].value=t;
   }
   if(kk>10){
    
     if(kk<30){
       var r=Math.floor(Math.random()*5);
       var hc=hos[r];
       rr.innerHTML="<"+hc+">"+ct+"</"+hc+">";
     }else{
   var ts="";
   ct=""+ct;
   for(var i=0;i<ct.length;i++){
      var r=Math.floor(Math.random()*5);
      var hc=hos[r];
      ts+="<"+hc+">"+ct[i]+"</"+hc+">";
   }
   rr.innerHTML=ts;
   }
   }else{
     rr.innerHTML=ct;
   }
   kk++;
}
for(var i=0;i<14;i++){
   bbb[i]=document.getElementById("bb"+i)
   bbb[i].addEventListener("click",ff1)
}
b1.addEventListener("click",ff)