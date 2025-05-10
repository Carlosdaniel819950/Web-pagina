const email = localStorage.getItem('userEmail');
const nome = localStorage.getItem('userName');


if (!email || !nome) {
  window.location.href = "index.html";
} else {
  document.getElementById('user-email').textContent = email;
  document.getElementById('user-nome').textContent = nome;
}


document.getElementById('logout-btn').addEventListener('click', () => {
  
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userName');
 
  window.location.href = "index.html";
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.querySelector('.navegação').classList.toggle('active');
});
