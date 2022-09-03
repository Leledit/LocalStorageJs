import { Cliente } from "./controler/Cliente.js";

const cliente = new Cliente();






/*

recuperarClientesCadastrados();
criandoEventoDeClickExcluir();

function criandoEventoDeClickExcluir(){
    let botaoExcluir = document.querySelectorAll(".btnExcluir");

    console.log(botaoExcluir);
    botaoExcluir.forEach((botao)=>{
        botao.addEventListener("click",(event)=>{
            let idCliente = event.target.parentNode.firstElementChild.innerHTML;
            let mensagem = "cliente excluido com sucesso";
            localStorage.removeItem(idCliente);
            exibiPopUp(mensagem);
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    });
}

botaoEnviar.addEventListener("click", (event)=>{
    event.preventDefault();
   
    let dadosCliente ={
        nome : campoNome.value,
        email : campoEmail.value,
        cidade : campoCidade.value,
        estado : campoEstado.value
    };

     cadastrandoDadosCliente(dadosCliente);
     recuperarClientesCadastrados(); 
     limparCamposForm();          
     exibiPopUp("Cadastro efetuado com sucesso!!!");
    
});

function cadastrandoDadosCliente(dadosCliente){

    let proximoID = localStorage.key(0);

    if(proximoID == null){
        proximoID = 0;
    }else{
        proximoID = parseInt(proximoID) + 1; 
    }

    localStorage.setItem(proximoID,JSON.stringify(dadosCliente));
    setTimeout(() => {
        location.reload();
    }, 1000);
}


function recuperarClientesCadastrados(){
    
    let qtdClientes = localStorage.key(0);

    if(qtdClientes == null){
     
    }else{
    
        qtdClientes = parseInt(qtdClientes);

        
        let linhaDatabela = " ";

        for(let i = 0; i <= qtdClientes; i++){
       
            let dadosCliente = localStorage.getItem(i);
            dadosCliente = JSON.parse(dadosCliente);

            linhaDatabela = linhaDatabela + montandoLinhaDaTabela(dadosCliente,i);
        }

        dadosTabela.innerHTML = linhaDatabela;

    }
}


function montandoLinhaDaTabela(dadosCliente ,id){
    return `
    <tr>
        <th scope="row">${id}</th>
        <td>${dadosCliente.nome}</td>
        <td>${dadosCliente.email}</td>
        <td>${dadosCliente.cidade}</td>
        <td>${dadosCliente.estado}</td>
        <td class="btnExcluir">Excluir</td>
    </tr>
`;
}

function exibiPopUp(mensagem){
    popUpCadatro.innerHTML = mensagem;
    popUpCadatro.style = "display:block";
    setInterval(function(){
        popUpCadatro.style= "display:none";
    },3000);
}

function limparCamposForm(){
    campoNome.value = "";
    campoEmail.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}*/