// their we class and objects in js in old v so now we use new v and its done auto
// but we can also do manaual
// "use strict";
// console.log("Hello")
// const accountId=55 // for non changing vals
// let accountEmail="harjot@gmail.com"  // let is to bind the scope
// var accountPass="12345" // avoid var just dont use its global scope
// let accountCity="mohali"


// console.log(accountEmail)
// console.log(accountId)

// type of
//  let score =true
// console.log(typeof score)
// console.log(typeof "str")
// console.log(typeof 4553)
// let valueInNumber=Number (score)
// let valueInNumber2=Number ("str")
// console.log(typeof valueInNumber)
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(valueInNumber)
// console.log(valueInNumber2)

// like to convert in number we have Number like that only we have Boolean too

// let num=0
// let num2=1
// let numBool= Boolean(num)
// let numBool2= Boolean(num2)
// console.log(numBool)
// console.log(numBool2)


// number to string lol
// console.log("1"+2)
// console.log("1"+2+3)
// console.log(3+"1"+2)
// console.log(1+2+"3")

// if first a number comes then string concatinate if 2 number then add them them concatinate

// tricky conversion
// console.log(+true)
// console.log(+"")


// prefix and post fix mdn doc
// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
// let a = 3;
// const b = ++a;
// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// prefix first increment is done but the val used is non inc
//postfix ele is inc and also used at the same time


// // comparison
// // > < >= <= != these are the simple classic ones
// console.log("2">1) // auto conversion and check
// console.log("011">1)
// // problem arises when we compare 2 different types like null >1 etc
// // problem is sometime we get unpredictable results
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0) // here result is diff coz while converting null is treating /converted into 0 or even Nan too
// // like null too undefined it will have a problem
// // strict check no conversion at all
// console.log("22"===3);


// datatypes (interview specific)

// primitives 7types : String ,Number, Boolean, null, Undefined, Symol(unique) , BigInt (scientific val)

 const bigNumber= 52256256265245662454563n // put n to make it bigInt
// Reference / Non primitive
// arrays , objects , Functions

// const germanCars=["bmw", "merc", "audi"]; // arrays
// //objects---> they are key val pair
// let myObj={
//     name:"harjot singh",
//     age:23
// }
// console.log(myObj)

//function
// const func=function (){
//     console.log("hello world");
// }

// stack and heap memory
// primitive -- stack
// non primitive -- heap


//Strings
// const name="Harjot"
// const repo=30
// console.log(name + repo)
// // new way stringInterpolation
// console.log(`my name is ${name} and my repo count is ${repo}`);

// string methods
const name = "     harjot   "
console.log(name.trim())
console.log(name.slice(-2,4))
// replace this is a good one 





