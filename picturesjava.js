var a = 0;

function plus() {
    
    a++;
document.getElementById("counter").innerHTML=a;
return;
}
function minus() {
if(a>=1)
{    
    a--;
}   
document.getElementById("counter").innerHTML=a;

return;
}
function addToCart()
{
    
   var price = a*1800;
   document.getElementById("cart").innerHTML="Amount you ordered: "+a+"Price: "+price;
}

