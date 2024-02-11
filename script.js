
const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array?",
        respostas: [
            "push()",
            "pop()",
            "shift()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual símbolo é usado para concatenar strings em JavaScript?",
        respostas: [
            "+",
            "&",
            "|"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toNumber()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para verificar a igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método usado para definir um intervalo em JavaScript?",
        respostas: [
            "setInterval()",
            "setTimeout()",
            "setTime()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
        respostas: [
            "105",
            "15",
            "Erro"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Verifica se um elemento é de um tipo específico",
            "Verifica se dois elementos são do mesmo tipo",
            "Retorna o tipo de dado de uma expressão"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método é usado para remover um elemento específico de um array em JavaScript?",
        respostas: [
            "filter()",
            "delete()",
            "splice()"
        ],
        correta: 2
    }
];


const quiz = document.querySelector('#quiz') // Buscar um elemento HTML
const template = document.querySelector('template')
//console.log("Opa")

//cria um tipo de objeto especifico
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta //Muda o conteudo
   
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //vai pegar um elemento que está dentro de outro
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
                //alert("Está certoooo")
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        } //onchange espera uma função
        
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
   
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}