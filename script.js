1

let numbers = [25, 45, 65, 1245, 1760 ]

console.log ( numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4])



2 

let personsArr = [
    {
        name: "lazare",
        age: 30,
        address : "tbilisi"
    },
    
    {
        name: "nuca",
        age: 19,
        address : "tbilisi"

    },

    {
        name: "giorgi",
        age: 22,
        address : "tbilisi"
    }
]

let index = 0
 3
console.log (`My name is ${personsArr[index].name} My age is ${personsArr[index].age} My address is ${personsArr[index].address}`)
console.log(`my name is ${personsArr[1].name} My age is ${personsArr[1].age} My addres is ${personsArr[1].address}`)
console.log (`my name is ${personsArr[2].name} My age is ${personsArr[2].age} My addres is ${personsArr[2].address}`)

4 



if (personsArr[1].age < 19) {
    console.log  ("I am a teenager")
} else {
   console.log ("I am an adult")
}

5 


let a = '';

for (let i = 23;  i < 24; i++) {
  a = a + i;
}

let b = ''
for (let i = 11; i < 12; i++) {
    b = b + i
}

let c =''
for(let i = 200; i < 210; i++) {
    c = c + i
}

let z = ''
for(let i = 122; i < 145; i++) {
    z = z + i
}
 let x = ''
 for(let i =1022; i < 1025; i++){
    x = x + i
 }


let num = [a, b, c, z, x]


console.log (num)



6 
 let p = 11
 switch (p) {
    case 8:
        console.log("this is eight")
        break
    case 9 :
        console.log("this is nine")
        break
    case 22: 
    console.log ("this is eleven")   
    default:
        console.log ("this is another number")  
        break
 }




 const currentDay = new Date().getDay()
 
 switch (currentDay ) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
 }



 