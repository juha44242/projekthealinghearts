  document.addEventListener('DOMContentLoaded', function () {
    const progressSteps = document.querySelectorAll('.progress-step');
    const formSteps = document.querySelectorAll('.form-step');
    const progressBar = document.getElementById('progress');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-pre');
    const sendButton = document.querySelector('.btn-send');
    const popup = document.getElementById('popup');

    let currentStep = 0;

    function updateProgress() {
      const progressValue = (currentStep / (progressSteps.length - 1)) * 100 + '%';
      progressBar.style.width = progressValue;
    }

    function updateStep() {
      formSteps.forEach((step, index) => {
        if (index === currentStep) {
          step.classList.add('active');
          progressSteps[index].classList.add('active');
        } else {
          step.classList.remove('active');
          progressSteps[index].classList.remove('active');
        }
      });
    }

    function openPopup() {
      popup.classList.add('open-popup');
    }

    function closePopup() {
      popup.classList.remove('close-popup');
      // You can add additional logic here if needed
    }

    nextButtons.forEach((button) => {
      button.addEventListener('click', function () {
        if (currentStep < formSteps.length - 1) {
          currentStep++;
          updateStep();
          updateProgress();
        }
      });
    });

    prevButtons.forEach((button) => {
      button.addEventListener('click', function () {
        if (currentStep > 0) {
          currentStep--;
          updateStep();
          updateProgress();
        }
      });
    });

    sendButton.addEventListener('click', closePopup);

    // Add an event listener to the OK button in the popup
    const okButton = document.querySelector('.btn-ok');
    okButton.addEventListener('click', closePopup);
  });
