var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;

        /*
            como filtrar, comparando letra a letra, utilizando a função substring.

            var resultado = nome.substring(0, this.value.length); //O primeiro parâmetro é o início, começando do 0 (que representa o primeiro caractere). O segundo parâmetro define o fim.
            
            if (!(resultado == this.value)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
            
        */

            // filtra, comparando letra a letra, utilizando expressão regular

            var expressaoReg = new RegExp(this.value, "i");

            if (!expressaoReg.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
        
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});