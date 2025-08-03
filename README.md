# Image Slider | Exercício DevQuest

## **Sumário**

- [Visualização do Projeto](#visualização-do-projeto)
- [Apresentação](#apresentação)
- [Explicação do Projeto](#explicação-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Utilizar o Código do Projeto](#como-utilizar-o-código-do-projeto)
- [Ferramentas e Tecnologias Utilizadas](#ferramentas-e-tecnologias-utilizadas)
- [Principais Recursos e Abordagens](#principais-recursos-e-abordagens)
- [Desafios Enfrentados](#desafios-enfrentados)
- [Aprendizado Adquirido](#aprendizado-adquirido)
- [Desenvolvimento Contínuo e Autossuperação](#desenvolvimento-contínuo-e-autossuperação)
- [Agradecimentos e Conclusão](#agradecimentos-e-conclusão)
- [Contato](#contato)
- [Licença de Uso](#licença-de-uso)

## **Visualização do projeto**

### **🖥️ Desktop**

<div align="center">
  <img src="./src/images/gif_finalProject_desktop.gif" alt="Gif do resultado final da página">
</div>

### **📱 Mobile**

<div align="center">
  <img src="./src/images/gif_finalProject_mobile.gif" alt="Gif do resultado final da página">
</div>

### [Acesse a página clicando aqui!](https://miguel-dalmeida.github.io/slider-image_project/) 

## **Apresentação**

Olá! Meu nome é Mário Miguel e sou estudante de Desenvolvimento Web. Atualmente, sou aluno do curso **DevQuest**, da plataforma *Dev em Dobro*, focado na formação de desenvolvedores Fullstack.

Como parte da minha jornada de aprendizado, recriei o desafio **Image Slider**. Esse projeto integra o módulo [**Exercícios JS Intermediário**](https://gigantic-chef-a6f.notion.site/Exerc-cios-JavaScript-Intermedi-rio-222cd10b93ab80e088c8c9613499c79d?source=copy_link) (especificamente o quinto exercício), do curso *DevQuest*.

## **Explicação do Projeto**

O **Image Slider** é um carrossel interativo de imagens, desenvolvido para exercitar a lógica de manipulação do DOM com JavaScript. A ideia principal é permitir a navegação entre diferentes imagens de fundo por meio de setas posicionadas nas laterais da tela.

Funciona assim: ao clicar nas setas de navegação (esquerda ou direita), a imagem de fundo é trocada. Há um total de quatro imagens, e o sistema respeita os limites — ou seja, na primeira imagem a seta de "voltar" aparece opaca (indicando que não há imagem anterior), e na última imagem a seta de "avançar" também fica desabilitada visualmente.

Além do slider em si, o projeto inclui um cartão de conteúdo com fundo branco, posicionado sobre as imagens, onde são exibidos título, parágrafo e um link de ação. Por fim, há um rodapé simples com os créditos do desafio e do desenvolvedor.

Apesar do visual mais clean e simples, o foco do exercício foi, de fato, trabalhar a lógica por trás do comportamento do carrossel — integrando HTML, CSS e, principalmente, JavaScript de forma prática.

## **Estrutura do Projeto**

```plaintext
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── responsive.css
│   │   ├── style.css
│   │   ├── variables.css
│   ├── js/
│   │   ├── index.js
│   ├── images/
│   │   ├── ...
├── index.html
├── README.md
```

## **Como Utilizar o Código do Projeto**

**Para rodar este projeto em sua máquina local, siga os passos abaixo:**

### 1️⃣ Crie um diretório para o projeto  
Escolha um local no seu computador e crie uma pasta para armazenar os arquivos do projeto.

### 2️⃣ Acesse o terminal  
Clique com o botão direito sobre a pasta criada e selecione a opção para abrir o terminal.  

### 3️⃣ Clone o repositório  
No terminal, execute o seguinte comando para clonar o repositório:  
```sh
git clone https://github.com/Miguel-dAlmeida/slider-image__project.git
```
### 4️⃣ Acesse o diretório do projeto
Após a clonagem, entre na pasta do projeto executando o comando abaixo em seu terminal:

```sh
cd slider-image__project
```

### 5️⃣ Abra o projeto no editor de código
Ainda no terminal, caso esteja utilizando o VS Code, basta rodar o comando:

```sh
code .
```
Se estiver utilizando outro editor, abra a pasta `image-slider__project` manualmente no programa de sua escolha.

**Pronto! Agora você pode explorar e editar o código do projeto.** 

## **Ferramentas e Tecnologias Utilizadas**

<div style="display: inline_block" align="center"><br>
  <img align="center" alt="HTML" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="60" width="70" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="CSS" height="55" width="65" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg">
  <img align="center" alt="Markdown" height="80" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg"/>
</div>

## **Principais Recursos e Abordagens**

*Este projeto foi desenvolvido considerando boas práticas em front-end, com foco em acessibilidade, estrutura semântica, responsividade, interatividade, escalabilidade e desempenho. **A seguir, compartilho um resumo dos principais recursos e estratégias adotadas:***

### HTML

- **Tags Semânticas:**  
  A estrutura do projeto foi cuidadosamente montada com tags semânticas como `<footer>`, `<section>`, entre outras. Essa escolha não apenas organiza e torna o código mais legível, mas também melhora a acessibilidade e a indexação pelo SEO.

- **Atributos ARIA (WAI-ARIA Landmarks):**  
  Para garantir que todos os usuários tenham uma boa experiência, adicionei atributos ARIA como `aria-live` e `aria-label`. Esses elementos são essenciais para que tecnologias assistivas interpretem a página de maneira correta.


### CSS

- **CSS Flexbox:** O Flexbox foi utilizado como principal mecanismo de layout, permitindo alinhar e distribuir os elementos da página de forma eficiente e responsiva.

- **Prefixos `-webkit-`, `-ms-` e `-o-`:** Inclusão de prefixos em propriedades CSS para garantir compatibilidade com versões antigas de navegadores.  
***Nota:** Utilizei o site [Autoprefixer CSS online](https://autoprefixer.github.io/) para incluir os prefixos automaticamente.*

- **Variáveis CSS**: Emprego de variáveis CSS para centralizar e reutilizar as cores do projeto.


- **Favicon e Ícones Font Awesome:**  
  Utilizei um favicon personalizado para reforçar a identidade visual da aplicação.

- **Reset CSS:**  
  Utilizei um arquivo de reset para eliminar inconsistências entre navegadores, criando uma base uniforme para os estilos aplicados.

- **Uso Estratégico de REM:**  
  Utilizei a estratégia `html { font-size: 62.5%; }` em conjunto da unidade de medida `rem` para definir o tamanho e a dimensão dos elementos, garantindo escalabilidade ao aumentar ou diminuir a tela.

- **CSS Nesting:**  
  A técnica de CSS Nesting foi empregada para estruturar os estilos de forma hierárquica, o que minimiza a repetição de regras e torna o código mais legível e organizado, criando uma estrutura semelhante à encontrada no código HTML.

- **Nomenclatura de Classes com BEM (Block, Element, Modifier):**  
  Todas as classes seguem a metodologia BEM, o que proporciona clareza, modularidade e escalabilidade ao CSS. Essa padronização também facilita a manutenção e me prepara para, futuramente, trabalhar em equipe.

- **Abordagem Desktop First:**  
  Iniciei o desenvolvimento com foco em telas desktops e fui adaptando progressivamente para dispositivos mobile, como tablets e celulares.

- **Media Queries:**  
  O uso de media queries permitiu ajustar o layout conforme o tamanho da tela, garantindo uma experiência consistente em todos os dispositivos.

- **Unidades Relativas com `min()` e `max()`:**  
  Para evitar a complexidade de múltiplos breakpoints, utilizei funções como `min()` e `max()` que ajustam fontes, espaçamentos e componentes de forma automática e precisa, de acordo com a largura (`vw`) ou altura (`vh`) da tela.

- **Posicionamento Avançado e Z-Index:**  
  Utilizando valores como `relative` e `absolute` em conjunto com `z-index`, pude criar contextos de empilhamento e controlar sobreposições, replicando fielmente o design.

### JavaScript
- **Condicionais JS**: A lógica do carrossel foi construída com o uso de condicionais como `if`, `else if` e `else`, permitindo diferentes caminhos de execução de acordo com o estado atual do slider — como, por exemplo, impedir que o usuário avance além da última imagem ou volte antes da primeira.
- **Funções Callback**: Algumas funções foram passadas como argumentos dentro de métodos e executadas como resposta a eventos de clique nas setas. Esse uso de *callbacks*  ajudou a modularizar e organizar a lógica de navegação entre os slides.
- **Seleção de Elementos com `document`**: Utilizei o método `document` para selecionar elementos do DOM. Isso preparou o terreno para que eu manipulasse esses elementos durante o desenvolvimento da lógica do slider.
- **Manipulação de Classes via `classList`:** Através do `classList`, adicionei e removi classes específicas para alternar entre os slides visíveis, controlar opacidade das setas e sobrepor os fundo.
- **Eventos de Clique com `addEventListener`:** Adicionei ouvintes de evento às setas de navegação usando `addEventListener`, ativando funções específicas a cada clique. 

### Padronização
- **Organização Lógica das Propriedades CSS:**  
  Agrupei as propriedades CSS de forma lógica (box model, tipografia, layout etc.), de modo a manter o código previsível e fácil de ler.

- **Nomenclatura Descritiva do Código:** Busquei utilizar nomes claros e significativos para funções, variáveis e classes. Essa prática torna o código mais autoexplicativo e reduz a necessidade de comentários excessivos, além de facilitar revisões e colaborações futuras.

- **Uso de *Header Comments*:** Implementei comentários padronizados no topo dos arquivos CSS e JS com informações como o propósito do arquivo, autor, data da última modificação e dependências envolvidas. 
Mesmo o projeto sendo pequeno, decidi usar essa padronização para ir me acostumando com boas práticas de código limpo — afinal, logo serei um desenvolvedor contratado, atuando numa equipe de desenvolvimento real.


### Extra: Inteligência Artificial

Durante o desenvolvimento deste projeto, contei com o apoio das IAs, como **ChatGPT**, **Claude** e **Microsoft Copilot**. Elas funcionaram como verdadeiras assistentes, ajudando a esclarecer dúvidas técnicas, resolver desafios complexos e refinar o código (estrutura, semântica, coesão, escalabilidade etc.).

Além disso, as IAs contribuíram para a organização das minhas anotações e para o aprimoramento deste README, elevando a clareza e a qualidade da documentação. Vale destacar que, embora essas ferramentas tenham sido primordiais, o projeto é majoritariamente autoral, resultado da minha criatividade e esforço, com os quais consegui produzir uma solução única e original.

## **Desafios Enfrentados**

Posso afirmar com tranquilidade: o desenvolvimento do **Image Slider** foi o maior desafio técnico que enfrentei até agora na minha jornada como desenvolvedor. Foram inúmeras horas de dedicação, testes, frustrações e aprendizados. Tentei concluir esse projeto três vezes — e apenas na terceira tentativa encontrei uma solução minimamente satisfatória.

Essa foi a primeira vez em que eu realmente senti o gosto amargo do fracasso. Várias e várias vezes.

O primeiro desafio surgiu logo na etapa inicial: como conectar uma estrutura HTML coerente com a futura lógica em JavaScript? Sempre fui orientado a estruturar meu código antes de começar, mas aqui travei. Buscando um ponto de partida, lembrei de um projeto que desenvolvi junto aos professores do DevQuest, curiosamente no meu primeiro contato com a programação — lá em junho de 2024, durante o bootcamp gratuito “Do Zero ao Programador Contratado”.

Esse projeto, chamado **X-Devs** ([**clique aqui**](https://github.com/Miguel-dAlmeida/projeto-xdevs) para ver o respositório), usava uma lógica semelhante de sobreposição de imagens ao clicar em botões. Relendo seu código, identifiquei uma estrutura próxima do que eu precisava. Adaptei HTML, CSS e JS, e consegui replicar visualmente o design exigido pelo exercício.

- > [Clicando nesse link,](https://github.com/Miguel-dAlmeida/slider-image_project/tree/initial-v1) você pode acessar a *branch* referente à primeira tentativa de codificação do **Image Slider**.

O problema? Estava tudo errado — por dentro.

Ao assistir à resolução do exercício com o professor Beto (desenvolvedor sênior), percebi o quanto minha abordagem, embora visualmente idêntica, era incorreta nos conceitos. Na minha versão, todo o conteúdo textual permanecia fixo no HTML. A única coisa que mudava era a imagem de fundo via JavaScript. Isso até poderia funcionar, se os conteúdos dos sites reais fossem genéricos. Mas e quando cada slide exige um texto diferente?

A resposta poderia parecer simples: “então mude os textos via JS também.” Mas ao ouvir com atenção a explicação do professor, compreendi algo essencial:

> **“Ferramentas como leitores de tela e mecanismos de busca só conseguem ler o que está presente no HTML no momento do carregamento da página. Se os slides forem inseridos ou modificados apenas via JavaScript, esses conteúdos podem não ser detectados nem indexados corretamente.”**

Com esse novo entendimento sobre acessibilidade e indexação, percebi que minha solução não era sustentável. Decidi então recomeçar o projeto do zero.

No início, tudo fluiu: HTML e CSS saíram com naturalidade. Mas o verdadeiro desafio ainda estava por vir — **a responsividade**. Diferente da proposta original do curso, incluí um rodapé de créditos como forma de assinar minha versão. No primeiro protótipo, ele funcionou bem. Mas ao reestruturar o carrossel para conter vários slides com conteúdos distintos, comecei a enfrentar **problemas sérios de empilhamento e sobreposição**, especialmente em telas com altura reduzida. O que acontecia era uma sobreposição do elemento `<footer>` (créditos) ao elemento `.slider__content` (contêiner principal com o conteúdo textual do site).

Tentei resolver com unidades relativas (`vh`, `min()`), reduzindo as dimensões dos elementos com base na variação de altura, mas logo me deparei com a necessidade de lidar com **proporções que precisavam se adaptar em relação a largura**, o que gerou uma série de conflitos e sobrescrições difíceis de controlar. A cada “agora vai”, aparecia uma nova combinação de tela que quebrava o layout (os elementos se sobrescreviam) — e eu já não conseguia mais diagnosticar nada.  
Lidando com Media Queries baseadas em proporções (`aspect-ratio`), responsividade baseada em altura e largura e sobrescrições surgindo na tela a todo momento, eu só pensava em uma coisa: estou literalmente preso dentro de um labirinto, completamente travado. Prompts altamente detalhados, diversas tentativas diferentes, documentações lidas e vídeo-aulas assistidas no Youtube. Nada funcionava. Nada.

Foi um momento duro. Frustração pura. Senti vontade de desistir. Tudo que eu tentava parecia não funcionar. E foi só ao parar para analisar meu raciocínio com frieza que entendi o real problema:

> Eu havia construído o carrossel inteiro **sem scroll vertical**. Tudo deveria “caber” dentro do viewport. Isso simplesmente não funciona para todos os cenários.

Sem a possibilidade de scroll, elementos inevitavelmente se sobrepunham quando a tela era pequena demais. Com esse novo diagnóstico, vi que teria que **refazer tudo de novo**.

Antes de começar essa terceira versão, tomei uma decisão estratégica: fui até meu **Notion**, na minha página chamada [**“Sumários”**](https://gigantic-chef-a6f.notion.site/Sum-rios-105cd10b93ab80bb8190de0aac5c1dbf), onde organizo todos os resumos de programação que escrevo. Lá, selecionei os conteúdos que julgava essenciais para resolver os pontos críticos do projeto — especialmente sobre layout, empilhamento e responsividade. A partir dessa seleção, comecei a reler tudo, relembrando conceitos importantes.

### Revisando o que já foi aprendido: um passo para trás para dar dois à frente

* **CSS Básico | Tipos de caixa**: Block, Inline, Inline-Block
* **Unidades de medida relativas e absolutas**
* **VW e VH, padding, auto, min() e max()**
* **Posicionamento (static, relative, absolute, fixed)**
* **Display e centralização de elementos**
* **Flexbox e Grid em cenários reais**
* **Estilização de backgrounds e rodapés adaptáveis**
* **Responsividade baseada em proporções e escalabilidade com `rem` e `%`**

Essa revisão me deu fôlego e repertório técnico para reorganizar a estrutura do projeto.

A principal mudança foi **mover o rodapé para dentro de cada slide individualmente**. Assim, cada troca de slide trocava não só a imagem e o conteúdo principal (`.slider__content`), mas também o rodapé. Pode parecer redundante, mas isso me deu maior controle sobre o comportamento desses elementos, tornando-os irmãos na hierarquia do DOM.

Ainda assim, enfrentei novos desafios. A sobreposição agora era diferente: a parte superior do contêiner principal era cortada pelo próprio viewport em telas com altura reduzida. Resolvi isso usando `padding` vertical em media queries específicas para antender essas situações.

Outro problema crítico foi a **centralização vertical das setas**. Como eram posicionadas com `absolute`, consegui apenas centralizá-las em relação à altura da tela — e não em relação ao contêiner de conteúdo. Com scroll vertical, esse alinhamento quebrava.

Tentei resolver com CSS puro, sem sucesso. Foi então que recorri à ajuda da IA, que sugeriu uma solução baseada em **JavaScript com `getBoundingClientRect()`** para calcular a posição vertical do conteúdo e alinhar as setas dinamicamente. Funcionou, por mais que eu não tenha conseguido entender muito bem a lógica utilizada (continha conceitos dos quais eu ainda não estudei no curso).

> *Confesso que o projeto, no fim das contas, talvez não esteja 100% dentro dos padrões de “código limpo”. Mas estou em paz com isso.*  
*Estou orgulhoso por ter persistido. Por ter aprendido tanto. Por não ter desistido — mesmo quando tudo dentro de mim dizia para parar.* 

## **Aprendizado Adquirido**

O desenvolvimento deste projeto foi mais do que uma tarefa prática — foi um exercício profundo de revisão, consolidação e ampliação do meu conhecimento técnico. Ao longo do processo, esbarrei com dúvidas que me forçaram a estudar, experimentar e refinar conceitos que, até então, eu conhecia apenas na teoria. Abaixo, destaco os principais aprendizados que marcaram essa jornada.

### Aprimoramento do uso do padrão BEM

Ao buscar feedback com uma IA, fui alertado sobre um erro recorrente na nomeação das minhas classes CSS: o uso de nomes baseados nas tags HTML, como `.section`, `.main`, etc.

Segundo as boas práticas do padrão BEM (Block, Element, Modifier), devemos evitar esse tipo de associação, justamente para manter a separação entre a lógica de estilo e a estrutura semântica do HTML. O foco da nomenclatura deve estar na função ou no componente visual representado, não na tag utilizada.

**Exemplo ilustrativo:**

Incorreto:

```html
<section class="section">
  <div class="section__image"></div>
  <div class="section__content">
    <h1 class="section__title">Título</h1>
    <p class="section__paragraph">[...]</p>
    <a href="#" class="section__link">Saiba mais</a>
  </div>
</section>
```

Correto:

```html
<section class="slider">
  <div class="slider__image"></div>
  <div class="slider__content">
    <h1 class="slider__title">Título</h1>
    <p class="slider__paragraph">[...]</p>
    <a href="#" class="slider__link">Saiba mais</a>
  </div>
</section>
```

### Media Queries com `aspect-ratio`

Embora essa abordagem não esteja presente na versão final do projeto, utilizei `aspect-ratio`, `min-aspect-ratio` e `max-aspect-ratio` nas primeiras tentativas. Esses recursos me permitiram aplicar estilos com base na proporção entre a largura e a altura da tela, o que é especialmente útil para dispositivos com formatos não convencionais, como tablets ou monitores ultra-wide.

### Simulação de `hover` com JavaScript

Na primeira tentativa do projeto, aprendi a utilizar os eventos `mouseenter` e `mouseleave` para simular o comportamento de `hover`, adicionando ou removendo estilos conforme a interação do usuário com os links. Embora tenha abandonado essa abordagem na versão final, ela foi fundamental para concluir a lógica da tentativa inicial.


### Compreensão prática do `return` em funções

Durante a criação da lógica de navegação entre os slides, compreendi melhor o papel do `return` como forma de encerrar uma função de maneira imediata. Isso se mostrou útil para impedir que a função continuasse executando caso o slide atual fosse o primeiro ou o último.

```js
function goToPrevSlide() {
  if (currentSlide === 0) {
    return;
  }
  currentSlide--;
}

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    return;
  }
  currentSlide++;
}
```

### Diferenças entre `getElementsByClassName` e `querySelector`

Com base na resolução feita em aula, consolidei meu entendimento sobre a vantagem de usar `querySelector`. Essa API é mais moderna, legível e flexível, permitindo a seleção de elementos com mais precisão — o que torna o código mais claro e fácil de manter.


### Conteúdo diretamente no HTML x conteúdo via JavaScript

Aprendi que, em carrosséis cujo conteúdo é estático (ou seja, não depende de dados dinâmicos), é preferível incluir todos os slides diretamente no HTML, em vez de alterar dinamicamente o conteúdo com JavaScript. Isso garante melhor acessibilidade e indexação por mecanismos de busca, já que leitores de tela processam apenas o conteúdo presente no HTML no momento do carregamento da página.

### Uso apropriado de `getElementById`

Aprendi que, quando se trata de elementos únicos (como as setas do slider), o uso de `getElementById` é mais indicado. Além de ser mais performático por conta da otimização interna do navegador, ele deixa clara a intenção de que aquele elemento é único e essencial para a lógica, melhorando a manutenção e a clareza do código.

### Ordem correta das Media Queries

Durante a refatoração, entendi que a ordem das media queries era a responsável pela sobrescrição dos estilos responsivos. Em projetos com abordagem Desktop First, o ideal é que as media queries sejam escritas em ordem decrescente (do maior para o menor breakpoint). Já em Mobile First, a ordem deve ser crescente. 

### Uso estratégico de Header Comments

Lapidei meu entendimento sobre os chamados *Header Comments*, que funcionam como uma documentação resumida no topo de arquivos CSS e JS. Adotei um padrão que inclui:

* Descrição do propósito do arquivo
* Nome do autor
* Data da última modificação
* Dependências envolvidas

Esses comentários são úteis para facilitar manutenções, revisar o histórico de mudanças e compreender rapidamente o papel de cada arquivo — inclusive quando o projeto for revisitado no futuro por mim ou por outras pessoas.

## **Desenvolvimento Contínuo e Autossuperação**

Assim como na seção "Desenvolvimento Contínuo" do meu README anterior ([Huddle Landing Page](https://github.com/Miguel-dAlmeida/huddle-landing-page-with-alternating-feature-blocks_project)), uso este espaço para refletir, de forma mais pessoal, sobre a jornada intensa que foi concluir este exercício.

Este projeto representa, com exatidão, algo que apelidei de uma das **irregularidades que compõem o terreno das montanhas do meu sonho**.

Sou, por natureza, uma pessoa extremamente autocrítica — e não me envergonho disso. Pelo contrário. Essa voz interna exigente, que não me poupa quando desisto ou entrego menos do que posso, é uma das minhas maiores virtudes. Ela me mantém na linha.

Costumo imaginar minha trajetória como uma escalada de montanha — e não qualquer montanha. Uma montanha infinita, sem linha de chegada. Porque não existe chegada. Isso aqui é um estilo de vida. Um compromisso diário. E o **Image Slider** foi, sem dúvida, um trecho íngreme dessa escalada.

Como relatei nas seções anteriores, senti o gosto do fracasso. Várias vezes. Houve momentos em que duvidei de mim mesmo. Me perguntei se essa área era mesmo para mim. Se eu um dia seria um bom programador. Se seria capaz de concluir esse exercício.

> *Então o seu plano falha. Quando as maldições aparecem. Quando você é derrubado nessa porra. Quando tudo desmorona na sua vida e o seu plano está fodido. Que merda você vai fazer? Há apenas uma maldita opção: STAY FUCKING HARD* — **David Goggins**

Esse trecho me acompanha. Porque eu sei exatamente como é cair. E também sei que fugir da dor nunca foi, e nunca será, a minha saída. Confesso que chorei. Que parei meu cronograma ao sentir o peso da frustração. Que me senti derrotado. Mas, como eu disse: minha voz interna é implacável. Ela me encontrou de novo. E me fez levantar.

Levei alguns anos desde a saída do Ensino Médio para entender que fui feito para viver em ambientes de superação. Equilíbrio, conforto e prazeres fáceis não me sustentam. Eu preciso da disciplina. Da renúncia. Da pressão. Porque são nesses lugares desconfortáveis que me mantenho lúcido, inteiro e estável.

Foi por essa interpretação que decidi continuar. Porque o fracasso, a frustração, os bugs, as limitações técnicas... tudo isso representa o habitat natural de quem quer ser melhor. E é aqui que eu quero estar.

Quero estar às 22h de um sábado (como estou agora, escrevendo isso com os pelos do corpo arrepiados), sentado há horas em frente ao computador, fazendo algo difícil. Me superando. Sabe por quê? Porque sou viciado na sensação de conquista que vem **depois** da dor. Essa é a minha droga. Não existe atalho que me dê o que a superação me dá.  
É literalmente usar a dor como armadura, o tempo todo. É fazer quando tudo no corpo quebrado e na mente fodida diz para parar.

Voltando agora ao lado técnico: meu próximo passo é resolver o sexto exercício do módulo *Exercícios JS Intermediário* do curso DevQuest. Trata-se do projeto **FAQ com efeito acordeon**, o último desafio desse módulo.

Nos vemos em breve.

## **Agradecimentos e Conclusão**

Se você chegou até aqui, meu sincero obrigado por dedicar seu tempo a explorar este projeto e acompanhar minha jornada. Completar esse desafio foi uma grande conquista e cada passo reforça minha certeza de que estou no caminho certo para conquistar minha primeira vaga como desenvolvedor web júnior.

Também não posso deixar de agradecer ao [**DevQuest**](https://www.youtube.com/@DevemDobro), curso do qual sou aluno, por todo o suporte e conhecimento ensinado ao longo da minha jornada.  

<div align="center">
      <a href="https://www.youtube.com/@DevemDobro">
        <img src="./src/images/devQuest_logo.jpg" width="155px" alt="Logo da empresa DevQuest - Dev em Dobro"/>
      </a>
</div>
<br>

Um grande abraço e até o próximo projeto. **Bora codar!**

## **Contato**

 <div style="margin-bottom: 20px;">
    <a style="padding-right: 3px;" href="https://www.linkedin.com/in/mariomigueldealmeida/"><img
        src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    <a href="mailto:mariomigueldealmeida@gmail.com"><img
        src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"></a>
  </div>

## **Licença de Uso**  

Este código está disponível exclusivamente para fins educacionais. Qualquer outro tipo de utilização não está autorizada.   

<br>
<div align="center">
  <img src="https://i.imgur.com/kwfpJJn.gif" alt="Imagem representando união e parceria" width="80%">
</div>