const listOfStudents = [
    {name: "Nguyen Van A", score: 9.5},
    {name: "Nguyen Van B", score: 8.5},
    {name: "Nguyen Van C", score: 7.5},
    {name: "Nguyen Van D", score: 6.5},
    {name: "Nguyen Van E", score: 5.5},
    {name: "Nguyen Van F", score: 4.5},
    {name: "Nguyen Van G", score: 3.5},
    {name: "Nguyen Van H", score: 2.5}
]

function studentName(listOfStudents) {
    const StudentsOver5 = []; 
    const n = listOfStudents.length; 
    for (let i = 0; i < n; i++) {
        if ((listOfStudents[i].name.includes("a")) && (listOfStudents[i].score > 5)) {
            listOfStudents[i].name = listOfStudents[i].name.replace("a", "b");
            StudentsOver5.push(listOfStudents[i]);
        }
    }
    return StudentsOver5; 
}

console.log(studentName(listOfStudents));