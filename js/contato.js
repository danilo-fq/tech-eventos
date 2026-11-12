const form = document.getElementById('formContato');
const alerta = document.getElementById('alertaContato');
const alertaTexto = document.getElementById('alertaContatoTexto');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('contadorMensagem');
const sucesso = document.getElementById('sucessoContato');
const nomeSucesso = document.getElementById('nomeSucesso');
const botaoNovaMensagem = document.getElementById('novaMensagem');
const campos = form.querySelectorAll('input, textarea');

function atualizarContador() {
  contador.textContent = `${mensagem.value.length}/500`;
}

mensagem.addEventListener('input', atualizarContador);

campos.forEach((campo) => {
  campo.addEventListener('input', () => {
    if (campo.classList.contains('is-invalid') && campo.checkValidity()) {
      campo.classList.remove('is-invalid');
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let erros = 0;

  campos.forEach((campo) => {
    const valido = campo.checkValidity();
    campo.classList.toggle('is-invalid', !valido);
    if (!valido) erros++;
  });

  if (erros > 0) {
    alertaTexto.textContent = erros === 1
      ? 'Corrija o campo destacado para enviar.'
      : `Corrija os ${erros} campos destacados para enviar.`;
    alerta.classList.remove('d-none');
    form.querySelector('.is-invalid').focus();
    return;
  }

  alerta.classList.add('d-none');
  nomeSucesso.textContent = form.nome.value.trim().split(' ')[0];
  form.classList.add('d-none');
  sucesso.classList.remove('d-none');
});

botaoNovaMensagem.addEventListener('click', () => {
  form.reset();
  atualizarContador();
  campos.forEach((campo) => campo.classList.remove('is-invalid'));
  sucesso.classList.add('d-none');
  form.classList.remove('d-none');
  form.nome.focus();
});