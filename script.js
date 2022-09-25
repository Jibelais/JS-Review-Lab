//Beautiful code, you have used const and let in the appropriate way through the HW.

//Really only thing I would consider is on task E-H in the functions section, I would return the value in the function and to test it, 
//console.log(theFunctionName(with appropriate parameters))


/*
1. How do we assign a value to a variable? 
With the assignment operator

2. How do we change the value of a variable? 
With the assignment operator to a different value. 

3. How do we assign a existing variable to a new variable? 
With the assignment operator to a new variable. 

4. Remind me, what are declare, assign, and define?
A. Declare is creating a variable with var, let, or const keywords
B. Assign is to give a value to the variable 
C. Define is to assigning a value to a variable at the time of delaring it. 

5. What is pseudocoding and why should you do it? 

Pseudocoding helps to breakdown the problem into small problems and make it easier to convert each task into a programming language

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? hmmmm... 50:50? 
*/

// B. Strings 

let firstVariable 
firstVariable =  "Hello World"
firstVariable = 12345
let secondVariable = firstVariable 
secondVariable = "Goodbye World"

//1. What is the value of firstVariable? 
// firstVariable is 12345


//2. 
let yourName = "Jieun Pivarnik"
console.log ("Hello, my name is " + yourName)

//C. Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a*a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// D. The farm 

let animal = "cow"

if (animal === "cow") {
  console.log ("moooooo")
}else {
  console.log ("Hey! You are not a cow")
}

// E. Driver's Ed

const age = 21

if (age >= 16){
  console.log ("here are the keys!")
} else if (age < 16){
  console.log("Sorry, you're too young")
}


// II. Loops

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive: 
for (let i = 0;  i <= 10; i++ ){
  console.log(i)
}

// 2. Write a loop that will print out all the numbers from 10 up to and including 400: 
let i = 10
while (i <= 400 ){
  console.log(i)
  i = i + 1
}

//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000 
let x = 12
while (x <= 4000){
  console.log(x)
  x = x + 3
}

// B. Get even 
// 1. Print out the numbers that are within the range of 1 - 100

for (let i = 0; i <=100; i++){
  console.log(i)
}

//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let i = 0; i <=100; i++){
  if (i%2 === 0){
    console.log (i + " is an even number")
  }else console.log(i)
}

// C. Give me Five

//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for (let i = 0; i <= 100; i++){
  if ( i !== 0 && i%5 === 0){
     console.log (`I found a number ${i}. High five!`)
   }
}

//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three


for (let i = 0; i <= 100; i++){
  if ( i !== 0 && i%5 === 0 && i%3 === 0) console.log 
    (`I found a number ${i}. High five! three is a crowd!`)
  if ( i !== 0 && i%5 === 0) console.log (`I found a number ${i}. High five!`)
  else if ( i !==0 && i%3 === 0) console.log(`I found a number ${i}. three is a crowd!`)
}

// D. Savings Account 
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bank_account = 0 
let n = 0 
while (n <= 10){
  bank_account += n
  n +=1
}
console.log(`The total balance is $${bank_account}`)

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0 
n = 0
while (n <= 100){
  bank_account = bank_account + (n*2)
  n +=1
}
console.log(`The total balance is $${bank_account}`)


/* III. Arrays & Control flow
A . Talk about it: 
1. What are the things in an array called? Element
2. Do Arrays guarantee those things will be in order? Yes
3. What real-life thing could you model with an array? 
  a. online shopping cart
  b. to do list 
  c. contact list in my phone */

// B. Easy Does it
//1. Create an array that contains three quotes and store it in a variable called quotes

const quotes = ["Just do it!", "Yes we can!", "I love you"]

// C. Accessing elements 
const randomThings = [1, 10, "Hello", true]

// 1. How do you access the 1st element in the array?
// arrayName[index], i.e: randomThings[0]

// 2. Change the value of "Hello"to "World"
randomThings[2] = "World"

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// D. Change values 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// 1. What would you write to access the 3rd element of the array?
ourClass[2]

//Change the value of "Github" to "Octocat"
//you can also get the last element of an array with:
ourClass[ourClass.length - 1] = 'Octocat'

ourClass[4] = "Octocat"

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud city")
console.log (ourClass)

