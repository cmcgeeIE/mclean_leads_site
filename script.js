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
    } else {
        // If this is the last step, display the confirmation message
        document.getElementById('submit-button').style.display = 'none';
        document.getElementById('confirmation-step').style.display = 'block';
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
