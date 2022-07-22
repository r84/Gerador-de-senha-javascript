let sliderElement = document.querySelector("#slider");                                   // esse comando irá pegar o valor escolhido no slider.
let buttonElement = document.querySelector("#button");                                   // e esse irá acionar o botão que irá rodar o algoritmo de gerar senha.

let sizePassword = document.querySelector("#valor");                                     // aqui iremos mostrar ao usuário a quantidade de caracteres selecionado de acordo com sua posição no slider.
let password = document.querySelector("#password");                                      // aqui mostraremos a senha gerada.

let containerPassword = document.querySelector("#container-password");                  // relação do container que irá mostrar a senha criada, que está com o atributo hide na classe.

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789";         // aqui definimos os caracteres que irão fazer parte da senha gerada.        
let novaSenha = "";                                                                     // variável que irá armazenar a senha que vai ser copiada ao ser clicada.

sizePassword.innerHTML = sliderElement.value;                                           //  mostrando o valor da posição do slider na página.         

slider.oninput = function(){
    sizePassword.innerHTML = this.value;                                                 // o valor do slider aparecerá de acordo com a posição em que estiver.

}

function generatePassword(){                                                             // função que irá gerar a senha.
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){                    // dentro do laço serão gerados os caracteres aleatórios até que a quantidade de caracteres seja igual o valor do slider.       
        pass += charset.charAt(Math.floor(Math.random() * n));    
 }

    containerPassword.classList.remove("hide");                                          // removendo a classe hide, que impedia de mostrar o container com a senha gerada.
    password.innerHTML = pass;                                                           // atribuindo a senha gerada ao conteiner em que ela deve ser mostrada.
    novaSenha = pass;                                                                    // atribuindo a senha criada a variável que irá colá-la.
}

function copyPassword(){                                                    
    navigator.clipboard.writeText(novaSenha);                                            // copiando a senha gerada.
    alert("Senha copiada com sucesso!");                                                 // avisando que a senha foi copiada.
}