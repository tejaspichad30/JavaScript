// arithmetic operator
let x=10;
let y=20;
let result;

// Addition 
console.log("Addition result : " +(result=x+y));

// Subtraction 
console.log("Subtraction result : "+(result=x-y))

// Multiplication
console.log("Multiplication reult : " +(result=x*y));

// Devision 
console.log("Devision result :"+(result=x/y));

//exponentiation
console.log("Exponentiation result :"+(result=x**y));

//Modulous
console.log("Modulous result :"+(result=x%y));

// --------------------------------------------------------------------

//increament and decrement x=10 and y=20
//postfix
result=x++;
console.log("Increment reult : "+x); //x=11

result=y--;
console.log("Decreament result : "+y);//x=19

console.log(x+2); //expected output=13
console.log(y+3); //expexted output=22

//prefix
console.log("Prefix unary operator");
let x1=30;
let y1=40;
result=++x1;
console.log("Increament result :"+ x1); //x=31
result=--y1;
console.log("Decreament result : "+y1);//x=39

console.log(x1+2); //expected output=33
console.log(y1+3); //expected output=42

let s=2;
let t=3;
console.log("post increment :" +(s++)); //s=2
console.log(s); //s=3
console.log("post decrement : "+(t--)); //t=3
console.log(t); //t=2
console.log("pre increment :"+(++s)); //s=4
console.log(s); //s=4
console.log("pre decrement :"+(--t)); //t=1
console.log(t); //t=1

// ----------------------------------------------------------------

// assignment Operator 
let t1=5    //assigning value
let v1=4;

// addtiion
console.log("Addition result :"+(t1+=v1));

//subtraction
console.log("subtraction result : "+(t1-=v1));

//multiplication 
console.log("Multiplication result : "+(t1*=v1));

//devision
console.log("Devision result : "+(t1/=v1));

//exponentiation 
console.log("Exponentiation result : "+(t1**=v1));

//Modulous
console.log("Modulous result : "+(t1%=v1));