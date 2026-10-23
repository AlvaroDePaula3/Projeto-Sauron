## Readme do Projeto da Preventiva/Auditoria

## 🖥️ Frontend
Esse readme será inteiramente sobre o Frontend, então todas as informações contidas aqui são para facilitar o entendimento sobre o código e as informações.

## 🏡 Página inicial

Toda a página inicial fica dentro de uma divisória que possui uma classe chamada "divSite" dentro dessa divisória eu fiz as configurações do fundo do Frontend.

### 🎛️ Cards com botões

A aplicação possui uma lista dentro da divisória principal, lista essa possui boa parte das configurações, interagindo diretamente com a "divSite" e com os elementos internos da lista. 

A lista foi feita utilizando o código ***ul*** e ela possui 4 ***li***, fiz dessa forma para facilitar a organização dos 4 cards. Os cards possuem espaçamento de 15px entre os mesmos.

Cada card possui 2 botões, um leva a preventiva e outro leva a aba de auditoria.

### 🖌️ Estilização e configurações

Na parte de CSS da página inicial o CSS foi feito de forma moderna, o fundo foi feito com luzes brancas e roxas utilizando puramente CSS, é importante ressaltar que para o destaque dos botões, o fundo possui cores mais claras e foi desfocado.

A lista dos botões que mencionei anteriormente, está organizada em formato de coluna, porém, como temos uma divisória que possui uma tamanho 100% e não uma altura especificada, ela se adequa a altura dos botões, junto disso, coloquei um *display* organizado em formato de grid com 4 espaços totais, tendo 1 ocupação vertical para cada ocupação. O que faz com que no computador todos os botões fiquem deitados. 

**OBS.:** Para consultar isso, veja das linhas 55 até a linha 79 do **style.css**

Todos os cards possuem um ***hover***, ou seja, ao passar o mouse por cima, ele aumenta de tamanho e recebe uma luz roxa atrás dele. E isso ocorre com cada card individualmente, ou seja, se um está "levantado" os outros não irão levantar ao mesmo tempo, apenas quando o mouse passar sobre eles. 

Assim como os cards, os botões também possuem um hover, ao passar o mouse por cima deles, a cor é alterada para um roxo mais claro.

É importante salientar que: **Todos os componentes clicáveis** dessa aplicação possuem o código: *cursor: pointer;*
Ou seja, eles demonstram que podem ser clicados para executar alguma ação.

### 🛠️ Funcionalidade dos botões

Consiste em um código de hyperlink que possui o endereço da preventiva e da auditoria, dentro deles possui o botão mesmo com os nomes de cada parte para que haja a sinalização de aonde aquele botão vai levar o usuário.

### 📲 Responsividade. 

Tudo isso dito até aqui é totalmente responsivo com o celular, ou seja, caso a aplicação vá para o celular os botões foram configurados usando Media Query, ou seja, caso seu dispositivo tenha até 768 pixels, os botões serão organizados em uma coluna (verticalmente), pois a ordem do código do grid foi invertida.

Antes, era: *grid-template-columns: repeat(4,1fr);*

Agora se tornou: *grid-template-columns: repeat(1,4fr);* 

Na responsividade o espaçamento entre os cards ficam ligeiramente menor. E uma border-radius que fica com 10px.

## 🔎 Preventiva

### ↩️ Seta
Essa parte junto da auditoria, possuem uma seta no canto superior esquerdo que retorna para a página inicial. Assim como os botões na página inicial, é um hyperlink que dentro dele tem uma divisória com uma classe.

No CSS, essa seta é toda desenhada por códigos (ela não é uma foto).

### 🗂️ Divisórias do formulário

A aplicação consiste num formulário dentro de uma grande divisória. Após o título da aba, temos a criação do formulário devido a tag <form>, ela recebeu o método post, ou seja, ele vai enviar os dados para o servidor. Atualmente ele envia para o navegador local, porém futuramente irá enviar para a base de dados.

O formulário tem 7 elementos HTML, sendo eles: Nome, Matrícula, Data de Hoje, Data do prazo, Site, Modelo, Descrição e Galeria de fotos.

