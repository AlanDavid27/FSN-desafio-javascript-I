const alunosDaEscola = [
    { nome: "Henrique", notas: [], cursos: [], faltas: 5 },
    { nome: "Edson", notas: [], cursos: [], faltas: 2 },
    { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
    { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 },
    { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, 
    { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }
];

function adicionarAluno(nome, notas, cursos, faltas){
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    let aluno = {nome, notas, cursos, faltas};
    
    alunosDaEscola.push(aluno);
    console.log("Aluno foi adicionado");
    }
   
function listarAlunos(){


        /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
        Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
        for (let i = 0; i < alunosDaEscola.length; i++) {
        
            console.log("Nome do aluno:", alunosDaEscola[i].nome);
            console.log("notas do aluno:", alunosDaEscola[i].notas);
            console.log("cursos do aluno:", alunosDaEscola[i].cursos);
            console.log("faltas do aluno:", alunosDaEscola[i].faltas);
               
        };
    };
 
function procurarAluno(nome){
    let encontrado;
    for (let i = 0; i < alunosDaEscola.length; i++) {
   if (alunosDaEscola[i].nome == nome) {
       encontrado = 1
       
   };
};
return encontrado  
}
        

function buscarAluno(nome){
/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
E deverá devolver um aluno em seu retorno. */
if(procurarAluno(nome)== 0){
    console.log(`O Aluno: ${nome} não cadastrado`)
}
else{ 
    console.log(`O Aluno: ${nome} já está cadastrado`)
};
    
};

function matricularAluno(aluno,curso){
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == aluno) {
                alunosDaEscola[i].cursos.push(curso,new Date());
                
           };
};
    alunosMatriculados(aluno,curso)
};

function alunosMatriculados (aluno,curso){

    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a 
    data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    if (procurarAluno(aluno) == 0){
        console.log("!.......Aluno inexistente......!")
    }else{

       console.log (`O Aluno: ${aluno} acaba de ser matriculado no curso: ${curso}, na Data: ` + new Date());
    
    };
    };

function validaMatricula(aluno){
        let matricula;
        for (let i = 0; i < alunosDaEscola.length; i++) {

            if (alunosDaEscola[i].nome == aluno) {

                if (alunosDaEscola[i].cursos.length > 0){

                    matricula = 1;
                };
            };
        };
        return matricula;
    };   
    

function aplicarFalta(aluno){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. 
     Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. 
     Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

    //checar se exise o aluno
   if (procurarAluno(aluno) == 0){
    console.log(`Aluno ${aluno} não cadastrado!!!`);
   
    //checar se o aluno esta matriculado
   }else{
       if (validaMatricula(aluno)== 0){
        console.log(`Aluno ${aluno} não matriculado, operação não realizada!`);
       }
       else{
        for (let i = 0; i < alunosDaEscola.length; i++) {

            if (alunosDaEscola[i].nome == aluno) {
                if (alunosDaEscola[i].cursos.length > 0){
                    alunosDaEscola[i].faltas++;
                    console.log('Falta cadastrada!');
                   }
                   else{
                    console.log('Aluno inexistente!');
                };
            };    
        };
    };
};
};



function aplicarNota(aluno,nota){
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. 
     Você deverá adicionar uma nota ao aluno na sua lista de notas. 
     Você deverá dar um feedback ao concluir a tarefa. 
     Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
   if (procurarAluno(aluno) == 0){
    console.log('Aluno não cadastrado,será necessario cadastra-lo primeiro, Falta não cadastrada')
   }else{
   if(validaMatricula(aluno) == 0){
        console.log('Aluno não matriculado em nenhum curso, nota não cadastrada') 
   }else{
    for (let i = 0; i < alunosDaEscola.length; i++) {
     if (alunosDaEscola[i].nome == aluno) {
         alunosDaEscola[i].notas.push(nota)
         console.log('nota inserida com sucesso')
     }
    }


   }
}
}

function aprovarAluno(aluno){
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, 
    deverá dizer se o mesmo está aprovado ou não. 
    Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
   var faltas=0
   var media=0
   var soma = 0
      if (procurarAluno(aluno) == 0){
    console.log(`O Aluno ${aluno} não cadastrado, por favor cadastrar...`)
   }else{
   if(validaMatricula(aluno) == 0){
        console.log(`O Aluno ${aluno} não matriculado...`) 
   }else{
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome == aluno) {
            faltas = alunosDaEscola[i].faltas 
            
            for(let  index = 0; index< alunosDaEscola[i].notas.length; index++){
                soma = alunosDaEscola[i].notas[index] + soma
                media = soma / alunosDaEscola[i].notas.length
                }
        }
    }
        if (faltas <= 3 && media >= 7){
            console.log('Aluno está aprovado')
        }else{
            console.log('Aluno está reprovado')
        }
    }
}
}

