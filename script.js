function verificacao() {
    let nome = document.getElementById('input-nome').value;
    let dt_Nascimento = document.getElementById('input-dtnasc').value;
    let email = document.getElementById('input-email').value;
    let telefone = document.getElementById('input-tel').value;

    if (nome == "") {
        alert('Nome, por favor')
    }
    if (dt_Nascimento == "") {
        alert('Data de Nascimento, por favor')
    }
    if (email == "") {
        alert('Email, por favor')
    }
    if (telefone == "") {
        alert('Telefone, por favor')
    }

}