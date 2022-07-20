function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove('dados-invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
        } else {
        input.parentElement.classList.add('dados-invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input)
    }
}


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O e-mail digitado não é válido',
        patternMismatch: 'Por favor digite um e-mail válido'

    } ,
    assunto:  {
        valueMissing: 'O campo assunto não pode estar vazio'
    },
    mensagem:  {
        valueMissing: 'O campo mensagem não pode estar vazio'
    },
    senha: {
        valueMissing: 'O campo senha não pode estar vazio'
    },
    url: {
        valueMissing: 'O campo URL da imagem não pode estar vazio'
    },
    nomeDoProduto: {
        valueMissing: 'O campo Nome Do Produto não pode estar vazio'
    },
    categoria: {
        valueMissing: 'O campo Categoria não pode estar vazio'
    },
    descricao: {
        valueMissing: 'O campo descrição não pode estar vazio'
    },
    preco: {
        valueMissing: 'O campo Preço não pode estar vazio'
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError',
    'patternMismatch'
]

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem;
}


const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
// usando mascara para o input preco antes da validação:
    if(input.dataset.tipo==='preco'){
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            suffix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
//validando os inputs
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})


const textareas = document.querySelectorAll('textarea')
textareas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

