// console.log("Hello! World!!")
// Template Literals
// let a=5;
// let b=10;
// console.log(`Your Pay ${ a+b } Rupees.`)

// Operators in js =>
    // Arthmetic Operators =>
// let a = 20;
// let b = 10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// Unary Operators =>
    // let a = 10;
// console.log(a++);//10
// console.log(++a);//11
// console.log(a--);//10
// console.log(--a);//9
 

// Assignment Operators => 

    // let a = 10;
    // console.log(10)//10
    // let b =20;
    // console.log(b);//20
    // b =a;
    // console.log(b);//10

    // ceate a traffic light system that show what todo based on color 

//     let color = "black" ;
//     if(color === "red"){
//         console.log("Not go because signal is red its danger for you!");
//     }
//       else if(color ==="yellow"){
//         console.log("Go slow signal is yellow ");
//     }
//      else if(color ==='Green'){
//     console.log("Go signal is Green ");
//     }
// else{
//     console.log("Traffic light Not work!! ");
// }

// Gradient System in js 

// let percentage = 44;
// if(percentage >=60){
//     console.log("Your are passed with First Division");
// }
// else if(percentage >=45){
//     console.log("Your are passed with Second Division");
// }
// else if(percentage>=33){
//     console.log("Your are passed with Thired Division");
// }
// else{
//     console.log("Your are Fail");
// }

// Create a system to calculate popcorn prize based on the size customer asked for:

// let size  = "M";
// if(size === "XL"){
//     console.log("Prize of popcorn is 250");
    
// }
// else if(size ==="L"){
//     console.log("Prize of popcorn is 200");
    
// }
// else if(size === "M"){
//     console.log("Prize of popcorn is 100");
    
// }
// else if(size === "S"){
//     console.log("Prize of popcorn is 50");
    
// }
// else{
//     console.log(" popcorn Not Available");
    
// }

// A "GOOD STRING" is a string that start with "a" and length should be greater than 3 or equal;

// let str = "aioe";
// let n = str.length;
// if(n>=3 && str[0]==='a'){
//     console.log("Good String");
// } 
// else {
//     console.log("not a good string");
    
// }

// predict the output of following code:

// let num = 12;
// if(num%3===0 && ((num+1===15)||(num-1 ===11))){
//     console.log("safe");
    
// }
// else{
//     console.log("unsafe");
    
// }

// truthy and falsy
// if(true){
//     console.log("it is the true value");
    
// }
// else{
// console.log("it is the false value");}

// if(" "){
//         console.log("it is the true value");
        
//     }
//     else{
//     console.log("it is the false value");}
// let num=0;
// if(num){
//         console.log("it is the true value");
        
//     }
//     else{
//     console.log("it is the false value");}


// Switch Statement:-

// let color = "Green" ;
//     switch(color ){
//         case "Red":
//         console.log("Not go because signal is red its danger for you!");
//     break;
//     case "Yellow": 
//         console.log("Go slow signal is yellow ");
//         break;
    
//         case "Green":
//     console.log("Go signal is Green ");
//     break;
    
// default:
//     console.log("Traffic light Not work!! ");
// }

// Using switch statement print  the day of week using number variable 'day' with value 1 to 7;

// let day = "2" ;
//     switch(day){
//     case '1': console.log("Monday");
//     break;
//     case '2': console.log("Tuesday");
//     break;
//     case '3': console.log("Wednesday");
//     break;
//     case '4': console.log("Thursday");
//     break;
//     case '5': console.log("Friday");
//     break;
//     case '6': console.log("Saturday");
//     break;
//     case '7': console.log("Sunday");
//     break;
// default: console.log("Invailed number");
// }


// alert("Something is wrong");
// console.error("bdsjbfnbnb");
// console.warn("this is a warn");


// let rollNumber = prompt("enter your roll no. ")
// console.log(rollNumber);

// let firstName = prompt("Enter your firstName ");
// let LastName = prompt("Enter your lastName");
// console.log("welcome",firstName,LastName,"!!");

// Qs1.Create a number variable num with some value. 
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

// let num = 11;
// if(num%10==0){
//     console.log("good number");
    
// }
// else {
//     console.log("bad number");
    
// }



// Qs2.Take the user's  name & age as input using prompts.
// Then return back the following statement to the user as an alert ( by substituting their name & age)
// name is age years old.
// [Use template Literals to print this sentence]


// let name = prompt("Enter your name :-");
// let age  = prompt("Enter your age  ");
// alert(` ${name}  is ${age} years old!!`)

// Qs3.Write a switch statement to print the months in a quarter. 
// Months in Quarter 
// 1 : January,February,March  
// Months in Quarter 
// 2 : April,May,June 
// Months in Quarter 
// 3 : July,August,September 
// Months in Quarter 
// 4 : October,November,December;
// [Use the number as the case value in switch]

// let Quarter  = "10" ;
//     switch(Quarter){
//     case '1': console.log("January,February,March ");
//     break;
//     case '2': console.log(" April,May,June ");
//     break;
//     case '3': console.log("July,August,September");
//     break;
//     case '4': console.log("October,November,December;");
//     break;
// default: console.log("Invailed number");
// }



// Qs4. A string is a golden string if it start swith
// the character ‘A’ or ‘a’ and has a total length greater than 5.
// For a given string print if it is golden or not.

// let str = "apples";
// if((str[0]='A'||'a' ) && (str.length > 5)){
//     console.log("Golden string");
// }
// else{
//     console.log("Not a golden string");
    
// }

// Qs5.Write a program to find the largest of 3 numbers.

// let a = 145;
// let b = 1;
// let c = 122;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);   
// }
// else{
//     console.log(c);
    
// }

// Qs6 (Bonus).Write a program to check if 2 numbers have the same last digit.
//  Eg : 32 and 47852 have the same last digit i.e. 2 
//  let a = '12';
//  let b = '32';
//  if(a%10==b%10){
// console.log("same lastdigit");
//  }
//  else {
//     console.log("not a same lastdigit ");
    
//  }


// method chaining
// let str = "   iloveCoding  ";
// console.log(str.toLocaleUpperCase().trim());


// slice method 
// let str = "iloveCoding";
// console.log(str.slice(1,5));


// replace method 
// let str = "iloveCoding";
// console.log(str.replace("love","do"));



// repeat method
// let str  ="mango";
// console.log(str.repeat(2));

// practices question 
// for the give string 
// let str = "   help!  ";
// console.log(str.trim().toLocaleUpperCase())

    // let name = "Apnacollege";
    // console.log(name.slice(4,9));
    // console.log(name.indexOf("na"));
    // console.log(name.replace("Apna","our"));

    // let str = "Apnacollege";
// console.log(str.slice(4).replace("l","t"));
