function processarNotas(notasString) {
    let notasNumericas = notasString.split(",").map(nota => parseFloat(nota));
    return notasNumericas;
}





function calcularMediaNotas(notasString) {
    let notas = processarNotas(notasString);
    let soma = notas.reduce((total, nota) => total + nota, 0);
    let mediaTurma = soma / notas.length;
    return  mediaTurma;

}



function mostrarSituacaoAluno(notasString) {
  let notasNumericas = processarNotas(notasString);
  let mediaTurma = calcularMediaNotas(notasString);
  
  const situacaoAluno = {};
  
  for ( let i = 0; i < notasNumericas.length; i++) {
    let nota = notasNumericas[i];
    let aprovado = nota >=5? "aprovado" : "reprovado";
    let posicao = nota >= mediaTurma? "acima da média da turma" : "abaixo da média da turma" ;
    
    situacaoAluno[nota.toFixed(1)] = `${aprovado} e ${posicao}`;
    
  }
  
  
  console.log(situacaoAluno)
}

let notasString = "7.5, 8.0, 6.2, 9.5, 4.0";
mostrarSituacaoAluno(notasString)