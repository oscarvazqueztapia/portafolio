
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const asunto = document.getElementById("asunto")
const form = document.getElementById("form")
const parrafo = document.getElementById("advertencia")

form.addEventListener("submit",e=>{
    e.preventDefault()
    let advertencia = ""
    let entrar = false

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(nombre.value.length >50){
        advertencia +="El nombre no debe contener mas de 50 caracteres <br>"
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        advertencia += "El email no es una direccion valida <br>"
        entrar = true
    }
    if(asunto.value.length >50){
        advertencia +="El asunto no debe contener mas de 50 caracteres <br> "
        entrar = true
    }

    if(mensaje.value.length >300){
        advertencia +="El mensaje no debe contener mas de 300 caracteres <br>"
        entrar = true    
    }

    if(entrar){
        parrafo.innerHTML = advertencia
    }
    else{
        parrafo.innerHTML = "Enviado <br>"
    }
    })
    
