document.addEventListener('DOMContentLoaded', () => {
  const userNome = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  const isHomePage = window.location.pathname.includes('home.html');

  if (document.getElementById('user-nome') && document.getElementById('user-email')) {
    if (isHomePage && (!userNome || !userEmail)) {
      window.location.href = "index.html";
    } else {
      document.getElementById('user-nome').textContent = userNome || 'Visitante';
      document.getElementById('user-email').textContent = userEmail || 'Email não informado';
    }
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = "index.html";
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.querySelector('.navegacao').classList.toggle('active');
    });
  }

  const wrapper = document.getElementById('form-wrapper');
  const loginForm = document.querySelector('.form-box.login');
  const registerForm = document.querySelector('.form-box.register');
  const showRegister = document.getElementById('show-register');
  const showLogin = document.getElementById('show-login');
  const openLoginBtn = document.getElementById('open-login');
  const closeLoginBtn = document.getElementById('close-login');
  const closeRegisterBtn = document.getElementById('close-register');
  const loginButton = loginForm?.querySelector('.btn');
  const registerButton = registerForm?.querySelector('.btn');
  const welcomeMsg = document.getElementById('welcome-msg');

  openLoginBtn?.addEventListener('click', () => {
    wrapper.classList.remove('hidden');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  showRegister?.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  showLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  function fecharFormulario() {
    wrapper.classList.add('hidden');
  }

  closeLoginBtn?.addEventListener('click', fecharFormulario);
  closeRegisterBtn?.addEventListener('click', fecharFormulario);

  function animarBotao(botao) {
    let esquerda = 0;
    botao.style.position = 'relative';
    const intervalo = setInterval(() => {
      esquerda += 10;
      botao.style.left = `${(esquerda % 40) - 20}px`;
    }, 50);
    setTimeout(() => {
      clearInterval(intervalo);
      botao.style.left = '0';
    }, 600);
  }

  loginButton?.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-senha').value.trim();

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos de login!');
      animarBotao(loginButton);
      return;
    }

    localStorage.setItem('userEmail', email);
    if (!localStorage.getItem('userName')) {
      localStorage.setItem('userName', 'Visitante');
    }
    atualizarTela();
    fecharFormulario();
  });

  registerButton?.addEventListener('click', function (e) {
    e.preventDefault();
    const nome = document.getElementById('register-nome').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const senha = document.getElementById('register-senha').value.trim();

    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos de registro!');
      animarBotao(registerButton);
      return;
    }

    localStorage.setItem('userName', nome);
    localStorage.setItem('userEmail', email);
    atualizarTela();
    fecharFormulario();
  });

  function atualizarTela() {
    const nome = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    if (welcomeMsg && (nome || email)) {
      welcomeMsg.textContent = `Bem-vindo, ${nome || email}!`;
      logoutBtn?.classList.remove('hidden');
      openLoginBtn?.classList.add('hidden');
    }
  }

  atualizarTela();


  const btnFundadores = document.getElementById('toggle-fundadores');
  const modalFundadores = document.getElementById('fundadores-modal');
  const closeFundadores = document.getElementById('close-fundadores');

  if (btnFundadores && modalFundadores && closeFundadores) {
    btnFundadores.addEventListener('click', (e) => {
      e.preventDefault();
      modalFundadores.classList.remove('hidden');
    });

    closeFundadores.addEventListener('click', () => {
      modalFundadores.classList.add('hidden');
    });

    modalFundadores.addEventListener('click', (e) => {
      if (e.target === modalFundadores) {
        modalFundadores.classList.add('hidden');
      }
    });
  }


  const btnIntro = document.getElementById('toggle-intro');
  const modalIntro = document.getElementById('intro-modal');
  const closeIntro = document.getElementById('close-intro');

  if (btnIntro && modalIntro && closeIntro) {
    btnIntro.addEventListener('click', (e) => {
      e.preventDefault();
      modalIntro.classList.remove('hidden');
    });

    closeIntro.addEventListener('click', () => {
      modalIntro.classList.add('hidden');
    });

    modalIntro.addEventListener('click', (e) => {
      if (e.target === modalIntro) {
        modalIntro.classList.add('hidden');
      }
    });
  }
});
