export class PopUpView{

    constructor(){
        this.popUpCadatro = document.querySelector("#alertaCadastro");
    }

    exibirPopUpNaTela(mensagemPopUp){
        this.popUpCadatro.innerHTML = mensagemPopUp;
        this.popUpCadatro.style = "display:block";
        setTimeout(() => {
            this.popUpCadatro.style = "display:none";
        }, 3000);
    }
}