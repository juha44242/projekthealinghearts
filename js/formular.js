<script>
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
const progress = document.getElementById('progress');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let currentStep = 0;

function updateStepDisplay() {
    formSteps.forEach((step, index) => {
        if (index === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    progressSteps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList add('active');
        } else {
            step.classList.remove('active');
        }
    });

    progress.style.width = (currentStep / (formSteps.length - 1)) * 100 + '%';
}

prevButton.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStepDisplay();
    }
});

nextButton.addEventListener('click', () => {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        updateStepDisplay();
    }
});

// Initial step display update
updateStepDisplay();
</script>