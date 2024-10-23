const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
  const inputNomeAgenda = document.getElementById('nome-agenda');
  const inputTelefoneAgenda = document.getElementById('telefone-agenda');

  if (nome.includes(inputNomeAgenda.value)) {
    alert(`O nome : ${inputNomeAgenda.value} já foi inserido`);
  } else {

  nome.push(inputNomeAgenda.value);
  telefone.push(parseFloat(inputTelefoneAgenda.value));
  
  let linha = '<tr>';
  linha += `<td>${inputNomeAgenda.value}`;
  linha += `<td>${inputTelefoneAgenda.value}`;
  linha += '</tr>'; 
  
  linhas += linha;
  }
  
  inputNomeAgenda.value = '';
  inputTelefoneAgenda.value = '';
}

function atualizaTabela() {
  const corpotabela = document.querySelector('tbody');
  corpotabela.innerHTML = linhas;
} 