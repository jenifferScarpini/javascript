    function verificar() {
        var data = new Date();
        var ano = data.getFullYear();
        var fAno = document.getElementById('txtano');
        var res = document.getElementById('res');
    
        if (fAno.value.length == 0 || fAno.value > ano) {
            window.alert('Verifique os dados e tente novamente');
        } else {
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fAno.value);
            res.innerHTML = `Idade calculada: ${idade}`;
            var genero = '';
            var img = document.createElement('img');
            img.setAttribute('id', 'foto');
            if (fsex[0].checked) {
                genero = 'Homem';
                if (idade >= 0 && idade < 10) {
                    // Criança
                    img.setAttribute('src', 'img/menino.jpg');
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'img/jovem_homem.jpg');
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'img/homem.jpg');
                } else {
                    // Idoso
                    img.setAttribute('src', 'img/idoso.jpg');
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher';
                if (idade >= 0 && idade < 10) {
                    // Criança
                    img.setAttribute('src', 'img/menina.jpg');
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'img/jovem_mulher.jpg');
                } else if (idade < 50) {
                    // Adulta
                    img.setAttribute('src', 'img/mulher.jpg');
                } else {
                    // Idosa
                    img.setAttribute('src', 'img/idosa.jpg');
                }
            }
            res.style.textAlign = 'center'; // Correção: 'center' deve estar entre aspas
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.appendChild(img);
        }
    }
    



















