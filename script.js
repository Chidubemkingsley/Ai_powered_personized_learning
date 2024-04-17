function saveInfo() {
  const studentName = document.getElementById('studentName').value;
  const gradeLevel = document.getElementById('gradeLevel').value;
  localStorage.setItem('studentName', studentName);
  localStorage.setItem('gradeLevel', gradeLevel);
  document.getElementById('displayStudentName').textContent = studentName;
}

function submitAnswers() {
  const answer1 = document.getElementById('answer1').value;
  const answer2 = document.getElementById('answer2').value;
  const answer3 = document.getElementById('answer3').value;
  // Here you can implement logic to assess the answers and provide feedback
  alert('Answers submitted successfully!');
}

document.addEventListener('DOMContentLoaded', function() {
  const studentName = localStorage.getItem('studentName');
  if (studentName) {
    document.getElementById('displayStudentName').textContent = studentName;
  }
});

