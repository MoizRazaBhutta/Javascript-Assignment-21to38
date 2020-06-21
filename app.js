// Chapter 21-25 Task 1
// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");

// var fullName=firstName+" "+lastName;
// alert(fullName)

// Chapter 21-25 Task 2
// var userInput=prompt("Input your favorite mobile phone model")
// document.write("My favorite phone is: "+userInput+"<br>")
// document.write("Length of string is: "+userInput.length)

// Chapter 21-25 Task 3
// var str="Pakistani"
// document.write("String: "+str+"<br>")
// document.write("Index of n is:"+str.indexOf("n"))

// Chapter 21-25 Task 4
// var str="Hello World"
// document.write("String: "+str+"<br>")
// document.write("Index of l is: "+str.lastIndexOf("l"))

// Chapter 21-25 Task 5
// var str="Pakistani"
// document.write("String: "+str+"<br>")
// document.write("Character at index 3: "+str.charAt(3))

// Chapter 21-25 Task 6
// var firstName=prompt("Enter your first name");
// var lastName=prompt("Enter your last name");
// var fullName=firstName.concat(lastName)
// alert(fullName)

// Chapter 21-25 Task 7
// var city="Hyderabad"
// document.write("City: "+city+"<br>")
// for (var i=0;i<city.length;i++){
//     if(city.slice(i,i+5)==="Hyder"){
//         city=city.slice(0,i)+"Islam"+city.slice(i+5)
//     }
// }
// document.write("After replacement: "+city)

//Chapter 21-25 Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message=message.replace(/and/g,"&");
// document.write("Message is: "+message)

//Chapter 21-25 Task 9
// var str='472'
// document.write("Value: "+str+"<br>")
// document.write("Type: "+typeof str+"<br>")
// int=parseInt(str)
// document.write("Value: "+int+"<br>")
// document.write("Type: "+typeof int+"<br>")

//Chapter 21-25 Task 10
// var userInput=prompt("Input text: ")
// document.write("User Input is: "+userInput + "<br>")
// document.write("Uppercase: "+userInput.toUpperCase())

//Chapter 21-25 Task 11
// var userInput=prompt("Input text: ")
// document.write("User Input is: "+userInput + "<br>")
// first=userInput.slice(0,1)
// first=first.toUpperCase()
// others=userInput.slice(1)
// others=others.toLowerCase()
// combined=first+others
// document.write("Title case: "+combined)

//Chapter 21-25 Task 12
// var num=35.36
// var str=num.toString()
// str=str.replace(".","")
// document.write("Number "+num+"<br>")
// document.write("Result "+str)

//Chapter 21-25 Task 13
// var userInput=prompt('Enter your name:')
// for (var i=0;i<userInput.length;i++){
//     if (userInput[i]==="!"||userInput[i]===","||userInput[i]==="."||userInput[i]==="@"){
//         alert("Please Enter a valid username")        
//     }
// }

//Chapter 21-25 Task 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput=prompt("Welcome to ABC Bakery. What to do you want to order sir/mam? ")
// userInput=userInput.toLowerCase()
// for(var i=0;i<A.length;i++){
//     if(A[i]===userInput){
//         alert(userInput+" is available at index "+i+" in our bakery" )
//         break;
//     }
//     else if(i==(A.length-1)){
//         alert("We are sorry. "+userInput+" is not available in our bakery")
//     }

// }

//Chapter 21-25 Task 15
// var password=prompt("Enter your password: ")
// let n = password.charCodeAt(0);
// for(var i=0;i<password.length;i++){
//     let a = password.charCodeAt(i)
//     let codes=(a >= 65 && a < 91) || (a >= 97 && a < 123) || (a>=48 && a<=57)
//     if(codes===false){
//         var b=true
//         break;
//     }
//     else{
//         var b=false;
//     }
// }

// let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);
// if(b)
// {
//     alert("You have to enter alphanumeric characters only")
// }
// else if(strStartsWithALetter===false){
//     alert("Password must not start with numbers")
// }
// else if(password.length>6){
//     alert("Password must not be greater than 6 characters")
// }
// else{
//     alert("Your password is stored")
// }

//Chapter 21-25 Task 16
// var str=prompt("Enter a string: ")
// var arr=Array.from(str)
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>")
// }

//Chapter 21-25 Task 17
// var userInput=prompt("Enter any word:")
// var lastcharacter=userInput[userInput.length-1]
// document.write("User Input is: "+userInput+"<br>")
// document.write("Last character is: "+lastcharacter)

//Chapter 21-25 Task 18
// var str="The quick brown fox jumps over the lazy dog"
// var count=0
// str=str.toLowerCase()
// for(var i=0;i<str.length;i++){
//     if(str.slice(i,i+3)==='the'){
//         count++
//     }
// }
// document.write("The is repeated "+count+" times")

//Chapter 26-30 Task 1
// var num=parseFloat(prompt("Enter any positive number:"))
// document.write("Number: "+num+"<br>")
// document.write("Round off value "+Math.round(num)+"<br>")
// document.write("Floor Value: "+Math.floor(num)+"<br>")
// document.write("Ceil Value: "+Math.ceil(num))

