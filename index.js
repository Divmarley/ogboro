// object

// const greet = document.querySelector('.myname');

// /* object car 
//  properties
//  color of car
//  size of car
//  weight of car
//  name of car

//  methods
//  car.start()
// car.drive()
// car.brake()
// car.stop()
// */
 
// const car = {
//     // properties
//     name :"benz",
//     color:'red',
//     model:"123cw" ,
//     // methods
//     start:function () {
//         return 'i am starting';
//     },
//     stop:function () {
//         return 'i am stoping';
//     },
//     brake:function () {
//         return 'i am brakeing';
//     },

// }

 

// console.log(car.start()); 
// console.log(car.brake()); 



// Arrays

// const cars = ["Saab", "Volvo", "BMW","tfuiyjtr", "srse", "wre6456"];

// console.log(cars[cars.length-1] ); 
  

// 

// const items = document.getElementById('demo');
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// // items.innerHTML =fruits.toString()
// // items.innerHTML =fruits.join("#")
// // items.innerHTML =fruits.pop()
// // items.innerHTML =fruits.push("kiwi")
// console.log(fruits);

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const jj =myGirls.concat(myBoys)

// console.log(jj)





// let hisname ="kk"

// console.log(hisname.split(' ')[0][0]);


/*

homework
convert "kofi kumi " to kk

*/ 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// console.log(fruits.sort());
// console.log(fruits.reverse());


// let hisname ="kofi sumi" 
// let m=hisname.split(' ')[0][0]
// let k=hisname.split(' ')[1][0] 


// let  kk=m.concat(k)
// console.log(kk); 

// Numeric Sort
// const numb =[40, 100, 1, 5, 25, 10];

// document.getElementById('demo').innerHTML=numb;


// numb.sort(function(a,b){return a-b;}) 
// document.getElementById('demo2').innerHTML=numb;


// // let myTxt ="";
// // numbers.forEach(function(value){
// //    console.log(1000+'1');
// //    console.log(1000+'1');
// // })
const numbers = [45, 4, 9, 16, 25];
let kk=numbers.filter(function (val) {
    return val>12; 
})

console.log(kk);


const movements=[200, 450, -400, 3000, -650, -130, 70, 1300]
function add(total,value) {
    return total+value;

}
// let sum = movements.reduce(add); 



document.getElementById('demo').innerHTML=sum;


console.log(200+ 450+ -400+ 3000+ -650+ -130+ 70+ 1300);