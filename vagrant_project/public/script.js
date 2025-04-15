document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const user = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Send to server via AJAX POST
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/register', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const message = document.getElementById('message');
      if (xhr.status === 201) {
        message.style.color = 'green';
        message.textContent = 'Registration successful!';
        document.getElementById('registrationForm').reset();
      } else {
        message.style.color = 'red';
        message.textContent = 'Error registering user.';
      }
    }
  };
  xhr.send(JSON.stringify(user));
});
