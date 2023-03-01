let height;
let weight;
let submit =  document.getElementById("submit-btn")
let reset =  document.getElementById("reset-btn")
let text = document.getElementById("output")
 
submit.addEventListener("click", function(){
  if(document.getElementById("height-input").value === "" || document.getElementById("weight-input").value === ""){
     text.innerHTML = ` Please input Your Height and weight `
  }
  else{
   height = document.getElementById("height-input").value;
   height = Number(height)

   weight = document.getElementById("weight-input").value;
   weight = Number(weight)

   total = weight / Math.pow(height, 2)
   total = total.toFixed(1)
   
   total = bmi()
  }
})

reset.addEventListener("click", function(){
 let weight 
  document.getElementById("weight-input").value = ""

 let height
  document.getElementById("height-input").value = ""
  
  text.innerHTML = ""
})

function bmi(){
 if(total < 18.5){
    text.innerHTML =` Your BMI is ${total} You are UNDERWEIGHT! `
 }

 else if(total < 25.0 ){
    text.innerHTML =` Your BMI is ${total} You are NORMAL! `
 }

 else if(total <  30.0){
    text.innerHTML =` Your BMI is ${total} You are OVERWEIGHT! `
 }

else if(total < 35.0){
    text.innerHTML =` Your BMI is ${total} You are OBESE! `
 }
else{
    text.innerHTML =` Your BMI is ${total} You are EXTREMELY OBESE! `
 }
}

