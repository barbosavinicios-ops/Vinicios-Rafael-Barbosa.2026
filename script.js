// Mensagem ao clicar no botão
document.getElementById('botaoMensagem').addEventListener('click', () => {
    alert('Você clicou no botão!');
});

// Validação simples do formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio real do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Sua mensagem foi recebida.`);
    // Limpa o formulário
    this.reset();
});