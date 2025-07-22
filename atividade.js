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



function processarNotas(notasString) {
    // Converte a string para um array de números
    let notasNumericas = notasString.split(',').map(nota => parseFloat(nota.trim()));
    return notasNumericas;
}

function calcularMediaNotas(notasString) {
    let notas = processarNotas(notasString);
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    let mediaTurma = soma / notas.length;
    return mediaTurma;
}

function mostrarSituacaoAluno(notasString) {
    let notas = processarNotas(notasString);
    let mediaTurma = calcularMediaNotas(notasString);
    let situacaoAluno = {};

    notas.forEach(nota => {
        let aprovado = nota >= 5.0;
        let acimaMedia = nota >= mediaTurma;

        if (aprovado && acimaMedia) {
            situacaoAluno[nota] = "Aprovado e Acima da media da turma";
        } else if (!aprovado && acimaMedia) {
            situacaoAluno[nota] = "Reprovado e Acima da media da turma";
        } else if (aprovado && !acimaMedia) {
            situacaoAluno[nota] = "Aprovado e Abaixo da media da turma";
        } else {
            situacaoAluno[nota] = "Reprovado e Abaixo da media da turma";
        }
    });

    console.log(situacaoAluno);
}

// Exemplo de uso:
let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";




//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
mostrarSituacaoAluno(notasString);