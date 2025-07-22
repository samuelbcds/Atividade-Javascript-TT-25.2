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



function processarNotas(notasString){
    let notasNumericas = notasString
        .split(/[\s,;]+/)
        .map(nota => parseFloat(nota));
    //console.log(notasNumericas); usado para debug
    return notasNumericas
}

function calcularMediaNotas(notasString){
    notasTransform = processarNotas(notasString);
    let sum = 0;
    for(nota of notasTransform){
        sum = notasTransform[nota] +  sum;
    }
    mediaTurma = (sum/(notasTransform.length));
    //console.log(mediaTurma); usado para debug
    return mediaTurma
}

function mostrarSituacaoAluno(notasString){
    const situacaoAluno = {};
    const notas = processarNotas(notasString);
    const media = calcularMediaNotas(notasString);
    for (nota of notas){
        if(nota > media){
            if(nota > 5) {
                situacaoAluno[nota] = 'Aprovado e Acima da media da turma';
            }else {
                situacaoAluno[nota] = 'Reprovado e Acima da media da turma';
            }
        }else {
            if(nota > 5) {
                situacaoAluno[nota] = 'Aprovado e Abaixo da media da turma';
            }else {
                situacaoAluno[nota] = 'Reprovado e Abaixo da media da turma';
            }
        }
    }
    console.log(situacaoAluno);
    return situacaoAluno;
}


//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";
mostrarSituacaoAluno(notasString);
