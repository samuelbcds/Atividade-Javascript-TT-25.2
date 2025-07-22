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

    // Divide a string por vírgula, remove espaços e converte para número
    // Retorna um array de números
    return notasString.split(',').map(nota => parseFloat(nota.trim()));
}

function calcularMediaNotas(notasString){
    // Processa as notas usando a função processarNotas
    let notasNumericas = processarNotas(notasString);
    
    // Calcula a soma das notas
    let somaNotas = notasNumericas.reduce((acumulador, nota)=>acumulador+ nota, 0);
   
    //Calcula a média das notas
    let mediaTurma = somaNotas / notasNumericas.length;
    
    //retorna a média da turma
    return mediaTurma;
}

function mostrarSituacaoAluno(notasString){

    // Processa as notas usando a função processarNotas
    let notasNumericas = processarNotas(notasString);

    // Calcula a média da turma
    let mediaTurma = calcularMediaNotas(notasString);

    // Cria um objeto para armazenar a situação de cada aluno
    let situacaoAluno = {};

    // Itera sobre as notas numéricas para determinar a situação de cada aluno
    notasNumericas.forEach(nota => {
        if (nota >= 5.0) {
            if (nota >= mediaTurma) {
                situacaoAluno[nota] = "Aprovado e Acima da media da turma";
            } else {
                situacaoAluno[nota] = "Aprovado e Abaixo da media da turma";
            }
        } else {
            if (nota >= mediaTurma) {
                situacaoAluno[nota] = "Reprovado e Acima da media da turma";
            } else {
                situacaoAluno[nota] = "Reprovado e Abaixo da media da turma";
            }
        }
    });

    // Exibe o objeto com a situação de cada aluno no console
    console.log(situacaoAluno);
}


//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";
mostrarSituacaoAluno(notasString);