- **Nome e Matrícula:** Foram configuradas de forma muito similar, possuem a tag <label> para identificar uma etiqueta como elemento para o formulário e ambas possuem um input com tipo, nome e id. 
O tipo de ambas é ***text***. O nome e a matrícula são campos obrigatórios, pois possuem o atributo ***required***.
É importante salientar que, antes da label, eles tem uma divisória que carrega a classe *"elementosFormulario"* e isso se extende para todas os elementos do formulário.

- **Data De Hoje:** Possui todas as características obrigatórias para um formulário (div, label e input), porém aqui a id é do tipo *date* e possui um *id* e um *name*. A data de hoje tem uma característica diferente que é o atributo **readonly**. Ou seja, ele não pode ser escrito, apenas lido. 

- **Data do Prazo:** Igual a Data de Hoje, a diferença é que a data possui *name* e *id* diferentes e esse campo possui o atributo **required**. Ao clicar, vc pode escolher a data através de um calendário que foi totalmente estilizado com CSS, e possui um mini calendário você pode selecionar a data de hoje, ou colocar uma data específica selecionando pelo calendário.

- **Modelo:** Um dropdown com todos os "Sites" listados, basta o usuário clicar e selecionar o seu. Assim como os outros, é uma label e possui dentro dela a tag select que carrega o *id* "subtipos" e dentro da tag select, temos 5 tags option que representam cada um dos sites existentes. 
**OBS.:** Essa parte representa os subtipos que são os equipamentos por local.

- **Descrição:** Essa parte é uma área de texto, cujo também é obrigatória ser preenchida (devido ao required). Ela tem 6 linhas mostradas na tela.

- **Galeria de fotos:** uma label, com input do tipo "file". Essa área aceita apenas imagens, podendo ser imagens carregadas ou arrastadas. 

Após tudo isso, temos o botão "laudo com assinatura", terá no futuro a função de gerar um laudo que seja possível ter uma assinatura, seja lá de quem for. Essa parte do código está com o Frontend igual ao botão de enviar que será falado abaixo, porém ela já possui um *id* chamado de *btnGerarLaudo*, quando for colocar usando o JS e o banco de dados, já estará aqui.

E abaixo disso temos o botão "Enviar", que envia para o banco de dados os dados escritos para serem mostrados na aba de auditoria

### 📲 Responsividade 

Assim como a tela inicial, aqui temos uma área totalmente responsiva, ou seja, caso seja acessada pelo celular o formulário deixará de ter um design mais horizontal e ficará totalmente vertical, facilitando assim a visualização e o uso em dispositivos móveis.

# 🗃️ Auditoria


Navegação (Botão de Voltar):

Um link simples com uma seta animada (<div class="seta">) que permite ao usuário retornar facilmente à página inicial (index.html).
O Container Principal (Card Branco):

Toda a interface da auditoria fica contida dentro de uma grande caixa (<div class="quadradoAuditoria">). Isso cria um visual de "aplicativo", separando o conteúdo do fundo cinza da página.
Possui um cabeçalho simples indicando o título da página: "Relação de Sites Preventivados".
A Tabela de Dados:


O coração da página. É estruturada usando a tag padrão <table id="tabelaPreventivas">.
Cabeçalho (<thead>): Define as colunas que guiam a leitura do usuário: Site, Data de Início, Data Final, Prazo, Alarme, Fotos e Flag.
Corpo (<tbody>): É o espaço vazio que foi preparado no HTML para que o JavaScript (explicado mais a frente) preencha com as linhas de dados dinamicamente.

🎨 Design e Estilização (CSS)

O arquivo auditoria.css foi planejado para entregar uma interface corporativa e amigável, seguindo os padrões modernos de design (UI).

Estilo Base e Cores

