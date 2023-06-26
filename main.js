const form = document.getElementById('form-agenda');
const nome = [];
const tel = [];

let linhas = "";


form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const nomeDuplicado = nome.includes(inputNome.value);

    if (nomeDuplicado) {
        alert(`O nome : "${inputNome.value}" já existe em sua lista de contatos`);
    } else {

        nome.push(inputNome.value);
        tel.push(parseInt(inputTelefone.value));


        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = "";
    inputTelefone.value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
