document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const resetForm = document.getElementById('resetForm');

  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const msg = document.getElementById('signupMsg');
      if (msg) {
        msg.textContent = 'Account setup is ready. Please continue to sign in.';
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const msg = document.getElementById('loginMsg');
      if (msg) {
        msg.textContent = 'You are signed in successfully.';
      }
    });
  }

  if (resetForm) {
    resetForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const msg = document.getElementById('resetMsg');
      if (msg) {
        msg.textContent = 'Password reset request received. Check your email.';
      }
    });
  }
});
