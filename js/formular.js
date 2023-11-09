const prevBtns = document.querySelectorAll('.btn-pre');
const nextBtns = document.querySelectorAll('.btn-next');
const sendBtn = document.querySelector('.btn-send');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');
const confirmationModal = document.getElementById('confirmationModal');

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (validateFormStep(formStepsNum)) {
            formStepsNum++;
            updateFormAndProgress();
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormAndProgress();
    });
});

sendBtn.addEventListener('click', () => {
    if (validateFormStep(formStepsNum)) {
        alert('Form submitted successfully!');
        openConfirmationModal();
    }
});

function validateFormStep(stepIndex) {
    const currentFormStep = formSteps[stepIndex];
    const inputs = currentFormStep.querySelectorAll('input[required]');

    for (const input of inputs) {
        if (!input.value.trim()) {
            alert(`Please fill in the ${input.name} field.`);
            return false;
        }
    }

    return true;
}

function updateFormAndProgress() {
    updateFormSteps();
    updateProgressbar();
}

function updateFormSteps() {
    formSteps.forEach(formStep => formStep.classList.remove('active'));
    formSteps[formStepsNum].classList.add('active');
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        idx < formStepsNum + 1
            ? progressStep.classList.add('active')
            : progressStep.classList.remove('active');
    });

    const progressActive = document.querySelectorAll('.progress-step.active');
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}

function openConfirmationModal() {
    confirmationModal.style.display = 'block';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
}
