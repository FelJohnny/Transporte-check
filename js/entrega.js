function trocaVeiculo(){
    var veiculoList = document.getElementById("veiculos");
    var veiculosValues = veiculoList.options[veiculoList.selectedIndex].value;
    
    let imgVeiculo1 = document.querySelector('.contain-circulo-veiculo1');
    let imgVeiculo2 = document.querySelector('.contain-circulo-veiculo2');

    if (veiculosValues == 1){
        
        imgVeiculo1.style.display ='block';   
        imgVeiculo2.style.display='none';
        
    }else if(veiculosValues == 2){
        

        imgVeiculo2.style.display='block';
        imgVeiculo1.style.display='none';
    }
    
    }