//E. Mix it up 
const myArray = [5, 10, 500, 20]

//1. 
myArray.push("Egon", "Mochi")

//2. 
myArray.shift(5)

//3. 
myArray.unshift("Bob Marely")

//4. 
myArray.pop() 

//5.  
myArray.reverse()
// .reverse() method actually mutated the array by changing the order of elements.  Now the myArray has the elements in different order than before .reverse().  I confirmed this by console.log(myArray)

//F. Biggie Smalls 

let num = 50

if (num < 100) console.log("little number")
else if (num >= 100) console.log ("big number")


//G. Monkey in the Middle
num = 7
if (num < 5) console.log ("little number")
else if (num > 10) console.log("big number")
else console.log("monkey")

//H. What's in Your Closet? 
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]

//1. 
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!" )
//2. 
kristynsCloset.splice(6, 0, "raybans")
//3.
kristynsCloset[5] = "staind knit hat"
//4. 
thomsCloset[0][0]
//5. 
thomsCloset[1][1]
//6.
thomsCloset[2][2]
//7. 
//nice use of template literals
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!` )
//8. 
thomsCloset[1][2] = "Footie Pajamas"


//IV. Functions
//A. printGreeting

function printGreeting (name){
  return `Hello there, ${name}!`
}

//B. printCool

function printCool(name){
  return `${name} is cool`
}

//C. calculateCube

function calculateCube(num){
  return num **= 3
}

//D. isVowel
//great error handling with toLowerCase()

const vowels = ["a", "e", "i", "o", "u"]
function isVowel(char){
  char = char.toLowerCase()
  let answer = false;
  for (i=0; i< vowels.length; i++){
    if (char === vowels[i]) answer = true
  }
  return answer
}

// E. getTwoLengths
function getTwoLengths(str1, str2){
  const stringArr = [str1.length, str2.length]
  console.log(stringArr)
}
getTwoLengths("hello", "you")

// F. getMultipleLengths
arrOfNums = []
function getMultipleLengths(arr){
  for (let i = 0; i < arr.length; i++){
    arrOfNums.push(arr[i].length)     
  }
}
getMultipleLengths(["hello", "what", "is", "up", "dude"])
console.log(arrOfNums)

//G. maxOfThree
function maxOfThree (x, y, z){
  if (x === y && x === z) console.log(x)
    else if( x >= y && x >= z ) console.log(x)
    else if (y >= x && y >= z ) console.log(y)
    else if (z >= x && z >= y ) console.log(z)
  //else if ( x === y || x === z|| y === z)
}
maxOfThree(7, 7, 3)


//H. printLongestWord 
let longestStr = ''
function printLongestWord(arr){
  for (let i = 0; i < arr.length ; i++){
    if (arr[i].length >= longestStr.length) 
      longestStr = arr[i]     
  }
  console.log(longestStr)
  
}
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])

// Object
// A. Make a user object
const user = {
  name: "John Lennon", 
  email: "JLennon@me.com",
  age: 42, 
  purchased: []
}

// B. Update the user
//1.
user.email = "JLennon2@gmail.com"
//2.
user.age = ++(user.age)

// C. Adding keys and values 
user.location = "Brookfield, CT"

// D. Shopaholic! 
// 1. 
user.purchased.push("carbohydrates")

// 2. 
user.purchased.push("peace of mind")

// 3. 
user.purchased.push("Merino Jodhpurs")

// 4. 
console.log(user.purchased[2])

// E. Object-within-object
// 1. 
user.friend = {
  name: 'Yoko Ono', 
  age: 43, 
  location: 'Tokyo, Japan', 
  purchased: []
}

// 2. 
console.log(user.friend.name)

// 3. 
console.log(user.friend.location)

// 4. 
user.friend.age = 55

// 5. 
user.friend.purchased.push("The One Ring")

// 6. 
user.friend.purchased.push("A latte")

// 7. 
console.log(user.friend.purchased[1])

// F. Loops
// 1. 
for (let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i])
}

//2. 
for (let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i])
}

// G. Functions can operate on objects
// 1.
function updateUser(){
  ++user.age
  user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

// 2. 
function oldAndLoud(person){
  ++person.age
  person.name = person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)





