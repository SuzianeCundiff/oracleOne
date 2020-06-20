//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(paciente){
    paciente.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        paciente.target.parentNode.remove(); // remove o elemento pai(tr) do alvo que foi clicado(td)
    }, 500);
    
})



/* 

Esse caso funciona para remover os pacientes já cadastrados, 
mas ao tentar remover um novo paciente, ele não funciona.
Isso porque o evento não fica reparando/escutando se novos pacientes foram cadastrados,
ele só se preocupa com os que ele já conhece.

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });    
});

*/