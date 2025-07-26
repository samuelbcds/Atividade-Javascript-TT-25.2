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
    let notasSeparadas = notasString.split(",");
    let notasNumericas = [];
    for (let nota of notasSeparadas){
        let notaTemp = Number(nota);
        notasNumericas.push(notaTemp);
    }
    return notasNumericas;
}

function calcularMediaNotas(notasString){
    let notasNumericas = processarNotas(notasString);
    let somaNotas = 0;
    for(let nota of notasNumericas){
        somaNotas += nota;
    }
    mediaTurma = somaNotas/notasNumericas.length;
    return mediaTurma
}

function mostrarSituacaoAluno(){
    //modifiquei a chamada da função para ser possível passar o argumento pelo terminal
    let notasString = process.argv[2]
    let mediaTurma = calcularMediaNotas(notasString);
    let notasNumericas = processarNotas(notasString);
    let situacaoAluno = {};
    for(let nota of notasNumericas){
        if(nota >= 5 && nota >= mediaTurma){
            situacaoAluno[nota.toString()] = 'Aprovado e acima da média da turma';
        }
        else if(nota < 5 && nota >= mediaTurma){
            situacaoAluno[nota.toString()] = 'Reprovado e acima da média da turma';
        }
        else if(nota < 5 && nota < mediaTurma){
            situacaoAluno[nota.toString()] = 'Reprovado e abaixo da média da turma';
        }   
        else if(nota >= 5 && nota < mediaTurma){
            situacaoAluno[nota.toString()] = 'Aprovado e abaixo da média da turma';
        }        
    }
    console.log(situacaoAluno);
}


//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
mostrarSituacaoAluno()