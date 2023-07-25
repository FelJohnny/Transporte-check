function trocaVeiculo(){
    var veiculoList = document.getElementById("veiculos");
    var danificacaoList = document.getElementById("danificacao");
    let h3Danificacao = document.querySelector('.desc-danificacao');
    
    
    let imgVeiculo1 = document.querySelector('.contain-circulo-veiculo1');
    let imgVeiculo2 = document.querySelector('.contain-circulo-veiculo2');
    
    
    var veiculosValues = veiculoList.options[veiculoList.selectedIndex].value;

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