//Chapter 26-30 Task 2
// var num=parseFloat(prompt("Enter any negative number:"))
// document.write("Number: "+num+"<br>")
// document.write("Round off value "+Math.round(num)+"<br>")
// document.write("Floor Value: "+Math.floor(num)+"<br>")
// document.write("Ceil Value: "+Math.ceil(num))

//Chapter 26-30 Task 3
// var num=parseInt(prompt("Enter any number: "))
// document.write("The absolute value of "+num+" is "+Math.abs(num))

//Chapter 26-30 Task 4
// var random=Math.ceil(Math.random()*6)
// document.write("Random dice value is "+random)

//Chapter 26-30 Task 5
// var random=Math.ceil(Math.random()*2)
// if (random===1){
//     var toss="Heads"
// }
// else if (random===2){
//     var toss="Tails"
// }
// document.write("Random coin value is "+toss)

//Chapter 26-30 Task 6
// var random=Math.ceil(Math.random()*100)
// document.write("Random number between 1 and 100 is "+random)

//Chapter 26-30 Task 7
// var weight=prompt("Enter your weight in kilogram:")
// for(var i=0;i<weight.length;i++){
//     if(weight.slice(i,i+3)==='kgs'){
//         weight.replace("kgs","Kilograms")
//         break
//     }
//     else if(weight.slice(i,i+8)==="Kilograms"){
//         continue
//     }
//     else if(i<weight.length-1){
//         weight=weight.slice(0,i)+"Kilograms"
//     }
// }
// document.write("Weight of user is "+weight)

//Chapter 26-30 Task 8
// var random=Math.ceil(Math.random()*10)
// while(true){
//     var userInput=parseInt(prompt('Enter any number between 1-10 '))
//     if(userInput===random){
//         alert("Congratulation you guessed "+random+" right")
//         break
//     }
//     else{
//         alert("Try Again")
//     }
// }

//Chapter 31-34 Task 1
// var now=new Date();
// document.write(now);

//Chapter 31-34 Task 2
// var now=new Date();
// var months=["January","February", "March","April", "May","June", "July","August", "September","October","November", "December"]
// var month=now.getMonth();
// document.write("Current month is: "+months[month])

//Chapter 31-34 Task 3
// var now=new Date();
// now=now.toString();
// var day=now.slice(0,3)
// document.write("Current Day is: "+day)

//Chapter 31-34 Task 4
// var now=new Date();
// now=now.toString();
// var day=now.slice(0,3)
// if(day==="Sat"||day==="Sun"){
//     document.write("Its fun day")
// }
// else{
//     document.write("Current Day is: "+day)
// }

//Chapter 31-34 Task 5
// var now=new Date();
// var date=now.getDate();
// if(date<15){
//     document.write("First fifteen days of month")
// }
// else{
//     document.write("Last days of month")
// }

//Chapter 31-34 Task 6
// var now=new Date();
// var millisec=now.getTime();
// var minutes=millisec/(1000*60)
// document.write("Current date is: "+now+"<br>")
// document.write("Elapsed millisecond since Jan 1,1970 "+millisec+"<br>")
// document.write("Elapsed minutes since Jan 1,1970 "+minutes)

//Chapter 31-34 Task 7
// var now=new Date();
// var hours=now.getHours()
// if (hours<12){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

//Chapter 31-34 Task 8
// var laterDate=new Date("31 Dec,2020")
// document.write("Later Date: "+laterDate)

//Chapter 31-34 Task 9
// var now=new Date();
// var millisecNow=now.getTime()
// var ramzan=new Date("18 June,2015")
// var msRamzan=ramzan.getTime()
// var msDiff=millisecNow-msRamzan
// var days=Math.round(msDiff/(1000*3600*24))
// document.write(days+" days have passed since 1st Ramzan,2015")

//Chapter 31-34 Task 10
// var ref=new Date("5 Dec,2015");
// var millisecRef=ref.getTime()
// var beg=new Date("1 Jan,2015")
// var msBeg=beg.getTime()
// var msDiff=millisecRef-msBeg
// var sec=Math.round(msDiff/(1000))
// document.write("On reference date "+ref+"<br>")
// document.write(sec+" seconds had passed since beginning of 2015")

//Chapter 31-34 Task 11
// var now=new Date();
// var year=now.getFullYear();
// var month = now.getMonth();
// var day=now.getDate();
// var hours = now.getHours()
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();
// var newHours=hours-1
// var newDate=new Date(year,month,day,newHours,minutes,seconds)
// document.write("Current date is: "+now+"<br>")
// document.write("1 hour ago it was "+newDate)

//Chapter 31-34 Task 12
// var now=new Date();
// var year=now.getFullYear();
// var month = now.getMonth();
// var day=now.getDate();
// var hours = now.getHours()
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();
// var newYear=year-100
// var newDate=new Date(newYear,month,day,hours,minutes,seconds)
// document.write("Current date is: "+now+"<br>")
// document.write("100 years ago it was "+newDate)

