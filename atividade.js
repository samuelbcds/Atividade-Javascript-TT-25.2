let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";

function processarNotas(notasString) {
    
    let notas = notasString.split(',');
    let notasNumericas = [];

    for (let i = 0; i < notas.length; i++) {
        let numero = parseFloat(notas[i]);
        notasNumericas.push(numero);
    }
    return notasNumericas;
}

function calcularMediaNotas(notasString) {
    let notas = processarNotas(notasString);
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    let mediaTurma = soma/notas.length;
    return mediaTurma;
    
}

function mostrarSituacaoAluno(notasString) {
    let notas = processarNotas(notasString);
    let mediaTurma = calcularMediaNotas(notasString);
    let situacaoAluno = {};

    for (let i = 0; i < notas.length; i++) {
        let media = 5.0;
        let nota = notas[i];

        if (nota >= media && nota >= mediaTurma) {
            situacaoAluno[nota] = "Aprovado e Acima da media da turma";
        } else if (nota < media && nota >= mediaTurma) {
            situacaoAluno[nota] = "Reprovado e Acima da media da turma";
        } else if (nota >= media && nota < mediaTurma) {
            situacaoAluno[nota] = "Aprovado e Abaixo da media da turma";
        } else {
            situacaoAluno[nota] = "Reprovado e Abaixo da media da turma";
        }
    }

    console.log(situacaoAluno);
}

mostrarSituacaoAluno(notasString);