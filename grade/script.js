const students = [];

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const marks = parseFloat(document.getElementById("marks").value);

  if (!name || !subject || isNaN(marks) || marks < 0 || marks > 100) {
    alert("Please enter valid details. Marks must be between 0 and 100.");
    return;
  }

  let grade = "";
  if (marks >= 90) grade = "A";
  else if (marks >= 75) grade = "B";
  else if (marks >= 50) grade = "C";
  else grade = "Fail";

  students.push({ name, subject, marks, grade });

  document.getElementById("resultMessage").textContent =
    `Result for ${name} in ${subject}: Grade ${grade}`;

  console.clear();
  console.log("Student List:\n");

  students.forEach((s, i) => {
    console.log(`${i + 1}. Name   : ${s.name}`);
    console.log(`Subject: ${s.subject}`);
    console.log(`Marks: ${s.marks}`);
    console.log(`Grade: ${s.grade}\n`);
  });

  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("resultMessage").textContent = "";

  students.length = 0;
  console.clear();
  console.log("All student data cleared.");
}
