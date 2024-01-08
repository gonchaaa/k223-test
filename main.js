let input=document.getElementById("input");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");

plus.addEventListener("click",function(){
input.value++
})

minus.addEventListener("click",function(){
    if (input.value>0) {
        input.value--
    }
input.value==1
})

