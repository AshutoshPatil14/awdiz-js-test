// Count even & odd numbers

let array1 = [2,3,4,5]
let array2 = [11,14,16,17,19]
let even = 0
let odd = 0


for (let i=0; i<array2.length; i++){
  if(array2[i]%2 == 0){
    even++
  }else{
    odd++
  }
}


console.log("even: ", even, "\todd: ", odd)
// Output1: even:  2        odd:  2
// Output2: even:  2        odd:  3


























// All positive numbers 

let array1 = [1,2,3,4]
let array2 = [-1,0,5]

let flag = array1.every(ele => ele>0)

console.log(flag)






















// Find first nuber greater than 50

let array1 = [10,25,60,40]
let array2 = [45,52,19]
let greaterThan = 50

for(let i=0; i< array1.length; i++){
  if(array1[i]>greaterThan){
    console.log(array1[i])
    break
  }
}
















// Leap year checker

let input1 = 2024
let input2 = 2023
let leapYear = true

if((input1%4==0 && input1%100==0)|| input1%400==0){
  leapYear= false
}

console.log(leapYear)




























// // Double the elements 

let array1 = [1,2,3]
let array2 = [5,10]


let Double = array1.map(ele => ele*2)

console.log(Double)

























// // Filter out even numbers 

let array1=[1,2,3,4,5]
let array2=[10,15,20,25]

let odd=array1.filter(acc => acc%2==1)

console.log(odd)






























// Total character count in strings 

let array1= ['hi', 'world']
let array2= ['a', 'ab', 'abc']
// let count=0


let count= array1.reduce(acc => acc + array1[ele].length)

console.log(count)































// Get last 3 items 

let array1=[1,2,3,4,5]
let array2=[10,20,30,40]

let lastEle= array1.slice(array1.length-3,array1.length)

console.log(lastEle)































// // Remove element at index 2

let array1=[1,2,3,4]
let array2=[10,11,12,13]

let newArray= array1.splice(1,1)

console.log(array1)



























// capitalize first letter 


let array1=['hello', 'world']

for(let i=0; i<array1.length; i++){
  str=array1[i]

}


























// check divisibility by 5


let array1=[3,6,10,14]
let array2=[2,4,6]
let newArray= array1.some(ele => ele%5==0)

console.log(newArray)




























// find index of first negative

let array1=[1,2,-3,4]
let array2=[5,7,8]
let index=-1

for ( let i=0;i<array1.length; i++){
  if(array1[i]<0){
    index=i
    break
  }
}

console.log(index)