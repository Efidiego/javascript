function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || parseInt(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - parseInt(fano.value);
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if( idade >=0 && idade < 18){
                // criança
            } else if ( idade < 21) {
                //jovem
            } else if ( idade < 58) {
                //Adulto
            } else {
                //idoso
            }   
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if( idade >=0 && idade < 18){
                // criança
            } else if ( idade < 21) {
                //jovem
            } else if ( idade < 58) {
                //Adulto
            } else {
                //idoso
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    }
}