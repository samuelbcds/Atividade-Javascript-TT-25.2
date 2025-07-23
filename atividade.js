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



let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";

function processarNotas(notasString){
    
     let notasNumericas = notasString.split(",").map(parseFloat);
    return notasNumericas
}
console.log(processarNotas(notasString))

function calcularMediaNotas(notasString){
   let notas = processarNotas(notasString);
   let soma = 0;
   for (let i = 0; i < notas.length; i++) {
       soma += notas[i];
   }
   mediaTurma = soma / notas.length;
   

    return mediaTurma
}
console.log(calcularMediaNotas(notasString))

function mostrarSituacaoAluno(notasString){
    
    let situacaoAluno = {};
    let mediaTurma = calcularMediaNotas(notasString);
    let notasNumericas = processarNotas(notasString);

    for (let i = 0; i < notasNumericas.length; i++) {
        let situacao = notasNumericas[i] >= 5.0 ? "Aprovado" : "Reprovado";
        situacao += notasNumericas[i] > mediaTurma ? " e Acima da media da turma" : " e Abaixo da media da turma";
        situacaoAluno[notasNumericas[i]] = situacao;
    }

    console.log(situacaoAluno)
    
    
}

mostrarSituacaoAluno(notasString);
