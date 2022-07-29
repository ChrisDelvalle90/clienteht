
function cadastrar(){
    let nome = document.getElementById("campoNome").value
    let email = document.getElementById("campoEmail").value
    let linkedin = document.getElementById("linkedin").value
    let imagem = document.getElementById("campoImagem").value

    document.getElementById("campoNome").value = ""
    document.getElementById("campoEmail").value = ""
    document.getElementById("linkedin").value = ""
    document.getElementById("campoImagem").value = ""

    if(nome == "" || email == "" || linkedin == "" || imagem == "")
    {
        alert("Preencha os todos os campos!")
    }
    else
    {
        let clientes = `
        <div id="campoCliente">
            <img src="${imagem}" alt="" id="imagem">
            <div id="divDados">
                <h3>${nome}</h3>
                <h3><a href="mailto:${email}?subject=Assunto">${email}</a></h3>
                <h3><a href="${linkedin}"target="_blank">${linkedin}</a></h3>
            </div>
        </div>
        `
        let divClientes = document.getElementById("clientes").innerHTML
        let resultadoFinal = divClientes + clientes
        document.getElementById("clientes").innerHTML = resultadoFinal
    }

}

