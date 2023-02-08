
// // // Trong js moi phan tu trong mang co the co kieu du lieu khac nhau
// // const carBrands = ["Honda", "Suzuki", "Yamaha", "1", false, 100, 2000, 1930, 394902, true]; 
// // for (let i = 0; i < carBrands.length; i++)
// //     console.log(carBrands[i]); 
// // let j = 0;
// // while (j < carBrands.length) {
// //     console.log(carBrands[j]) 
// //     j++;
// // }

// function sumOfTheOddOfTheArray(nums) {
//     let sum = 0;
//     let len = nums.length
//     for (let i = 0; i < len; i++) {
//         if (nums[i] % 2 == 0) {
//             sum += nums[i];
//         }
//     }
//     return sum; 
// }
// function findMax(nums) {
//     let max = nums[0]; 
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         if (max < nums[i]) {
//             max = nums[i]; 
//         }
//     }
//     return max; 
  
// }
// const nums = [10, 20, -5, 8, 7, 6, 3]; 
// console.log(sumOfTheOddOfTheArray(nums));
// console.log(findMax(nums));
// nums.push(1000);
// nums.pop();
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]); 
// } 
// console.log(nums); 


// // Object
// const student = {
//      age: 10, 
//      gpa: 8.5,
//      name: "Sang", 
//      classID: "9a",
//      hobbies: ["video game", "reading books", "meditating"],
//      address: {
//         postalCode: "2302", 
//         street: "D2", 
//         ward: "24",
//         district: {
//             code: "bt",
//             label: "Binh Thanh", 
//         }
//      }  
// }; 

// console.log(student.classID);

// console.log(student["classID"]); 

// const key = "classID"; 
// console.log(student[key]); 
// console.log("Student hobbies is: ", student.hobbies[2]); 

// console.log(student.address.district.label); 

// for (let key in student) {
//     console.log("Key: ", key); 
//     console.log("Value: ", student[key]); 
// }

// delete student.address; 
// for (let key in student) {
//     console.log("Key: ", key); 
//     console.log("Value: ", student[key]); 
// }

function getTotalSalary(employees) {
    let sum = 0; 
    for (let i = 0; i < employees.length; i++) {
        sum += employees[i].salary;
    }
    return sum; 
}

const employees = [
    {name: "john", age: 21, salary: 23000}, 
    {name: "Steve", age: 32, salary: 40000},
    {name: "Martin", age: 20, salary: 3000},
]; 

    console.log(getTotalSalary(employees)); 

function getDistance(pointA, pointB) {
    let distance = 0; 
    return Math.sqrt((pointA.x - pointB.x)**2 + (pointA.y - pointB.y)**2); 

}

const pointA = {
    x: -2, 
    y: 1, 
};

const pointB = {
    x: 4, 
    y: 3,
};
console.log(getDistance(pointA, pointB)); 














