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

