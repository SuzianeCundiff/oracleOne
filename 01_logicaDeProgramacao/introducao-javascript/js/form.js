var botaoAcicionar = document.querySelector("#adicionar-paciente");

// Adiciona paciente a tabela
botaoAcicionar.addEventListener("click", function(event){
    // previne que o formulário siga sua configuração padrão
    event.preventDefault();

    // cria o objeto form.
    form = document.querySelector("#cadastra-paciente");

    // recolhe informações do paciente apartir do formulário
    var paciente = recolheInfoDoForm(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        escreveMensagemDeErro(erros);
        return;
    }
    
    var mensagensDeErro = document.querySelector('#mensagem-erro');
    mensagensDeErro.innerHTML = "";

    adicionaPacienteNaTabela(paciente);
    // remove os dados inseridos pelo usuário assim que o form é submetido.
    form.reset();

});

function adicionaPacienteNaTabela(paciente){
    // monta a estrura HTML que deve ser adicionada ao arquivo principal
    var pacienteTr = montaTr(paciente);
    // adiciona o paciente na tabela
    var addTabela = document.querySelector("#tabela-pacientes");    
    addTabela.appendChild(pacienteTr);

}

function recolheInfoDoForm(info){

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome") );
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso") );
    pacienteTr.appendChild( montaTd(paciente.altura, "info-altura") );
    pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura") );
    pacienteTr.appendChild( montaTd(paciente.imc, "info-imc") );

    return pacienteTr;
}

function validaPaciente(paciente){
    var erros = [];

    if ( paciente.nome.length == 0 ){
        erros.push("Insira um nome");
    }
    if ( paciente.peso.length == 0 ){
        erros.push("Insira um valor em peso");
    }
    if ( paciente.altura.length == 0 ){
        erros.push("Insira um valor em altura");
    }
    if ( paciente.gordura.length == 0 ){
        erros.push("Insira um valor em gordura");
    }
    if ( !validaPeso(paciente.peso) ){
        erros.push("Peso Inválido");
    }
    if ( !validaAltura(paciente.altura) ){
        erros.push("Altura Inválida");
    }
    if ( !validaGordura(paciente.gordura) ){
        erros.push("Gordura Inválida");
    }

    return erros;
}

function montaLi(dado){
    var li = document.createElement("li");

    li.textContent = dado;

    return li;
}

function escreveMensagemDeErro(erros){
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";

    erros.forEach(erro => {
        ul.appendChild ( montaLi(erro) );
    });

    /** essa estrutura de repetição for equivale ao forEach utilizado.

    for (var i = 0; i < erros.length; i++){
        ul.appendChild ( montaLi(erros[i]) );
    }
    */
}