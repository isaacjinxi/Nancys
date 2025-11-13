price = 0;
quantityone = 0;
 document.getElementById("i8").textContent=`Total Price $ ${price}`
document.getElementById("underwear model 1").onclick = function(){ 
    quantityone += 1;
    document.getElementById("i10").textContent=``;
    document.getElementById("i7").textContent=`KIDS UNDERWEAR, quantity  ${quantityone}`;
    price += 1;
    document.getElementById("i8").textContent=`Total Price $ ${price}`;
    
}
document.getElementById("CLEAR").onclick = function(){
    price = 0;
    quantityone = 0;
    document.getElementById("i7").textContent=``;
    document.getElementById("i8").textContent=`Total Price $ ${price}`;
    document.getElementById("i11").textContent=``;
    document.getElementById("i10").textContent=``;

}
document.getElementById('complete').onclick = function(){
    document.getElementById("i7").textContent=``;
    document.getElementById("i8").textContent=``;
    document.getElementById("i11").textContent=`Payment Done, Thank You!`;
    document.getElementById("i10").textContent=`$ ${price}`;

}
