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
    const StudentOver5 = [];
    let demand = "a"; 
    const n = listOfStudents.length; 
    for (let i = 0; i < n; i++) {
        if ((listOfStudents[i].name.includes(demand)) && (listOfStudents[i].score >= 5)) {
            listOfStudents[i].name.replace(demand, "b");
            StudentOver5.push(listOfStudents[i]);
        }
    }
    return StudentOver5; 
}

const result = studentName(listOfStudents); 
console.log(result);