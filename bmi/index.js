const inputOne = document.querySelector('.height');
const inputTwo = document.querySelector('.weight');
const buttonOne = document.querySelector('.but');

function sum(){
let height = parseFloat(inputOne.value);
let weight = parseFloat(inputTwo.value);
let bmi = weight / (height/100 * height/100);
 

console.log(bmi);

if( bmi < 18.5){
    
alert('underweight');
}

else if(bmi  > 18.5 && bmi  < 25 ){
   
    alert('normal weight');
}

if(bmi > 25){
    alert('overweight');
}
 
}

buttonOne.addEventListener('click',sum);
