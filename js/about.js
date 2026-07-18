document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('submitBtn');
  const box = document.getElementById('suggestionBox');
  const feedback = document.getElementById('feedbackMsg');

  if (button && box && feedback) {
    button.addEventListener('click', () => {
      if (box.value.trim() === '') {
        feedback.textContent = 'Please write a suggestion before submitting.';
        feedback.style.display = 'block';
      } else {
        feedback.textContent = 'Thank you for your suggestion. We appreciate your feedback.';
        feedback.style.display = 'block';
        box.value = '';
      }
    });
  }
});
