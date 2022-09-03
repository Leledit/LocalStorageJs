export class LocalStorage{

    constructor(controladorSolicitante){
        this.controladorSolicitante = controladorSolicitante;
    }

    cadastrarDadosDoCLienteNoLocalStorage(dadosCliente){
        
        if(localStorage.length == 0){
            localStorage.setItem("id",JSON.stringify(0));
            this.cadastrarDadosDoCLienteNoLocalStorage(dadosCliente);
           
        }else{
            let proximoID = parseInt(localStorage.getItem("id")) + 1;
            localStorage.setItem("id",JSON.stringify(proximoID));
            localStorage.setItem(proximoID,JSON.stringify(dadosCliente));
            this.controladorSolicitante.exibirMensagem("Sucesso ao cadastrar um novo Cliente");
        }
    }

    buscarCLientesCadastrados(){
        let objetoClientes = [];
        
        if(localStorage.length != 0){
            for(let i = 0; i <= parseInt(localStorage.getItem("id")); i++){
                let dadosCliente = localStorage.getItem(i);
                dadosCliente = JSON.parse(dadosCliente);
                objetoClientes[i] =  dadosCliente;
            }
        }
     
     
       this.controladorSolicitante.exibirClientesCadastrados(objetoClientes);
    }

    excluirCliente(idCliente){
      
     
        localStorage.removeItem(idCliente);
        this.controladorSolicitante.exibirMensagem("cliente excluido com sucesso");
        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    buscarDadosDoCliente(idCliente,calback){
        let dadosCliente = localStorage.getItem(idCliente);
        calback(JSON.parse(dadosCliente));
    }

    alterarDadosCliente(id,dadosCliente){
        localStorage.setItem(id,JSON.stringify(dadosCliente));
        this.controladorSolicitante.exibirMensagem("Dados do cliente alterados com sucesso");
        this.controladorSolicitante.resetarConfiguracoesDosBotoes();
    }
}