
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está participando de um workshop sobre o futuro da sustentabilidade e aprende sobre novas tecnologias verdes. Qual o seu primeiro pensamento?",
        alternativas: [
            "Isso é muito promissor!",
            "Isso pode ser difícil de implementar."
        ]
    },
    {
        enunciado: "Aproveitando o workshop, o instrutor pede que você escreva um ensaio sobre o impacto das novas tecnologias verdes no meio ambiente. Qual atitude você toma?",
        alternativas: [
            "Utiliza ferramentas de pesquisa online que ajudam a compilar dados e apresentar informações de maneira clara.",
            "Escreve o ensaio com base em discussões com colegas, algumas pesquisas na internet e conhecimento pessoal sobre o tema."
        ]
    },
    {
        enunciado: "Durante a apresentação do ensaio, há um debate sobre como as tecnologias verdes impactarão o mercado de trabalho. Como você se posiciona?",
        alternativas: [
            "Defende a ideia de que as tecnologias verdes criarão novas oportunidades de emprego e promoverão um futuro sustentável.",
            "Preocupa-se com a possibilidade de que a transição para tecnologias verdes possa resultar na perda de empregos e defende a necessidade de treinamento para trabalhadores."
        ]
    },
    {
        enunciado: "Ao final do debate, você é solicitado a criar uma representação visual das tecnologias verdes. O que você faz?",
        alternativas: [
            "Cria uma imagem utilizando um software de design gráfico.",
            "Utiliza uma ferramenta de IA para gerar uma imagem que represente as tecnologias verdes."
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo sobre sustentabilidade para entregar na próxima semana. O andamento do projeto está atrasado e um membro do grupo usou uma IA para gerar conteúdo. O que você faz?",
        alternativas: [
            "Considera o conteúdo gerado pela IA como uma contribuição válida e o utiliza como está.",
            "Reconhece que a IA é uma ferramenta útil, mas revisa o conteúdo e adiciona perspectivas pessoais para garantir que o trabalho reflita o esforço do grupo."
        ]
    },
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores

        perguntaAtual.alternativas.forEach((alternativa, index) => {
            const btnAlternativa = document.createElement("button");
            btnAlternativa.textContent = alternativa;
            btnAlternativa.addEventListener("click", () => selecionarAlternativa(index));
            caixaAlternativas.appendChild(btnAlternativa);
        });
    } else {
        mostraResultado();
    }
}

function selecionarAlternativa(index) {
    respostas[atual] = index;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPrincipal.style.display = "none";
    caixaResultado.style.display = "block";
    
    // Aqui você pode fazer algo com as respostas, como calcular um resultado
    textoResultado.textContent = `Você respondeu ${respostas.length} perguntas.`;
}

// Inicializa mostrando a primeira pergunta
mostraPergunta();
