function validacao() {

    let valido = true;

    let email = document.getElementById("email").value;
    let ncomp = document.getElementById("nome").value;
    let telefone = document.getElementById("tel").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let sozinho = document.getElementById("sozinho").value;
    let msgem = document.getElementById("msgem").value;
    let casa = document.querySelector('select[name="casa"]: checked');
    let quintal = document.querySelector('select[name="casa"]: checked');
    let pets_anteriores = document.querySelector('select[name="pets_anteriores"]: checked');
    let fin = document.querySelector('select[name="financeiro"]: checked');
    let cpf = document.getElementById("cpf").value;
    let cpf_dup = [
        "2136599986",
        "15436523986",
        "35666591236",
        "13254659912"
    ]

    let termo = document.getElementById("aceitar");

  
  if(ncomp.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (ncomp.length <3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        valido = false
    }

    if(email.length === 0) {
        alert("Informe seu email");
        valido = false;
    } else if (!email.includes("@")) {
        alert("O email deve conter @");
        valido = false
    }

    if(telefone.length === 0) {
        alert("Informe seu telefone");
        valido = false;
    } else if (telefone.length <8) {
        alert("O telefone deve ter no mínimo 8 digitos");
        valido = false
    }

    if(ncomp.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (ncomp.length <3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        valido = false
    }

    if(ncomp.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (ncomp.length <3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        valido = false
    }

    if(ncomp.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (ncomp.length <3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        valido = false
    }

    if(ncomp.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (ncomp.length <3) {
        alert("O nome deve ter no mínimo 3 caracteres");
        valido = false
    }

}