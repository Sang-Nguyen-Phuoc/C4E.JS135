const Students = [ 
    {name: "A", score: 9.5},
    {name: "B", score: 9}, 
    {name: "C", score: 8}, 
    {name: "D", score: 7}, 
    {name: "E", score: 10}, 
    {name: "F", score: 4}, 
    {name: "G", score: 9.3}, 
    {name: "H", score: 8.6}, 
    {name: "J", score: 7.8},  
]

function checkScore(Students) {
    let student = null; 
    let num = Students.length; 
    let maxScore = -1;
    for (let i = 0; i < num; i++) {
        if (maxScore < Students[i].score) {
            maxScore = Students[i].score; 
            student = Students[i]; 
        }
    }
    return student; 
}

function studentExcellent(Students) {
    const studentEx = []; 
    let num = Students.length;
    for (let i = 0; i < num; i++) {
        if (Students[i].score >= 8) {
            studentEx.push(Students[i]); 
        }
    }
    return studentEx; 
}

function studentScoreAsc(Students) {
    let num = Students.length;
    for (let i = 0; i < num - 1; i++) {
        for (let j = i; j < num; j++ ) {
            if (Students[i].score < Students[j].score) {
                let tmp = Students[i];
                Students[i] = Students[j];
                Students[j] = tmp;
                console.log(Students);
            }
        }   
    }
}

// console.log(checkScore(Students));
// console.log(studentExcellent(Students));
console.log(Students);
studentScoreAsc(Students);
