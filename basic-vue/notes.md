# Aula 02
## Instalação do Vue
- Instalar o vue em um projeto é simples, utilizando **CDN**
- Para acessar a todas as funcionalidades do Vue.js é recomendado installar pelo **CLI**
- O vue precisa ser inicializado em algúm elemento da página.
		Usaremos `<div id="app"></div>`
- `data() {}` é uma propriedade do vue, a qual irá retornar algum dado para o front-end.
- Quando o valor esta dentro da sintaxi {{}} (mustache) tudo vira texto.

# Aula 03
## Input e data binding
- Uma das funcionalidades mais interessantes é o **data binding**, onde temos a possibilidade de mudar em tempo real um dado, por meio do que é recebido de um imput, por exemplo:
	O usuário irá digitar algum dado e conseguirá ver a mudança em tempo real na aplicação.


# Aula 04
## O CLI do Vue
- O **CLI** é uma ferramenta de linha de comando do Vue, que possibilita **criação e configuração** de projetos de forma mais avançada.
	Exemplo: adicionar o Vue Router desde a instalação.

Isso flexibiliza muito as coisas.
### Pré-requisitos
- Node
- npm
link: https://cli.vuejs.org/guide/installation.html

# Aula 05
## Componentes
São os componentes os quais podemos dividir o nosso layout em partes, cada componente tem uma responsabilidade. Ex: um componente que é uma tabela e outro que é um rodapé.

# Aula 06
## Dados nos componentes
Os componentes podem conter dados, podem iniciar com um valor ou também pode ser modificado em runtime.
- Os dados permanecem em uma função chamada **data**. Esta função deve retornar os dados em forma de **objetos**.

# Aula 07
## Life Cycle Hooks

https://devpremier.medium.com/vuejs-created-vs-mounted-life-cycle-hooks-74c522b9ceee
# Aula 08
## Hierarquia de componentes
É comum **componentes terem outros componentes** que dependem deles, ou seja, criamos uma **árvore de componentes**.
- OBS: Precisamos tomar cuidado para isso não virar uma bagunça
- Com essa divisão de componentes em subcomponentes, separamos mais ainda as responsabilidades de cada um dos componentes.