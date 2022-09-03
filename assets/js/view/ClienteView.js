export class ClienteView{

    constructor(controladorCLiente){   
        this.controladorCliente = controladorCLiente;                     
        this.botaoEnviar = document.querySelector("#btnEnviar");
        this.campoNome = document.querySelector("#campNome");
        this.campoEmail = document.querySelector("#campEmail");
        this.campoCidade = document.querySelector("#campCidade");
        this.campoEstado = document.querySelector("#campEstado");
        this.dadosTabela = document.querySelector("tbody");
    }

    adicionarEventoDeClickAosBotoes(){
        this.botaoEnviar.addEventListener("click",(event)=>{
            event.preventDefault();
            let dadosCliente ={
                "nome": this.campoNome.value,
                "email": this.campoEmail.value,
                "cidade": this.campoCidade.value,
                "estado": this.campoEstado.value
            };
            console.log("clicou");
            this.controladorCliente.tratarDadosRecebidosDoFormulario(dadosCliente,this.botaoEnviar.textContent);
        });
    }

    limparDadosPresentesNoFromulario(){
        this.campoNome.value = "";
        this.campoEmail.value = "";
        this.campoCidade.value = "";
        this.campoEstado.value = "";
    }

    exibirDadosDoClienteNaTela(dadosCliente){
        let linhas = "";
        for(let i=0 ;i < dadosCliente.length;i++){
            if(dadosCliente[i] != null){
                linhas += this.montandoLinhaDaTabela(dadosCliente[i],i);
            }
        }
        this.dadosTabela.innerHTML = linhas;
        this.criandoEventoDeClickExcluir();
        this.criandoEventoDeClickEditar();      
    }

    montandoLinhaDaTabela(dadosCliente,id){
        return `
        <tr>
            <th scope="row">${id}</th>
            <td>${dadosCliente.nome}</td>
            <td>${dadosCliente.email}</td>
            <td>${dadosCliente.cidade}</td>
            <td>${dadosCliente.estado}</td>
            <td class="btnExcluir">Excluir</td>
            <td class="btnEditar">Editar</td>
        </tr>`;
    }
    
    criandoEventoDeClickEditar(){
        let botoesEditar = document.querySelectorAll(".btnEditar");
        botoesEditar.forEach(botao =>{
            botao.addEventListener("click",(event)=>{
                this.controladorCliente.editarCliente(event.target.parentNode.firstElementChild.innerHTML);
            });

        
        });
    }

    criandoEventoDeClickExcluir(){
        let botoesExcluir = document.querySelectorAll(".btnExcluir");
        botoesExcluir.forEach(botao =>{
            botao.addEventListener("click",(event)=>{
                this.controladorCliente.excluirCliente(event.target.parentNode.firstElementChild.innerHTML);
            });
        });
    }

    atualizarDadosFormulario(dadosClientes,idCliente){
        console.log(dadosClientes);
        this.campoNome.value = dadosClientes["nome"];
        this.campoEmail.value = dadosClientes["email"];
        this.campoCidade.value = dadosClientes["cidade"];
        this.campoEstado.value = dadosClientes["estado"];
        this.botaoEnviar.innerHTML = "Editar";
        this.botaoEnviar.setAttribute("data-id",idCliente);
    }

    buscarIdDoClienteNoFormularioDeEdicao(){
        return this.botaoEnviar.dataset.id;
    }
    alterarConfiguracoesDosBotoes(){
        this.botaoEnviar.removeAttribute("data-id");
        this.botaoEnviar.textContent = "Enviar";
    }
}