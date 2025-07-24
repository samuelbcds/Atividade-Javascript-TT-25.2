function processarNotas(notasString){
 
    let notaAtual="", notasNumericas=[];

    for(let i = 0; i < notasString.length; i++){
        
        notaAtual+=notasString[i];
        if(notasString[i+1]==','|| i == notasString.length-1){

            i+=2;
            notasNumericas.push(parseFloat(notaAtual)); 
            notaAtual="";
        }
    }
    return notasNumericas
}

function calcularMediaNotas(notasString){

  let notasTurma =  processarNotas(notasString);
  let mediaTurma = 0;

    for(let i = 0; i < notasTurma.length; i++){
        mediaTurma+=notasTurma[i];
    }

    mediaTurma=mediaTurma/notasTurma.length;

    return mediaTurma
}

function mostrarSituacaoAluno(notasString){

    let notasTurma = processarNotas(notasString), mediaTurma=calcularMediaNotas(notasString);
    let situacaoAluno="";

    for(let i = 0; i < notasTurma.length; i++){
        if(notasTurma[i] >= 5){
            situacaoAluno += notasTurma[i] + ": Aprovado e ";
        }
        else{
            situacaoAluno += notasTurma[i] + ": Reprovado e ";
        }

        if(notasTurma[i] > mediaTurma){
            situacaoAluno+="acima da media da turma ";
        }
        else if(notasTurma[i] < mediaTurma){
            situacaoAluno+="abaixo da media da turma ";
        }
        else{
            situacaoAluno+="dentro da media da turma ";
        }
        console.log(situacaoAluno);
        situacaoAluno="";
    }
}


mostrarSituacaoAluno("7.5, 8.0, 6.2, 9.5, 4.0");