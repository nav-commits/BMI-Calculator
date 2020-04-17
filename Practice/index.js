

class Course{

constructor(courseTitle, courseLength, coursePrice){
this.title = courseTitle;
this.length = courseLength;
this.price = coursePrice ;
}

 calculater() {
    return this.length / this.price;
}


summary(){
console.log('title: ${this.title}, length: ${this.length}, price: ${this.price}');
}


}
// objects are here
const courseOne = new Course('math',25 , 10.99)
const courseTwo = new Course('science',28, 12.99)

console.log(courseOne);
console.log(courseTwo);




console.log(courseOne.calculater());
console.log(courseTwo.calculater());

courseOne.summary();
courseTwo.summary();


class theo extends Course{
 constructor(title,price,length, time){
     super(title, price, length)
     this.time = time;
 }


}

let summerizer = new theo("newer" , 9 , 25, 15);

console.log(summerizer);
summerizer.summary();





