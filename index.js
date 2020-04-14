const inputOne = document.querySelector('.height');
const inputTwo = document.querySelector('.weight');
const buttonOne = document.querySelector('.but');
const around = document.querySelector('#bmi');





function sum(){
let height = parseFloat(inputOne.value);
let weight = parseFloat(inputTwo.value);
let bmi = weight / (height * height);
 



if( bmi < 18.5){
    
alert('underweight');
}

else if(bmi  > 18.5 && bmi  < 25 ){
   
    alert('normal weight');
}

if(bmi > 25){
    alert('overweight');
}
  console.log(bmi);
}

buttonOne.addEventListener('click',sum);
