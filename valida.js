const usuarios = [
    {
        login: 'TATA',
        pass: 'akfsp37@#'
    },
    {
        login: 'GT',
        pass: 'akfsp37@#'
    },
    {
        login: '#',
        pass: '#'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha ==
        usuarios[i].pass){
            validaLogin = true
            break
    }
    }

    if(validaLogin == true){
        location.href = 'blog.html'
        alert('LOGADO (A) COM SUCESSO!')
}            
})

