const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de descobrir um novo chat que pode responder a qualquer pergunta e gerar imagens e áudios realistas. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso parece meio perturbador!",
                afirmacao: "Você achou a nova tecnologia perturbadora."
            },
            {
                texto: "Isso é incrível e revolucionário!",
                afirmacao: "Você achou a nova tecnologia incrível e revolucionária."
            }
        ]
    },
    {
        enunciado: "Com a chegada da Inteligência Artificial, sua professora de tecnologia decidiu que você deve escrever um trabalho sobre o uso de IA na educação. Como você procede?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de busca que utiliza IA para ajudar a coletar informações e explicar de forma simples.",
                afirmacao: "Você usou uma ferramenta de busca com IA para facilitar a coleta e explicação das informações."
            },
            {
                texto: "Pesquisa o tema por conta própria com base em conversas, pesquisas e conhecimentos prévios.",
                afirmacao: "Você fez a pesquisa e escreveu o trabalho usando seus próprios conhecimentos e fontes."
            }
        ]
    },
    {
        enunciado: "Após entregar o trabalho, sua professora organiza um debate sobre o impacto da IA no futuro do trabalho. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Acredito que a IA trará novas oportunidades de trabalho e desenvolverá novas habilidades.",
                afirmacao: "Você acredita que a IA criará novas oportunidades e aprimorará habilidades."
            },
            {
                texto: "Estou preocupado com a substituição de empregos por máquinas e defendo a proteção dos trabalhadores.",
                afirmacao: "Você expressou preocupação com a substituição de empregos e a necessidade de proteger os trabalhadores."
            }
        ]
    },
    {
        enunciado: "Depois da discussão, você precisa criar uma imagem que expresse seu ponto de vista sobre a IA. Qual ferramenta você escolhe?",
        alternativas: [
            {
                texto: "Crio a imagem usando um software de design tradicional, como o Paint.",
                afirmacao: "Você usou um software de design tradicional para criar sua imagem."
            },
            {
                texto: "Utilizo um gerador de imagens baseado em IA para criar a imagem.",
                afirmacao: "Você usou um gerador de imagens baseado em IA para criar sua imagem."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto de biologia em grupo para entregar e um membro do grupo usou IA para concluir o trabalho. O trabalho ficou idêntico ao gerado pelo chat. O que você faz?",
        alternativas: [
            {
                texto: "Acredito que usar o texto gerado pelo chat é aceitável e não vejo problema em utilizá-lo diretamente.",
                afirmacao: "Você considera aceitável usar diretamente o texto gerado pelo chat."
            },
            {
                texto: "Embora a IA seja avançada, é importante revisar o trabalho e adicionar suas próprias contribuições e análises.",
                afirmacao: "Você acredita que é importante revisar e personalizar o trabalho, mesmo com a ajuda da IA."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
