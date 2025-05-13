// Scroll suave
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação de formulário
document.querySelector('form').addEventListener('submit', function (e) {
  const nome = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nome === '' || email === '') {
    e.preventDefault();
    alert('Por favor, preencha todos os campos.');
  } else {
    alert('Mensagem enviada com sucesso!');
  }
});

// Modo claro/escuro
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleThemeBtn.textContent = 
    document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// Filtro da galeria de esportes
document.getElementById('filtroEsporte').addEventListener('change', function () {
  const valorSelecionado = this.value;
  const imagens = document.querySelectorAll('.sports-gallery .esporte');

  imagens.forEach(img => {
    img.style.display = (valorSelecionado === 'todos' || img.classList.contains(valorSelecionado))
      ? 'inline-block'
      : 'none';
  });
});

// Loader
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

