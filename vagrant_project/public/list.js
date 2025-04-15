// Fetch users from server
function loadServerUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/users', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      const userList = document.getElementById('userList');
      userList.innerHTML = '';
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.timestamp}</td>
        `;
        userList.appendChild(row);
      });
    }
  };
  xhr.send();
}

// Load users from localStorage
function loadLocalStorageUsers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const localStorageList = document.getElementById('localStorageList');
  localStorageList.innerHTML = '';
  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.timestamp}</td>
    `;
    localStorageList.appendChild(row);
  });
}

// Load both on page load
window.onload = function () {
  loadServerUsers();
  loadLocalStorageUsers();
};
