window.onload = function() {
  document.body.classList.add('not-loaded');
  // Welcome sequence
  const step1 = document.getElementById('welcome-step-1');
  const step2 = document.getElementById('welcome-step-2');
  const step3 = document.getElementById('welcome-step-3');
  const acceptBtn = document.getElementById('accept-btn');
  const overlay = document.getElementById('welcome-overlay');
  const darkOverlay = document.getElementById('dark-overlay');

  // Step 1: Show greeting
  setTimeout(() => {
    step1.style.opacity = 0;
    setTimeout(() => {
      step1.style.display = 'none';
      step2.style.display = 'block';
      step2.style.opacity = 1;
      // Step 2: Show gift message
      setTimeout(() => {
        step2.style.opacity = 0;
        setTimeout(() => {
          step2.style.display = 'none';
          step3.style.display = 'block';
          step3.style.opacity = 1;
          acceptBtn.style.display = 'inline-block';
        }, 800);
      }, 2000);
    }, 800);
  }, 2000);

  // Button click: redirect to flower-blowing-effect page (handled by HTML onclick)
};