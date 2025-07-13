// // reverse the array 

// let array1 = [1,2,3]
// let array2 = [10,20,30]


// function reverse(array){ 
//   let rev = []
//   for (let i=array.length-1; i>=0; i--){
//     rev.push(array[i])
//   }
//   return rev
// }

// let output1 = reverse(array1)
// let output2 = reverse(array2)

// console.log(output1)
// console.log(output2)
































// find second largest number in an array 


// let array1 = [10,5,20,8]
// let array2 = [1,2,2,3]

// let  max = max2 = 0

// function highest(array){
//   for ( let i=0; i<array.length; i++){
//     if (array[i]>max2){
//       max2= array[i]
//       max =max2
//     }
//   }
//   return max2
// }

// let output1 = highest(array1)
// let output2 = highest(array2)

// console.log(output1)
// console.log(output2)































// remove duplicates from array 



// let array1 = [1,2,2,3]
// let array2 = [5,5,5,1]



// function noDuplicates(array){
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     if (!newArray==array[i]){
//       console.log(newArray)
//       newArray.push(array[i])
//     }
//   }
//   return newArray
// }


// let output1 = noDuplicates(array1)
// let output2 = noDuplicates(array2)

// console.log(output1)
// console.log(output2)


























// check if two arrays are equal


// let array1= [[1,2,3], [1,2,3]]
// let array2 = [[1,2],[2,1]]

// function equal(array){
//   let flag
//   for ( let i = 0; i<array.length; i++){
//     for (let j=0; j<array.length; j++){
//       if (array[i]!=array[j]){
//         flag = false
//       }else if (array[i]==array[j]) {
//         flag =true
//       }
//     }
//   }
//   return flag
// }


// let output1 = equal(array1)
// let output2 = equal(array2)

// console.log(output1)
// console.log(output2)


























// rotate array k times to the right

// let array1= [1,2,3,4]
// let k1= 2

// // array1.unshift()

// let array2 = [10,20,30]
// let k2 = 1

// function rotate(array,k){
//   for(let i=1; i<=k; i++) {
//     let lastElement = array.pop()
//     array.unshift(lastElement)
//   }
//   return array
// }

// let output1 = rotate(array1,k1)
// let output2 = rotate(array2,k2)

// console.log(output1)
// console.log(output2)


























// count vowels in a String


// let array1 = "hello"
// let array2 = "JAVASCRIPT"
// let count = 0
// // array1.toLowerCase()
// // console.log(array2.toLowerCase())

// function vowels(array) {
//   let str = array.toLowerCase()
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] = 'a') || (str[i]= 'e')|| (str[i]= 'i')|| (str[i] ='o')|| (str[i]='u')){
//       // console.log(str[i])
//       count++
//     }
// }
// return count
// }

// let output1 = vowels(array1)
// let output2 = vowels(array2)

// console.log(output1)
// console.log(output2)



























// print triangle pattern using loops



// let a=3
// let b=2

// for (let i=1; i<=a; i++){
//   for (let j=i; j<=i; j++){
//     console.log('*')
//   }
//   // console.log("\n")
// }

































// factorial using recursion


// let a = 5
// let b = 3

// function factorial(num) {
//   let output
//   for(let i=1; i<=num; i++){
//     output = output*i
//   }
//   return output
// }

// let output = factorial(a)

// console.log(output)


































// check if number is prime 



// let num1 = 7
// let num2 = 9
// let primenum = true

// function prime(num){
// for (let i = 2; i < num1; i++) {
//   if (num1 % i == 0) {
//     primenum = false
//     break
//   } 
// }
// return primenum
// }

// console.log(prime(num1))
