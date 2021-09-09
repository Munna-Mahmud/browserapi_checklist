// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 


// setTimeout( () =>
// {console.log('Hi Sorry for late')}, 3500)

//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

// prompt('Enter your name');
// if(prompt === true){
//  alert(prompt + 200) 
// }

// let number= prompt('Entr Your number')
// if(number == true){
// var hi=  parseInt(number + 200);
// alert(hi)
// } 

// let users =(prompt('Enter Your number'))
// let fixed = 200;
// alert(users+fixed);

//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

// if (window.confirm("Do you really want to go?")) {
//     window.open("https://www.youtube.com/watch?v=DiXZCboAD08",);
//   } 

//৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 


// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
// Done 
/*
Local storage :
Capacity : 10MB
Accessible : Any Window 
Storage location : Browser Only 
 
Session Storage :
Capacity : 5mb
Accessible form : same tab
Storage location : Browser only 


*/


//৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 

/* first of all we write javacript code then our code in first term it's doing parse like  (create a tree )
then it convert in a machine code and then it's run in our browser 
1. code
2. create a tree with parse 
3. covert in machine code 
4. then run in browser
*/








 // 8) Synchronous & Asynchronous

 //Synchronous
 console.log("I am First")
 console.log("I am Second")
 console.log("I am Third")
 console.log("I am fourth")

 //Asynchronous

 console.log("I am First")

 setTimeout(() => {
    console.log("I am Second")
 }, 2000)

 setTimeout(() => {
    console.log("I am Third")
 }, 1000)
 

 console.log("I am fourth")



