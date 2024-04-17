// Function to start a quiz or test
function startAssessment(assessmentTitle) {
    // Additional logic to determine the URL based on the assessment title
    let url;
    if (assessmentTitle === 'Quiz: Introduction to Math') {
        file:///C:/Users/USER/bash/bash/index.html = 'quiz_math.html'; //  the URL of your quiz page
    } else if (assessmentTitle === 'Test: Multiplication') {
       file:///C:/Users/USER/bash/bash/index.html = 'test_multiplication.html'; //  the URL of your test page
    } else {
        // Default URL if the assessment title is not recognized
        file:///C:/Users/USER/bash/bash/index.html = 'default_page.html'; // the URL of your default page
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

