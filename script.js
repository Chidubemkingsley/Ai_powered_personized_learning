// Function to start a quiz or test
function startAssessment(assessmentTitle) {
    // Additional logic to determine the URL based on the assessment title
    let url;
    if (assessmentTitle === 'Quiz: Introduction to Math') {
        url = 'quiz_math.html'; // Replace with the URL of your quiz page
    } else if (assessmentTitle === 'Test: Multiplication') {
        url = 'test_multiplication.html'; // Replace with the URL of your test page
    } else {
        // Default URL if the assessment title is not recognized
        url = 'default_page.html'; // Replace with the URL of your default page
    }
    
    // Navigate to the URL
    window.location.href = url;
}

// Function to save student information
function saveInfo() {
    const studentName = document.getElementById('studentName').value;
    const gradeLevel = document.getElementById('gradeLevel').value;
    
    // Perform validation if needed
    
    // Example: Display student information
    alert(`Student Name: ${studentName}\nGrade Level: ${gradeLevel}`);
}

