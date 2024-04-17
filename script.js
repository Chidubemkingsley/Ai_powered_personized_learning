// Function to start a quiz or test
function startAssessment(assessmentTitle) {
    alert(`Starting ${assessmentTitle}...`);
    // Additional logic to start the assessment can be added here
}

document.addEventListener('DOMContentLoaded', function() {
    const assessmentButtons = document.querySelectorAll('#assessment .assessment-item button');
    assessmentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const assessmentTitle = this.parentNode.querySelector('h3').textContent;
            startAssessment(assessmentTitle);
        });
    });
});

