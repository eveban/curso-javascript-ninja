/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var funcionario = [
    'Everson Silva',
     41,
     'Masculino',
     500.00,
     'Analista de Sistemas'];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(funcionario)[1]); // 41

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunctionTwoParameters(array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var aluno = [
    'Murilo Silva',
     10,
     [1,2, 'Teste'],
     true,
     { b: 2 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunctionTwoParameters(aluno, 0));
console.log(myFunctionTwoParameters(aluno, 1));
console.log(myFunctionTwoParameters(aluno, 2));
console.log(myFunctionTwoParameters(aluno, 3));
console.log(myFunctionTwoParameters(aluno, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:

- esse objeto irá receber 3 propriedades, que serão nomes de livros;

- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ){
    var allBooks = {
        'Os pequenos jangadeiros': {
            quantidadePaginas: 96,
            autor: 'Aristides Fraga Lima',
            editora: 'Ática'
        },
        'Clean Code': {
            quantidadePaginas: 457,
            autor: 'Robert Cecil Martin',
            editora: 'Alta Books'
        },
        'Clean Architecture': {
            quantidadePaginas: 432,
            autor: 'Robert Cecil Martin',
            editora: 'Alta Books'
        }
    };
   return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
'O livro [NOME_DO_LIVRO] tem [X] páginas!'
*/
var bookName = 'Os pequenos jangadeiros'
console.log('O livro '+ bookName +'  tem '+ book( bookName ).quantidadePaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
'O autor do livro [NOME_DO_LIVRO] é [AUTOR].'
*/
console.log('O autor do livro '+ bookName +' é '+ book(bookName).autor +'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
'O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA].'
*/
console.log('O livro '+ bookName +' foi publicado pela editora '+ book(bookName).editora +'.')
