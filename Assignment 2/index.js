const clr1 = document.querySelector("#clr");
const amnt = document.querySelector("#box");
const start1 = document.querySelector("#start");
const help1 = document.querySelector("#help");
const Man = document.querySelector("#man");
const Earn1 = document.querySelector("#Earn");
const mstk = document.querySelector("#error");



start1.addEventListener("click" ,function() {

    
    const text = amnt.value;
   
     if (text < 48535){
        a=(text*.15).toFixed(2);
        help1.textContent='$'+a;
        Man.textContent=(a/text*100).toFixed(2);
        b=(text-a).toFixed(2);
         Earn1.textContent='$'+b;
    }
     else if(text>=48535 && text<97069){
        a = ((text-48535) * .205 + 7280).toFixed(2);
        help1.textContent='$'+a;
        Man.textContent=(a/text*100).toFixed(2);
       b= (text-a).toFixed(2);
       Earn1.textContent='$'+b;
     }
     else if(text>=97069 && text<150473){
        a = ((text-97069) * .26 + 17230).toFixed(2);
        help1.textContent='$'+a;
        Man.textContent=(a/text*100).toFixed(2);
        b=(text-a).toFixed(2);
        Earn1.textContent='$'+b;
      }
     else if(text>=150473 && text<214368){
      a= ((text-150473) * .29 + 31115).toFixed(2);
      help1.textContent='$'+a;
      Man.textContent=(a/text*100).toFixed(2);
      b=(text-a).toFixed(2);
      Earn1.textContent='$'+b;
     }
     else if(text>='a' || text>='A'){
    mstk.textContent="Error : Enter a number";
    }
      else{
      a = ((text-214368) * .33 + 49645).toFixed(2);
      help1.textContent='$'+a;
      Man.textContent=(a/text*100).toFixed(2);
      b=(text-a).toFixed(2);
      Earn1.textContent='$'+b;
      }
} 
);
    
     clr1.addEventListener("click" , function() {
        amnt.value = null;
        help1.textContent = null;
        Man.textContent = null;
        Earn1.textContent = null;
        mstk.textContent = null;

     }  ) ;
     
     
     


