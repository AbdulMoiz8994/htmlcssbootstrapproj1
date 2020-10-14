// // // // // // // var a="5";
// // // // // // // if(a===5){
// // // // // // //     alert("true")
// // // // // // // }
// // // // // // // else{
// // // // // // //     alert(false);
// // // // // // // }
// // // // // // // var x =5;
// // // // // // // var y=10;
// // // // // // // var a=30;
// // // // // // // var b= 15;
// // // // // // // if(x+y === a-b){
// // // // // // //     alert("correct")
// // // // // // // }
// // // // // // // else{
// // // // // // //     alert("in correct")
// // // // // // // }


// // // // // // var a=10;
// // // // // // if(a !== 10){
// // // // // //     console.log("Yes this is true")
// // // // // // }
// // // // // // else{
// // // // // //    console.log("No This is false")
// // // // // // }

// // // // // var a=+prompt("what is your age","Please type your age")
// // // // // var b=20;
// // // // // console.log(a+b);

// // // // var percent=+prompt("what is your percent")
// // // // if(percent >=80 && percent<=100){
// // // //     console.log("A1")
// // // // }
// // // // else if(percent >=70 && percent<=79.99){
// // // //     console.log("A")
// // // // }
// // // // else if(percent >=60 && percent<=69.99){
// // // //     console.log("B")
// // // // }
// // // // else if(percent >=55 && percent<=59.99){
// // // //     console.log("C")
// // // // }
// // // // else if(percent >=50 && percent<=54.99){
// // // //     console.log("D")
// // // // }
// // // // else{
// // // //     console.log("Fail")
// // // // }
// // // // if((5===5 || 10===10)&& 30===20){
// // // //     console.log("Yes all values are correct");
// // // // }
// // // // else{
// // // //     console.log("each value could be wrong");  
// // // // }
// // // if(10==="10"){
// // //     if(20===10){
// // // console.log("This is nested if")
// // //     }
// // //     else if(5===5){
// // //         console.log("This is nested else if")
// // //     }
// // //     else{
// // //         console.log("This is answer of nested if")
// // //     }
// // // }
// // //     else{
// // //         console.log("This is anwer of real if");
// // //     }


// // // array

// // var students=["abdul moiz","basit","ali"];
// // console.log(students);
// // console.log(students[0]);
// // console.log(students.length);
// // alert("welocome to " +students[1]);
// // alert("welocome to " +students[2]);


// var names=[];
// names[0]=("abdul moiz");
// names[1]=("abdul malik");
// console.log(names);
// console.log(names.pop());
// // names.push("Bilal")
// names.push("Bilal","Faizan","rafay")
// console.log(names);

//  var students=["abdul moiz","basit","ali"];
// students.shift();
// console.log(students);
// names.shift();
// console.log(names);
// names.unshift("rizwan" ,"abdullah")
// console.log(names);
// students.unshift("rizwan" ,"abdullah")
// console.log(students);

// var friends=["abdul moiz","rizwan","abdullah","faizan","wajeeh"];
// friends.splice(1,2,"umer")
// console.log(friends);
// friends.splice(1,1);
// console.log(friends);

var friends=["abdul moiz","rizwan","abdullah","faizan","wajeeh"];
console.log(friends);
var copyfrd =friends.slice(0,4);
console.log(copyfrd);