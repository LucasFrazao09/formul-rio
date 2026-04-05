function validacao() {

    let valido = true;

    let email = document.getElementById("email").value;
    let ncomp = document.getElementById("nome").value;
    let telefone = document.getElementById("tel").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let sozinho = document.getElementById("sozinho").value;
    let msgem = document.getElementById("msgem").value;
    let tipo = document.querySelector('select[name="casa"]: checked');
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

    if(cpf.length == 0) {
        alert("Obrigatório informar o CPF!");
        valido = false;
    } else if (cpf_dup.includes(cpf)) {
        alert("Esse CPF já foi cadastrado");
        valido = false
    }

    if(idade.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (idade < 18) {
        alert("Você deve ter mais de 18 anos para adotar!");
        valido = false
    }

    if(cidade.length == 0) {
        alert("Obrigatório o preenchimento!");
        valido = false;
    }

    if(!tipo) {
        alert("Selecione o tipo de moradia");
        valido = false;
    } else if (tipo && tipo.value === "apartamento" && quintal && quintal.value === "sim") {
        alert("Errro! Um apartamento não pode ter quintal.");
        valido = false
    } else if (tipo && tipo.value === "casa" && quintal && quintal.value === "nao") {
        alert("Por não ter um quintal, o espaço pode ser muito pequeno para o animal.");
        valido = false
    }

    if(!quintal) {
        alert("Diga se tem quintal ou não");
        valido = false;
    }

    if(!pets_anteriores) {
        alert("Informe se ja teve algum pet")
        valido = false;
} else if (pets_anteriores && pets_anteriores == "nao") {

    alert("Por você não ter experiências anteriores, a ONG pode disponibilizar um acompanhamento");

}

if(!fin) {
alert("Você tem condição financeira para um companheiro?");
valido = false;


} else if (fin && fin.value === "nao") {

 alert("Você marcou que nao tem condições financeiras, isso não será bom nem para você nem para o doguinho!!!");
 valido = false;


}

if (sozinho.length === 0) {
alert("Quanto tempo seu pet ficará sozinho?");
valido = false;

} else if (isNaN(sozinho)) {
 alert("informe o tempo somente com números");
 valido = false;

} else if (sozinho >= 8) {
    let porque = prompt("Ninguém gosta de ficar tanto tempo sozinho! Quais os motivos desse tempo todo?")

    if (!porque || porque.length === 0) {
        alert("Justifique para completar o cadastro");
valido = false;

    }

}

if(msgem.length === 0) {
    alert("Informe o motivo da adoção")
    valido = false;
} else if (msgem.length < 10) {
    alert("Muito breve, seja mais específico");
    valido = false;
} else if ((msgem === "porque sim") || (msgem === "porque quero") || (msgem === "Porque quero") || (msgem === "Porque sim")) {
alert("Abra seu coração! Resposta genérica");
valido = false;
} else if ((msgem === "Decidi hoje")) {
 alert("Decisão impulsiva! Tenha cuidado");
 valido = false

}





}