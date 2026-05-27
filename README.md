# CurrConv 🪙

Projeto de um conversor de moedas dinâmico onde apliquei conceitos avançados de lógica, consumo de dados assíncronos e estilização interativa. O grande diferencial deste projeto foi a evolução de uma lógica baseada em condicionais para uma estrutura otimizada com Objetos JavaScript integrados a uma API em tempo real.

## 🚀 Evolução Técnica

### 🧠 JavaScript (O Core do Projeto)
* *Consumo de API em Tempo Real:* Implementação de requisições assíncronas utilizando *Fetch API e Async/Await* para conectar com a AwesomeAPI, garantindo que as cotações de Dólar, Euro e Libra estejam sempre atualizadas.
* *Refatoração com Objetos e Referência:* Substituí estruturas extensas de if/else por um objeto global de taxas. A função de busca atualiza esse objeto diretamente na memória, permitindo que a função de conversão acesse os dados limpos e sem redundância.
* *Lógica de Formatação:* Utilização da API nativa Intl.NumberFormat para garantir que os valores apareçam na tela com a formatação e símbolos corretos de cada moeda (R$, US$, €, £).
* *Código Legado:* Deixei o código antigo comentado no arquivo para demonstrar visualmente o meu processo de aprendizado, maturidade técnica e capacidade de refatoração.

### 🎨 CSS & UI (Interatividade)
* *Estados de Botão:* Explorei o uso de pseudo-classes como :hover (passar o mouse), :active (clique) e opacity para dar um feedback visual e fluido ao usuário.
* *Layout Semântico:* Utilização de tags HTML5 como section e div para construir uma interface moderna, organizada e de fácil manutenção.

## 🛠️ Tecnologias
* HTML5 (Semântico)
* CSS3 (Efeitos Interativos e Layout)
* JavaScript ES6+ (Objetos, Async/Await, Fetch API, Manipulação de DOM)

## 🔗 Link do Projeto
Você pode testar o conversor clicando aqui: https://joao78-ux.github.io/CurrConv/

---
"O aprendizado não é sobre fazer o código funcionar, mas sobre como deixá-lo melhor a cada dia." 🚀
