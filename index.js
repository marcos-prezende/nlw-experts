const perguntas = [
    {
        pergunta: "Qual é a função do método 'console.log()' em JavaScript?",
        respostas: [
            "Imprimir mensagens de erro no console",
            "Exibir mensagens de alerta na tela",
            "Imprimir mensagens no console do navegador",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var = minhaVariavel;",
            "variavel minhaVariavel;",
            "var minhaVariavel;",
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' verifica em JavaScript?",
        respostas: [
            "Valor e tipo de dados iguais",
            "Valor de dados igual",
            "Tipo de dados igual",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
        respostas: [
            "Adicionar um elemento HTML à página",
            "Adicionar um evento a um elemento HTML",
            "Remover um evento de um elemento HTML",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "removeLast()",
            "pop()",
            "deleteLast()",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar novos elementos ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "add()",
        ],
        correta: 0
    },
    {
        pergunta: "Como se chama o processo de combinar duas ou mais strings em JavaScript?",
        respostas: [
            "Concatenação",
            "Atribuição",
            "Divisão",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Ou lógico",
            "E lógico",
            "Operador ternário",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter uma string para um número inteiro",
            "Converter um número inteiro para uma string",
            "Converter uma string para um número decimal",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'Math.random()' faz em JavaScript?",
        respostas: [
            "Gera um número aleatório entre 0 e 1",
            "Arredonda um número para o inteiro mais próximo",
            "Ordena os elementos de um array aleatoriamente",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)

            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        quizItem.querySelector('dl').appendChild(dt)

    }

    quizItem.querySelector('dl dt').remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
