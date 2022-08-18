### Terminal Commands:
$ yarn init -y
$ git init
$ yarn add -D typescript
$ yarn tsc --init

-- create dist:
$ yarn tsc

-- run: 
$ node dist/<directory>/file.js

## Design Patterns - Padrões de Projeto
### Quais os tipos de Patterns existentes?

Os integrantes da GoF coletaram 23 Patterns, que foram divididos em 3 grandes grupos. Conheça quais são eles:
1 – Creational Patterns

São os padrões de criação e tratam da construção do objeto e de referência. Esse grupo é importante porque sustenta o princípio considerado mais essencial, que diz: programe para interface e não para implementações.

Nele, constam:

    - Abstract Factory: Criam famílias de objetos on the fly com alta flexibilidade;
    - Builder: Constrói o produto passo a passo;
    - Factory Method: Cria objetos on the fly com alta flexibilidade;
    - Prototype: Permite a criação de novos objetos a partir da cópia de um modelo original ou protótipo;
    - Singleton: Centraliza e compartilha recursos.

2 – Structural Patterns

São os padrões estruturais que tratam da relação entre os objetos e como eles interagem entre si para formarem objetos grandes e complexos.

Ele é composto por:

    - Adapter: Pluga o conteúdo ao sistema;
    - Bridge: Separa implementações de abstrações em prol da flexibilidade;
    - Composite: Trata todos os objetos de forma justa;
    - Decorator: Incrementa funcionalidades de forma dinâmica;
    - Facade: Simplifica a utilização de subsistemas complexos;
    - Flyweight: Compartilha pequenos recursos para economizar espaço;
    - Proxy: Faz com que um objeto represente outro objeto.

3 – Behavioral Patterns

São os padrões comportamentais que tratam da comunicação entre os objetos, especialmente em termos de responsabilidade e de algoritmo.

Nele, estão inseridos:

    - Chain of Responsibility: Repassa as requisições para evitar a dependência entre um objeto receptor e o solicitante. Com isso, permite que outros objetos da cadeia tenham a oportunidade de tratar tal solicitação;
    - Command: Transforma requisições em objetos;
    - Interpreter: Define uma gramática e um interpretador;
    - Iterator: Percorre um conjunto de dados independentes da implementação;
    - Mediator: É um simplificador de relacionamentos complexos;
    - Memento: Externaliza estados sem quebrar o encapsulamento;
    - Observer: Realiza o compartilhamento de recursos de maneira inteligente;
    - State: É considerado muito importante porque simplifica a troca de estados internos de objetos;
    - Strategy: Separa os dados dos algoritmos para que possam ser reutilizados;
    - Template Method: Define algoritmos extensíveis;
    - Visitor: Define uma nova operação para uma classe sem alterá-la.

Qual a importância dos Design Patterns?

Os Design Patterns focam na reutilização de soluções. Apesar de todos os problemas não serem iguais, caso você os quebre e ache similaridades com os que já foram resolvidos anteriormente, é possível aplicar os Patterns e obter as soluções.

Mas por que os programadores deveriam se preocupar em utilizar os Design Patterns?

Pelo simples fato de que os softwares mudam e precisam de manutenção e evolução constantes. Projetar softwares que sejam de qualidade e, principalmente, reutilizáveis, não é uma tarefa fácil – mas os padrões estão aí exatamente para facilitar nessa missão.

Além disso, com eles, você terá mais facilidade de ler o código alheio. Na etapa de desenvolvimento, é comum que sejam criadas soluções específicas. Porém, criar generalizações pode facilitar o trabalho de todos e, por este motivo, a compreensão do código de outros desenvolvedores se torna mais fácil.

Uma vez que você tem experiência de aplicar os Design Patterns, as soluções passam a ganhar um padrão já testado e aprovado pelo mercado – além de serem utilizados pelos melhores profissionais do mundo.
Quais os benefícios de utilizar esses padrões?

Como os modelos já foram utilizados e testados, eles representam um ganho de produtividade para os desenvolvedores. Isso porque evita que sejam despendidos tempo e energia para solucionar problemas em comum.

O seu uso também contribui para uma melhor organização e manutenção dos projetos. Afinal, os Design Patterns são baseados em padronização de códigos.

Além disso, as discussões técnicas se tornam mais sucintas, pois é mais fácil citar o nome de um Design Patterns ao invés de ter que explicar todo o seu comportamento e justificá-lo.

É importante, porém, ter bom senso ao utilizá-los. Apesar do seu objetivo ser ajudar e facilitar os processos, existem casos em que não devem ser utilizados. Isso porque forçar o código a se conformar aos padrões de projeto, de certa forma, aumenta a sua complexidade.

Portanto, é ideal avaliar com cautela cada situação. Nos casos de grandes projetos, utilizar padrões pode prejudicar mais no andamento do que se os problemas fossem solucionados de forma individual.

Conseguiu entender um pouco sobre o conceito de Design Patterns? Se você quiser se aprofundar ainda mais, acesse o canal do Código Fonte TV e veja o vídeo que o pessoal publicou sobre o assunto.
