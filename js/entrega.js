let veiculoList = document.getElementById("veiculos");
let danificacaoList = document.getElementById("danificacao");
let h3Danificacao = document.querySelector('.desc-danificacao');
function trocaVeiculo(){

    let veiculosValues = veiculoList.options[veiculoList.selectedIndex].value;
    let imgVeiculo1 = document.querySelector('.contain-circulo-veiculo1');
    let imgVeiculo2 = document.querySelector('.contain-circulo-veiculo2');

    if (veiculosValues == 1){
        h3Danificacao.style.display='block';
        danificacaoList.style.display='block';

        imgVeiculo1.style.display ='block';   
        imgVeiculo2.style.display='none';
        
        
    }else if(veiculosValues == 2){
        h3Danificacao.style.display='block';
        danificacaoList.style.display='block';

        imgVeiculo2.style.display='block';
        imgVeiculo1.style.display='none';
    }
    
}

let h3BoxImg = document.querySelector('.desc-boximg');
let circulobtn = document.querySelectorAll('.circulo-btn');

function veiculoDanificado(){
    let danificacaoValues = danificacaoList.options[danificacaoList.selectedIndex].value;    
    console.log(danificacaoValues);
    console.log(circulobtn);
    if (danificacaoValues == 1){
        h3BoxImg.style.display='initial';
        for(let i = 0; i < circulobtn.length; i++){ //utilizando estrutura de repeticao para selecionar todos os circulos-btn's pois esta utilizando querryselectorall
            circulobtn[i].style.display='initial';
        }

    }else if(danificacaoValues == 2){
        h3BoxImg.style.display='none'
        for(let i = 0; i < circulobtn.length; i++){
            circulobtn[i].style.display='none';
        }
    }
    
}
    