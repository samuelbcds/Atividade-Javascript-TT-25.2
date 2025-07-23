/* 
EJCM TT 25.1 - Exercicio JS
Seu trabalho e criar um pequeno programa que deve processar as notas dos alunos, calcular a media da turma e determinar a situacao de 
cada aluno. Para isso preencha o conteudo das funcoes: processarNotas(), calcularMediaNotas(), mostrarSituacaoAluno()

Abaixo ha um template e instrucoes das funcoes para que voces preencham




A funcao processarNotas() ira receber uma String notasString e mostrar um array de numeros notasNumericas

A funcao calcularMediaNotas() ira receber uma String notasString e ira retornar um numero mediaTurma

A funcao mostrarSituacaoAluno() ira receber uma String notasString e ira mostrar no terminal um Object situacaoAluno onde a Key devera 
ser a nota do aluno e o Value devera ser uma String "Aprovado e Acima da media da turma", "Reprovado e Acima da media da turma", 
"Aprovado e Abaixo da media da turma" ou "Reprovado e Abaixo da media da turma". Alunos com nota igual ou maior que 5.0 estarao 
Aprovados



Exemplo: para let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";
o console deve mostrar { '7.5': 'Aprovado e Acima da media da turma', '8.0': 'Aprovado e Acima da media da turma', '6.2': 'Aprovado e 
Abaixo da media da turma', '9.5': 'Aprovado e Acima da media da turma', '4.0': 'Reprovado e Abaixo da media da turma' }
*/


let notasString = "7.5, 8.0, 6.2, 9.5, 4.0"

function processarNotas(notasString){
    let i = 0
    let notasNumericas = []
    // a cada vírgula que aparece se inicia um novo elemento da array
    notasString = notasString.split(",")

    do{
        // tranformar cada elemento em float um por um
        notasNumericas[i] = parseFloat(notasString[i])
        i++
    } while(i < notasString.length)

    return notasNumericas
}

let notasNumericas = processarNotas(notasString)

function calcularMediaNotas(notasString){
    // reduzir o array a um unico valor utilizando a função reduzida => de soma
    let soma = notasNumericas.reduce((acumulador, nota) => acumulador + nota, 0)
    let mediaTurma = soma / notasNumericas.length

    return mediaTurma
}

function mostrarSituacaoAluno(notasString){ 
    let mediaTurma = calcularMediaNotas(notasString)
    let situacaoAluno = {}

    // Ir de nota em nota dentro da array
    for(let nota of notasNumericas){
        let aprovado = nota >= 5.0 ? "Aprovado" : "Reprovado"
        let comparaMedia = nota >= mediaTurma ? "Acima da media da turma" : "Abaixo da media da turma"
        // .toFixed(1) para que todas as notas tenham 1 casa decimal
        situacaoAluno[nota.toFixed(1)] = aprovado + " e " + comparaMedia
    }

    console.log(situacaoAluno)
}


//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
mostrarSituacaoAluno()