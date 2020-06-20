var pacientes = document.querySelectorAll(".paciente");

// Calcula o IMC de todos os pacientes cadastrados
for(var position=0; position < pacientes.length; position++){
    
    var infoPeso = pacientes[position].querySelector(".info-peso");
    var infoAltura = pacientes[position].querySelector(".info-altura");
    var infoIMC = pacientes[position].querySelector(".info-imc");
    
    var peso = infoPeso.textContent;
    var altura = infoAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        infoIMC.textContent = "Peso inválido!";
        pacientes[position].classList.add("paciente-invalido"); // adiciona uma classe ao elemento 'pacientes' que altera o alguns elementos css da linha que contiver algum erro na tabela.
    }else if (!alturaEhValida){
        infoIMC.textContent = "Altura inválida!";
        pacientes[position].classList.add("paciente-invalido");
    }else{
        var imc = calculaIMC(peso, altura);
        infoIMC.textContent = imc;
    }    
}

// Calcula o IMC de um paciente.
function calculaIMC(peso, altura){
    return (peso/(altura * altura)).toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 700){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}

function validaGordura(gordura){
    if(gordura > 0 && gordura <= 100){
        return true;
    }else{
        return false;
    }
}