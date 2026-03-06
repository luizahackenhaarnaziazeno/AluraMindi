function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    //obs: elemento= elemento!=null
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let count = 0; count < listaDeTeclas.length; count++) {

    const tecla = listaDeTeclas[count];

    const instrumento = tecla.classList[1];

    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    tecla.onkeydown = function () {

        // para saber qual tecla esta sendo usada -console.log(evento)
        // console.log(evento.code);

        if (evento.code === 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


    //console.log(count);
}
