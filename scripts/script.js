function validacao() {

    const form = document.getElementById("formAdocao");

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
    let fin = document.getElementById("financeiro");
    let cpf = document.getElementById("cpf").value;
    let cpf_dup = [
        "2136599986",
        "15436523986",
        "35666591236",
        "13254659912"
    ]

    let termo = document.getElementById("aceitar");


    if (ncomp.length < 3)
        return alert("Nome inválido, deve ter mais de 3 letras.");

    if (!email.includes("@"))
        return alert("Email Inválido, deve conter @");

    if (tel.length < 8)
        return alert("Telefone Inválido");

    if (cpf == "")
        return ("CPF obrigatório!");

    if (cpf_dup.includes(cpf))
        return alert("CPF já cadastrado");

    if (idade < 18)
        return alert("Para realizar a adoção você deve ter mais de 18 anos.");

    if (cidade == "")
        return alert("Informe em qual cidade você reside (obrigatório)");

    if (tipo == "")
        return alert("Informe seu tipo de moradia.");

    if (!quintal)
        return alert("Informe sobre o seu quintal");

    if (sozinho == "" || isNaN(sozinho))
        return alert("Horas informadas inválidas!");

    if (msgem.length < 15)
        return alert("Motivo muito curto! Abra seu coração.");

    if (!pets_anteriores)
        return alert("Informe se ja teve algum pet")

    if (!termo)
        return alert("Aceite os termos para completar a adoção!");


    





}



