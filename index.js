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

// const bigNumber= 52256256265245662454563n // put n to make it bigInt
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
// const name = "     harjot   "
// console.log(name.trim())
// console.log(name.slice(-2,4))
// replace this is a good one

// const url ="www.githarjot%20se.com"
// const name2 ="harjot singh"
// url.replace("se", "SE")
// url.includes(("SEtrue"))
// const result=name2.split(' ') // to get a string in  array format based on spaces or anything mentioned
// console.log(result)


// maths and number
// const score =400
// // can also write like this to make sure that it is a number only
// const newScore= new Number(504)
// console.log(newScore)
// console.log(score)
// console.log(newScore.toFixed(5));
// console.log(newScore.toString().length);
// const othernumber=123.5643
// console.log(othernumber.toPrecision(5)) // can give round off if req else no of dig that are req
// const num6=1000000
// console.log(num6.toLocaleString('en-IN'))
//



// date and time
// let myDate=new Date()
// console.log(myDate.getDate())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toString())


// arrays
let arr=new Array(1,2,3,4,5,7)
// console.log(arr[3])
//few more methods
// arr.pop()
// arr.push(5) adds at the end
// console.log(arr)
// arr.unshift(22) // adds at the begining
// console.log(arr)
// arr.shift() // removes the first element
// console.log(arr.includes(88))
// console.log(arr.indexOf(88))
// const newArr=arr.join()
// console.log(typeof (arr))
// console.log(typeof (newArr))
// slice and splice important
// const newArr2=arr.slice(1,5) // first included last excluded no change in og arr
// console.log(newArr2)
// const newArr3=arr.splice(3,5)// first,last included change in og arr
// console.log(newArr3)
// console.log(arr)

// const marvel= new Array("thor", "spriderMan")
// const dc= new Array("Joker", "BatMan", "superMan")
// mergeing them ---> push, concat,
// marvel.push(dc)
// console.log(marvel)// now array can store multiple types of data so it stored a array inside

// lets some other way
// const allHeros=marvel.concat(dc) // makes a new array to store
// console.log(allHeros)

// const anotherArr=[3,2,4,2,5,7,6,3,[5,576,6,332],[5,7,2,[5,3,6]]]
// const flatArr=anotherArr.flat(Infinity);// use infinity or a number else it will flat upto 1 array only
// console.log(flatArr)
//
// console.log(Array.isArray("Harjot"))
// console.log(Array.from("Harjot")) // from will make a string array
// console.log(Array.from({name:"Harjot"})) // will not give the arr directly interseting case

// making an array out of few variables
// const log1=323;
// const log2=3;
// const log3=23;
// const log4=84;
// console.log(Array.of(log1,log2,log3,log4))



// here starts the important part OBJECTS
const sym1 = Symbol();
const obj={
    name:"harjot", "fullName":"Harjot Singh",// one item inside other this is good to know how to access it
    email:"harjot@apple.com",
    age:23,
    isLoggedIn:false,
    sym1:"yo", // now this is a wrong way to use symbol it will val but the type will be string not symbol/object symbol is also an object
    [sym1]:"Yo keys not found" // correct format
}
// console.log(obj.age)
// console.log(obj.sym1)
// console.log(obj[sym1])
// console.log(obj.fullName)

obj.email="harjot@google.com"
// Object.freeze(obj) // to make the items fixed cant be changed
obj.email="harjot@amazon.com"
//
// console.log(obj.age)
// console.log(obj.sym1)
// console.log(obj[sym1])
// console.log(obj.fullName)
// console.log(obj)

// in java script methods are treated as first citizen it means we can easly use them
obj.greeting= function(){
    console.log("Hello JS User");
}

obj.greetingTwo= function(){
    console.log(`Hello JS User,${this.fullName}`); // now we can call the object reference via this in when we want to use any obj inside val inside a method
}
//console.log(obj.greeting());//real way to call a method , it was givng an error due to line 211 y? coz we freeezed the obj so it was saying greeting() is not a method
//console.log(obj.greeting)// we can also call like this but it will give undefined
// console.log(obj.greetingTwo());

//more about objects
//Singleton -- type 1 --> created using new keyword result is same as type 2
//object literals -- type 2 --> created using the conventional method but still result is same as type 1

//type 1
const tinderUSer=new Object();

//type 2
const tinderUSer2={
}
//console.log(tinderUSer2)
//console.log(tinderUSer) // both will give the same result

// we can also add the items in object like this or we can also write them inside the object in a traditonal way
tinderUSer2.id="234as"
tinderUSer2.name="Sidak"
tinderUSer2.isLoggedIn=true;
// console.log(tinderUSer2)

// tought one object inside object or nested object
const regularUser={
    name:{
        fullName: {
            firstName: "Harjot",
            lastName: "Singh"
        }
    },
    email:"harjot@apple.com"
}
// console.log(regularUser.name)
// console.log(regularUser.name.fullName)
// console.log(regularUser.name.fullName.firstName)
// console.log(regularUser.name.fullName.lastName)
// the deeper you dig in the more precise val u get
// else if you will  not go deeeper its storing the complete obj

 // let see how to combine multiple objects
const obj11={1:"ssds",5:"sfgsfge"}
const obj22={2:"bg",7:"e"}
const obj33={4:"sf",3:"eg"}
const obj4=Object.assign({},obj11,obj22,obj33); // now here 1st val is target in which all obj will be stored { } use this to make sure we are storing a new obj without altering the any og obj
// we can use spread operator as same as array
const obj9={...obj11,...obj22,...obj33}
//console.log(obj9)


//one more syntax it will be used when we will get data from database , data will be in the form of array of objects
const useDB= [
    {
        id:"1",
        email:"harjot@apple.com"
    },
        {
            id:"2",
            email:"harjot@google.com"
        },
        {
            id:"3",
            email:"harjot@nvdia.com"
        }
    ]
useDB[1].email  // array obj position and now use . to access the inside of the obj
console.log(tinderUSer2)
// now we are getting the whole object when we print but we can also get it in array form so that we can later on loop on that array and we can get the desired data out of that array
console.log(Object.keys(tinderUSer2))
// we can also abstract values also
console.log(Object.values(tinderUSer2))
// now we can also output the array of key value pair in array form too
console.log(Object.entries(tinderUSer2))
// we can also check if an object has a particular value stored inside it or not
console.log(tinderUSer2.hasOwnProperty('isLoggedIn'))