//Chapter 31-34 Task 13
// var now=new Date();
// var userInput=parseInt(prompt("Enter your age: "))
// var birthYear=now.getFullYear()-userInput
// document.write("Your age is: "+userInput+"<br>")
// document.write("Your birth year is: "+birthYear)

//Chapter 31-34 Task 14
// var now=new Date();
// var month = now.getMonth()
// var units=410
// var charge=16
// var amount=units*charge;
// var surcharge=350
// var late=amount+surcharge;
// var userName=prompt("Enter your name: ")
// document.write("<h1>K-Electric Bill</h1>"+"<br>")
// document.write("Customer Name is: "+userName+"<br>")
// document.write("Number of units: "+units+"<br>")
// document.write("Charges per unit: "+charge+"<br>")
// document.write("Net Amount Payable(within due date): "+amount+"<br>")
// document.write("Late Amount surcharge: "+surcharge+"<br>")
// document.write("Gross Amount Payable(After due date): "+late)

//Chapter 35-38 Task 1
// function date(){
//     now=new Date();
//     return now;
// }
// document.write(date())

//Chapter 35-38 Task 2
// function greet(firstName,lastName){
//     return firstName+" "+lastName
// }
// var fName=prompt("Enter your first Name:")
// var lName=prompt("Enter your last Name:")
// alert("Hello "+greet(fName,lName))

//Chapter 35-38 Task 3
// function add(num1,num2){
//     result=parseInt(num1)+parseInt(num2)
//     return result
// }
// var num1=prompt("Enter first num: ")
// var num2=prompt("Enter second num:")
// document.write("Result is: "+add(num1,num2))

//Chapter 35-38 Task 4
// function calc(num1,op,num2){
//     if(op==="+"){
//         return parseInt(num1)+parseInt(num2)
//     }
//     else if(op==="-"){
//         return parseInt(num1)-parseInt(num2)
//     }
//     else if(op==="*"){
//         return parseInt(num1)*parseInt(num2)
//     }
//     else if(op==="/"){
//         return parseInt(num1)/parseInt(num2)
//     }
//     else{
//         alert("Entered wrong operator")
//     }
// }
// var num1=prompt("Enter first no: ")
// var op=prompt("Enter operator: ")
// var num2=prompt("Enter second no: ")
// document.write(num1+" "+op+" "+num2+" = "+calc(num1,op,num2))

//Chapter 35-38 Task 5
// function square(num){
//     return num*num
// }
// document.write("Square of 10 is "+square(10))

//Chapter 35-38 Task 6
// function fact(num){
//     var result=1
//     for (var i=num;i>0;i--){
//         var result=result*i
//     }
//     return result
// }
// document.write("Factorial of 6 is: "+fact(6))

//Chapter 35-38 Task 7
// function counting(num1,num2){
//     for(i=num1;i<=num2;i++){
//         document.write("Counting: "+i+"<br>")
//     }
// }
// var num1=prompt("Enter starting number: ")
// var num2=prompt("Enter ending number: ")
// counting(num1,num2)

//Chapter 35-38 Task 8
// function Hyp(Base,Perpendicular){
//     function square(num){
//             return num*num
//          }
//     var BaseSq=square(Base)
//     var PerpSq=square(Perpendicular)
//     return (BaseSq+PerpSq)**(1/2)
// }
// var base=prompt("Enter base: ")
// var perp=prompt("Enter Perp: ")
// var result=Hyp(base,perp)
// document.write("Hypotenous is: "+result)

//Chapter 35-38 Task 9
// function area(width,height){
//     var result=width*height
//     return result
// }
// AreaValue=area(10,20)
// document.write("Area of fixed value is: "+AreaValue+"<br>")
// var width=prompt("Enter value of width: ")
// var height=prompt("Enter value of height: ")
// AreaVariable=area(width,height)
// document.write("Area of variable value is: "+AreaVariable)

//Chapter 35-38 Task 10
// function isPalindrome(s) {
//     var sRev = '';
//     for (var i=s.length; i>0; i--) {
//         sRev += s[i-1] ;
//     }
//     return s==sRev;
// }
// document.write(isPalindrome("madam"))

//Chapter 35-38 Task 11
// var str="the quick brown fox"
// function conv(str){
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(conv(str))

//Chapter 35-38 Task 12
// var str="Web Development Tutorial"
// function long(str){
//     var array1=str.split(" ")
//     var result=array1[0]
//     for(var i=0;i<array1.lenght;i++){
//         if(result.length<array1[i].lenght){
//             result=array1[i]
//         }
//     }
//     return result
// }
// document.write(long(str))

//Chapter 35-38 Task 13
// function char_count(str, letter) {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write(char_count("Moiz Raza","a"))

//Chapter 35-38 Task 14
// function calcCircumference(radius){
//     result=2*Math.PI*radius
//     document.write("Circumference of circle is: "+result+"<br>")
// }
// function calcArea(radius){
//     result=Math.PI*(radius**2)
//     document.write("Area of circle is: "+result+"<br>")
// }
// var radius=prompt("Enter radius of circle: ")
// calcCircumference(radius)
// calcArea(radius)
