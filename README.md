<div align="center"> 

### 🎹 Alura MIDI: Toque sons com JS!

Este é um projeto interativo que transforma o seu navegador em um launchpad musical. O objetivo foi aplicar conceitos práticos de JavaScript para manipular elementos do HTML, gerenciar eventos de clique e teclado, e reproduzir arquivos de áudio dinamicamente conforme a interação do usuário.

### 🕹️ Como Interagir

O teclado musical pode ser operado de duas maneiras:

    Clique do Mouse: Clique em qualquer tecla para reproduzir o som correspondente (Pom, Clap, Psh, etc.).

    Teclado (Acessibilidade): Utilize as teclas Enter ou Espaço para acionar a tecla selecionada.

    Feedback Visual: As teclas mudam de cor (classe ativa) enquanto estão sendo pressionadas via teclado.

### 🚀 Tecnologias Utilizadas

O projeto foca no uso de JavaScript puro para automação de tarefas repetitivas e manipulação da árvore de elementos.

    JavaScript: Lógica principal, seletores e escutadores de eventos.

    HTML5 / CSS3: Estrutura das teclas e estilização visual das classes de estado.

    Web Audio API: Execução dos sons através do método .play().

### 🛠️ Funcionalidades do Código

    Seleção Dinâmica: Uso de querySelectorAll para capturar todas as teclas de uma vez e iterar sobre elas com um laço for.

    Identificação por Classe: O código identifica qual som tocar capturando a segunda classe (classList[1]) de cada botão, facilitando a manutenção.

    Verificação de Segurança: Uma condicional if garante que o som só seja tocado se o elemento existir e for do tipo audio, evitando erros no console.

    Eventos de Teclado: Implementação de onkeydown e onkeyup para adicionar e remover efeitos visuais de pressão nas teclas.

### 📂 Estrutura de Arquivos

    index.html: Estrutura dos botões e dos elementos de áudio escondidos.

    style.css: Definições visuais e a classe .ativa para o feedback visual.

    main.js: Onde reside toda a inteligência do projeto, desde o loop de teclas até a função de tocar áudio.

### 🎨 Preview
https://github.com/user-attachments/assets/ed655c33-fbcb-47bb-9d22-7c7afee9167b




## Linguagem Utilizada:
<div style="display: inline_block"><br>

| Javascript |
| :---: |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="80" /> |

# Autora:

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/142232479?v=4" width=115><br><sub>Luiza Hackenhaar Naziazeno</sub>](https://github.com/luizahackenhaarnaziazeno)|
| :---: |
