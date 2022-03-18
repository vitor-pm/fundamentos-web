let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length <= 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1) {
        txtEmail.innerHTML = "Email Inválido";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML =
            "Texto muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && assuntoOk == true && emailOk == true) {
        alert("Enviado com sucesso");
    } else {
        alert("Preencha corretamento os campos antes de enviar");
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}
