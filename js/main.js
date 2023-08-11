document
  .getElementById("addStudentsBtn")
  ,addEventListener("click", function () {
    var students = [];
    for (var i = 0; i < 5; i++) {
      var name = prompt("Enter student name " + (i + 1) + ":");
      var mark = parseInt(prompt("Enter student mark " + (i + 1) + ":"));

      var student = {
        name: name,
        mark: mark,
        grade: "",
      };

      students.push(student);
    }


    calculateGrades(students);

    var studentInfo = document.createElement("div");
    studentInfo.classList.add("student-info");
    for (var j = 0; j < students.length; j++) {
      var studentData = document.createElement("p");
      studentData.textContent =
        "Student Name: " +
        students[j].name +
        ", Mark: " +
        students[j].mark +
        ", Grade: " +
        students[j].grade;
      studentInfo.appendChild(studentData);
    }
    document.querySelector(".content").appendChild(studentInfo);
  });

function calculateGrades(students) {
  for (var i = 0; i < students.length; i++) {
    var mark = students[i].mark;

    if (mark >= 100) {
      students[i].grade = "A";
    } else if (mark >= 80) {
      students[i].grade = "B";
    } else if (mark >= 70) {
      students[i].grade = "C";
    } else if (mark >= 50) {
      students[i].grade = "D";
    } else {
      students[i].grade = "F";
    }
  }
}
