//função de login
function login(){
    //javascript puro para captar valores 
    // var nome = document.getElementById("nome").value
    //   var nome = document.getElementById("nome").value

    ///uso do jquery para captar  valores
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "Maria" && senha === "anumero1"){
        const user = {
            name:nome,
            dataEntrada : new Date(),
            id: Math.floor(Math.random() * 100000)
        }
        localStorage.setItem("usuario", JSON.stringify(user))
        window.location.href = "../Loja"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.borderBottom = "3px solid red"
        document.getElementById("senha").style.borderBottom = "3px solid red"
    }

}

function showPassaword(){
    var inputSenha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type", "text")
        img_eye.setAttribute("src", "./Images/hide.png")
    }else{
        inputSenha.setAttribute("type", "password")
        img_eye.setAttribute("src", "./Images/view.png") 
    }
}

function fecharError(){
    document.getElementById("error-modal").style.display = "none"
    document.getElementById("nome").style.borderBottom = "2px solid #ffecd1"
    document.getElementById("senha").style.borderBottom = "2px solid #ffecd1"  
}



