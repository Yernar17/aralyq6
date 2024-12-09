//1 tapsyrma

let school = {
    name: "Amjilt",
    phoneNumber: 87776543221,
    students: [
    { studentName: "Jahanger", top: 2, progress: 85, lessons: 2 },
    { studentName: "Asylzhan", top: 3, progress: 75, lessons: 2 },
    { studentName: "Yerassyl", top: 2, progress: 80, lessons: 2 },
    { studentName: "Abylai", top: 3, progress: 95, lessons: 2 }
]
};

console.log(school);




// 2 tapsyrma

    let changeSchoolName = prompt('Jana at qurastyr');

    function schoolName() {
        return school.name = changeSchoolName;
    }

console.log(`Mekteptyn jana aty ${changeSchoolName} `);




//3 tapsyrma

let changeTelephone = prompt('Telephone');

function schoolName() {
    return school.phoneNumber = changeTelephone;
}

console.log(`Nomer ${changeTelephone} `);




//4 tapsyrma



function listStudent(a) {
    return a.students.forEach(a => {
        alert(a.studentName)
    });
}


// 5 tapsyrma

function addStudent(a) {
    let sa = prompt('Student');
    let sa1 = +prompt('Top');
    let sa2 = +prompt('Progress');
    let sa3 = +prompt('Lessons');
    return a[6] = {studentName: sa, top: sa1, progress: sa2, lessons: sa3}
}

console.log(addStudent);
