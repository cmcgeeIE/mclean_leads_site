var currentStep = 0;
var formSteps = document.querySelectorAll('.form-step');

function showStep(stepIndex) {
    formSteps.forEach(function(step, index) {
        if (index === stepIndex) {
            step.style.display = 'block';
        } else {
            step.style.display = 'none';
        }
    });
}

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
    if (currentStep === formSteps.length - 1) {
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('submit-button').style.display = 'block';
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
    if (currentStep < formSteps.length - 1) {
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('submit-button').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep);
});

document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'contact.html'; // Redirect to contact form
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'funny.html'; // Redirect to funny page
});


