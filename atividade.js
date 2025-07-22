
let notasString="10, 1.5, 3.1, 9, 5.0, 5.5";

function processarNotas(notasString){

    const notasNumericas=notasString.split(", ");
    
    for(let i=0;i<notasNumericas.length;i++)
        notasNumericas[i]=parseFloat(notasNumericas[i]);
    
    console.log("Array de notas: ");
    console.log(notasNumericas);

    return notasNumericas;
}

function calcularMediaNotas(notas){

    let mediaTurma=0;

    for(let i=0;i<notas.length;i++)
        mediaTurma+=notas[i];

    return mediaTurma/notas.length;
}

function mostrarSituacaoAluno(notasString){

    let notas = processarNotas(notasString);
    let mediaTurma = calcularMediaNotas(notas);
    let mediaAprovacao=5
    let situacaoAluno={};

    for(let i=0;i<notas.length;i++){
        if(notas[i]<mediaAprovacao)
            situacaoAluno[notas[i]]="Reprovado ";
        else
            situacaoAluno[notas[i]]="Aprovado ";
        if(notas[i]<mediaTurma)
            situacaoAluno[notas[i]]+="e Abaixo da media da turma";
        else
            situacaoAluno[notas[i]]+="e Acima da media da turma";
    }


    console.log(Object.entries(situacaoAluno));
}

mostrarSituacaoAluno(notasString);
