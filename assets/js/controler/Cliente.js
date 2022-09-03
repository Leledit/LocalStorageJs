import { ClienteView } from "../view/ClienteView.js";
import { PopUpView } from "../view/PopUpView.js";
import { LocalStorage } from "./LocalStorage.js";

export class Cliente{


    constructor(){
        this.clienteView = new ClienteView(this);
        this.localStorage = new LocalStorage(this);
        this.popUpView = new PopUpView();
        this.criarEventoDeClickBotoes();
        this.solicitarDadosDosClientesJaCadastrados();
    }

    criarEventoDeClickBotoes(){
        this.clienteView.adicionarEventoDeClickAosBotoes();
    }

    tratarDadosRecebidosDoFormulario(dadosCliente,textoBotao){
        if((dadosCliente.nome == "") || (dadosCliente.nome == null)){
           console.log("campo nome deve ser prenchido ok");
        }else if((dadosCliente.email == "") || (dadosCliente.email == null)){
            console.log("o campo email nao pode estar vazio")
        }else if((dadosCliente.cidade == "") || (dadosCliente.cidade == null)){
            console.log("o campo cidade nao pode estar vazio");
        }else if((dadosCliente.estado == "") || (dadosCliente.estado == null)){
            console.log("o campo estado nao pode estar vazio");
        }else{
            if(textoBotao == "Enviar"){
                this.localStorage.cadastrarDadosDoCLienteNoLocalStorage(dadosCliente);
            }else{
                let id =  this.clienteView.buscarIdDoClienteNoFormularioDeEdicao();
                this.localStorage.alterarDadosCliente(id, dadosCliente);
            }
            this.clienteView.limparDadosPresentesNoFromulario();
            this.solicitarDadosDosClientesJaCadastrados();
        }
    }

    exibirMensagem(mensagemPopUp){
        this.popUpView.exibirPopUpNaTela(mensagemPopUp);
    }
    
    solicitarDadosDosClientesJaCadastrados(){
        this.localStorage.buscarCLientesCadastrados();
    }

    exibirClientesCadastrados(dadosCliente){
        this.clienteView.exibirDadosDoClienteNaTela(dadosCliente);
    }

    excluirCliente(idCliente){
        this.localStorage.excluirCliente(idCliente);
    }

    editarCliente(idCliente){
        this.localStorage.buscarDadosDoCliente(idCliente,dadosCliente=>{
            this.clienteView.atualizarDadosFormulario(dadosCliente,idCliente);
        });
    }
    resetarConfiguracoesDosBotoes(){
        this.clienteView.alterarConfiguracoesDosBotoes();
    }
}