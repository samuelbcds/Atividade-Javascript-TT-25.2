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
    //cria um vetor de strings e divide ela por virgula e remove espaços em branco
    const vetorString = notasString.split(',').map(nota => nota.trim());
    // transforma as strings em float
    const notasNumericas = vetorString.map(notaString => parseFloat(notaString));

    return notasNumericas
}

function calcularMediaNotas(notasString){
    //vetor das notas dos alunos
    let notas = processarNotas(notasString);
    let soma = 0;
    //tamanho do vetor notas
    let tamanho = notas.length; 
    
    //soma todos os valores
    for(var i = 0; i<tamanho; ++i){
        soma += notas[i];
    }
    //obtendo a media da turma
    let mediaTurma = soma/tamanho;


    return mediaTurma
}

function mostrarSituacaoAluno(notasString){
    //crio um vetor das notas dos alunos
    let notas = processarNotas(notasString);

    //tamanho do vetor notas
    let tamanho = notas.length;

    //media dos alunos
    let media = calcularMediaNotas(notasString);

    //vetor de objetos
    const lista = []

    //adicionando informação no vetor de objetos com as notas e os status de aprovação
    for(var i = 0; i<tamanho; ++i){
        //caso de reprovação
        if(notas[i]<5 ){
            //caso reprovado abaixo da media
            if(notas[i]<media){
                lista[i] = {
                    nota: notas[i],
                    statu: "\'Reprovado abaixo da média daturma\'",
                    
                }
            }
            //caso reprovado acima da media
            else{
                lista[i] = {
                    nota: notas[i],
                    statu: "\'Reprovado acima da média da turma\'",
                    
                }
            }

        }
        //caso Aprovado
        else{
            //caso aprovado abaixo da media
            if(notas[i]<media){
                lista[i] = {
                    nota: notas[i],
                    statu: "\'Aprovado abaixo da média da turma\'",
                    
                }
            }
            // caso aprovado acima da media
            else{
                 lista[i] = {
                    //
                    nota: notas[i],
                    statu: "\'Aprovado acima da média da turma\'",
                    
                }

            }
        }
    } 

    //criando um variavel não vazia para evitar undefined
    var situacaoAluno ="";

    //concatenação da string
    for(var i = 0; i<tamanho; ++i){
        //
        situacaoAluno += "\'"+lista[i].nota.toFixed(1)+"\'"+": "+lista[i].statu;

        //esse condicional serve para colocar as virgulas nos lugares certos
        if(i<tamanho-1){
            situacaoAluno += ", "
        }
    }
   
    console.log(situacaoAluno);
}




//Ao terminar remova o comentario da linha abaixo para que a funcao principal seja chamada e utilize node atividade.js no terminal
//mostrarSituacaoAluno()
let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";
mostrarSituacaoAluno(notasString);