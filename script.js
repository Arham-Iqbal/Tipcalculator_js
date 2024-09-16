let bill=document.getElementById("billAmount")
let tip=document.getElementById("tipPercentage")
let button=document.getElementById("calculateButton")
let result=document.getElementById("result")




button.addEventListener("click",()=>{

    billamount=bill.value
   
    result.innerText= (billamount*tip.value)/100

})