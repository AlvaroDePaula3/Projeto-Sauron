
document.addEventListener("DOMContentLoaded", function() {
    //Essa parte do código corresponde a parte da preventiva
    //Funcionalidade: Preencher a Data de Início com o dia de hoje
    const inputDataInicio = document.getElementById('dataDeHoje');
    
    if(inputDataInicio){
        const hoje = new Date();
    
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const ano = hoje.getFullYear();
    
        inputDataInicio.value = `${ano}-${mes}-${dia}`;
    }
});


//URLSearchParams é um método em JS que facilita a leitura dos dados que serão pegos pelo 
//'window.location.search', o window.location.search pega tudo que vem depois da ? na URL
const parametrosUrl = new URLSearchParams(window.location.search);

//aqui estamos pegando especificamente o valor associado a chave 'site'
const siteClicado = parametrosUrl.get('site');

const inputDoSite = document.getElementById('Site');

//Essa condicional verifica se o parâmetro existe na URL e o input for encontrado na página
//Se sim, ele faz o preenchimento automático da parte "Site do formulário"
if(siteClicado && inputDoSite)
{
    inputDoSite.value = siteClicado;

    //a linha abaixo não permite que o colaborador alterer o nome do site
    inputDoSite.readOnly = true;
}

//A partir daqui é sobre a tabela da auditoria
//No caso, essa parte do código envia os dados para a auditoria
//Como no momento não temos BD, estou testando tudo localmente
// tudo será armazenado aqui quando o usuário clicar em "Enviar"

const formulario = document.querySelector("form");

//o código abaixo verifica se existe formulário na página
if(formulario){

    formulario.addEventListener("submit", function(e){
        //impede o recarregamento da página

        e.preventDefault();
        const preventiva = {

            //campo nome
            nome: document.getElementById("nome").value,
            //campo site
            site: document.getElementById("Site").value,
            //primeiro input para data (data início)
            dataDeHoje: document.querySelectorAll('input[type="date"]'            
            )[0].value,
            //segundo input para data (prazo)
            dataFinal: document.querySelectorAll('input[type="date"]'                
            )[1].value,

            //modelo selecionado
            modelo: document.getElementById("subtipos").value,

            //define se está concluído ou não (é com a flag)
            concluida:false
};

    let registros = JSON.parse(
        localStorage.getItem("preventivas")
    ) || [];

    registros.push(preventiva);

    localStorage.setItem(
        "preventivas",
        JSON.stringify(registros)
    );

    console.log(registros);

    alert("Preventiva registrada!")
    
    //se quiser limpar o formulário após salvar, tem o método abaixo
    formulario.reset();
});

}

//a partir daqui será com o intuito de carregar dados na tela da auditoria
window.onload = function(){
    
    // procura o tbody da tabela
    const tbody = document.querySelector("#tabelaPreventivas tbody"
    );

    //Se não existir tabela, o código é encerrado
    if(!tbody){
        return;
    }

    //A partir daqui, vai recuperar os dados salvos

    let registros = JSON.parse(
        localStorage.getItem("preventivas")
    ) || [];

    //Caso precise recriar, o código abaixo vai limpar a tela
    tbody.innerHTML = "";

    //cria uma linha para cada registro
    registros.forEach((registro, index) => {
        
        const hoje = new Date();

        const dataFinal = new Date(registro.dataFinal);

        //diferença entre hoje e a data final
        let diferencaDias = Math.ceil(
            (dataFinal - hoje) / (1000 * 60 * 60 * 24)
        );

        let corAlarme = "";

        if(registro.concluida)
        {
            corAlarme = "concluido";
            diferencaDias = "Finalizado";
        }
        //a cor do alarme vai ser verde se faltar mais de 5 dias
        else if(diferencaDias > 5){
            corAlarme = "verde";
        }
        //se falta de 0 a 5 dias, será amarelo
        else if(diferencaDias >= 0) {
            corAlarme = "amarelo";
        }
        //Se for menor do que 0 dias, é vermelho
        else{
            corAlarme = "vermelho";
        }

        //criar nova linha

        const linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${registro.site}</td>
        <td>${registro.dataDeHoje}</td>
        <td>${registro.dataFinal}</td>
        <td>${diferencaDias}</td>
        <td>
            <div class="status ${corAlarme}"></div>
        </td>
        <td>
            <button class="btnFotos" onclick="alert('Abrir galeria do site: ${registro.site}')> Ver </button>
        <td>
            <input 
                type="checkbox"
                class="checkConclusao"
                data-index="${index}"
                ${registro.concluida? "checked" : ""}
                >
        </td>
        `;

        //a linha debaixo adiciona uma linha à tabela
        tbody.appendChild(linha);
    });

    //define todo o evento das checkbox
    document.querySelectorAll(".checkConclusao").forEach(check => {
            //"Escuta" todas as alterações
            check.addEventListener("change", function(){

                //descobre qual linha foi clicada
                const index = this.dataset.index;

                //a linha debaixo atualiza o registro
                registros[index].concluida = this.checked;

                //salva novamente
                localStorage.setItem(
                    "preventivas",
                    JSON.stringify(registros)
                );

                //recarrega a página automaticamente após a marcação (ou desmarcador do checkbox)
                location.reload();
            });
        });
};
