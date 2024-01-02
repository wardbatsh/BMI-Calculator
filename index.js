const btnEl=document.getElementById("btn")
const bmiinput=document.getElementById("bmi-result")
const weightcond=document.getElementById("weight-condition")
function calculateBMI(){
    const Height=document.getElementById("height").value/100
    const Weight=document.getElementById("weight").value
    const bmi=Weight/(Height*Height)
    bmiinput.value=bmi
    if(bmi<18.5)
    weightcond.innerText="Underweight"
    if(bmi>=18.5 && bmi<= 24.9)
    weightcond.innerText="Normal Weight"
    if(bmi>=25 && bmi<= 29.9)
    weightcond.innerText=" Overweight"
    if(bmi>=30)
    weightcond.innerText="Obese"
}


btnEl.addEventListener("click",calculateBMI)