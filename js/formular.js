const prevBtns = document.querySelectorAll('.btn-pre'); // Removed 'selectors:'
const nextBtns = document.querySelectorAll('.btn-next'); // Removed extra parentheses and 'selectors:'
const progress = document.getElementById('progress'); // Removed 'element:'
const formSteps = document.querySelectorAll('.form-step'); // Removed 'selectors:'
const progressSteps = document.querySelectorAll('.progress-step'); // Removed 'selectors:'

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => { // Corrected 'addEventListner' to 'addEventListener'
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => { // Corrected 'addEventListner' to 'addEventListener'
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.remove('active'); // Removed 'tokens:' and fixed the class removal
    });
    formSteps[formStepsNum].classList.add('active');
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => { // Added a missing '(' here
        if (idx < formStepsNum + 1) {
            progressStep.classList.add('active');
        } else {
            progressStep.classList.remove('active');
        }
    });

    const progressActive = document.querySelectorAll('.progress-step.active');
    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}