Fundo: Utilizamos um cinza bem claro (#f4f5f7) no corpo da página para contrastar com o card branco da tabela.
Tipografia: A fonte escolhida foi a Varela Round, trazida do Google Fonts, que possui bordas arredondadas e transmite um aspecto limpo e moderno.
Card da Tabela: O quadradoAuditoria usa sombras suaves (box-shadow) e bordas arredondadas (border-radius: 16px) para simular elevação e sofisticação (estilo Glass/Soft UI).

Indicadores Visuais (Alarmes)

Para que o usuário identifique o status de cada site rapidamente, criamos classes CSS específicas que desenham pequenos círculos coloridos (.status), simulando luzes de LED:

🔵 .concluido: Azul (Tarefa finalizada pelo checkbox).
🟢 .verde: Verde (Faltam mais de 5 dias para o prazo).
🟡 .amarelo: Amarelo (Atenção, faltam 5 dias ou menos).
🔴 .vermelho: Vermelho (Prazo estourado).
Cada luz possui um leve brilho (box-shadow) da sua respectiva cor para reforçar o efeito visual.

Botão "Ver Fotos"

Estilizado como um botão outline (fundo transparente e borda roxa). Isso garante que a tabela não fique poluída com botões pesados e escuros, mantendo a leitura dos textos limpa, mas deixando claro que é uma ação clicável.

📱 Responsividade (Mobile)

Tabelas são naturalmente difíceis de encaixar em telas de celular. Para resolver isso sem "quebrar" ou amassar as letras:

- O container em volta da tabela (.containerTabela) recebeu a propriedade overflow-x: auto.
A tabela recebeu uma largura mínima (min-width: 700px).
- O Resultado: No celular, a tabela mantém o seu tamanho ideal e o usuário pode simplesmente deslizar o dedo para os lados (scroll horizontal) para ler o restante das colunas, garantindo 100% de usabilidade em qualquer tamanho de tela (até 768px).



# 🏗️ Java Script

## Preenchimento Automático (Inteligência da Interface)

Logo que a página da preventiva é carregada, o JavaScript executa duas tarefas para facilitar a vida do usuário:

## 📅 Data Atual: 
Ele captura a data do dia (do seu computador) e preenche automaticamente o campo "Data de hoje" no padrão correto (Ano-Mês-Dia), bloqueando o campo para edição. Porém, para o usuário vai aparecer no formato que utilizamos no Brasil, ou seja: dia/mês/ano.

## 🔗 Leitura da URL: 
Se o usuário clicou em um botão na página inicial (ex: "Site 1"), a URL carrega um parâmetro (?site=Site 1). O JS lê essa URL, pega o nome do site e preenche o campo "Site" do formulário automaticamente, também bloqueando-o para que o usuário não digite errado.

## ✍️ Cadastro de Preventivas (Salvamento de Dados)

Quando o usuário clica no botão "Enviar" do formulário:

O comportamento padrão de recarregar a página é bloqueado (e.preventDefault()).
O JS "coleta" tudo o que foi digitado (Nome, Site, Datas e Modelo) e monta um pacote de dados (um Objeto JSON). Ele também adiciona um marcador chamado concluida: false (indicando que a tarefa acabou de nascer e ainda não foi finalizada).
Esse pacote é salvo no LocalStorage (a memória interna do navegador).
Por fim, ele avisa que foi salvo ("Preventiva registrada!") e limpa os campos para um novo cadastro.
Quando for adicionar a parte de dados, é importante ressaltar que deve-se substituir essa parte do **localStorage** no JS, pois ali salva apenas localmente.

## 🧑‍💻 Renderização da Tabela (Página Auditoria)

Quando a página de Auditoria é aberta, o JS procura a tabela. Se encontrar, ele faz o seguinte:

Puxa todos os dados que estavam guardados no localStorage.
Para cada registro, ele faz um cálculo matemático: compara a data de hoje com a "Data Final" (prazo) estipulada no formulário.
Sistema de Cores (Alarme):

- Se o checkbox foi marcado: Azul (Concluído).
- Se faltam mais de 5 dias: Verde (No prazo).
- Se faltam entre 0 e 5 dias: Amarelo (Atenção, prazo acabando).
- Se passou de 0 (negativo): Vermelho (Atrasado).

Por fim, ele "desenha" uma nova linha no HTML (usando crases `) preenchendo as colunas com os textos, a bolinha de cor, o botão de fotos e a caixinha de marcar (checkbox).

