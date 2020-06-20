/*
    Técnica utilizada -> AJAX: maneira de fazer uma requisição de forma assíncrona com JavaScript.

    Requisição assíncrona -> não para o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. 
*/

var botaoAdicionar = document.querySelector("#adicionar-pacientes-externo");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroRequest = document.querySelector("#erro-request");

        if(xhr.status == 200){
            erroRequest.classList.add("invisivel");
            
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);            
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroRequest.classList.remove("invisivel");
        }
    })

    xhr.send();
});