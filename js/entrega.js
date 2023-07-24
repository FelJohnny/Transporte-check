let veiculoList = document.getElementById("veiculos");
let danificacaoList = document.getElementById("danificacao");
let h3Danificacao = document.querySelector('.desc-danificacao');

//------------------------------SELECIONE O VEICULO-----------------------------
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

//------------------------------O VEICULO POSSUI DANIFICAÇÃO?-----------------------------

let h3BoxImg = document.querySelector('.desc-boximg');
let circulobtn = document.querySelectorAll('.circulo-btn');
let selectDanifiList = document.getElementById('problema');

function veiculoDanificado(){
    let danificacaoValues = danificacaoList.options[danificacaoList.selectedIndex].value;    
    let h3SelecProblem = document.querySelector('.desc-select-problem');
    let addProblem = document.querySelector('.add');

    if (danificacaoValues == 1){ //-----------SIM---------------
        h3BoxImg.style.display='initial';
        for(let i = 0; i < circulobtn.length; i++){ //utilizando estrutura de repeticao para selecionar todos os circulos-btn's pois esta utilizando querryselectorall
            circulobtn[i].style.display='initial';
        }

        h3SelecProblem.style.display='block';
        selectDanifiList.style.display='block';
        addProblem.style.display='block';
        

    }else if(danificacaoValues == 2){//-----------NÃO---------------
        h3BoxImg.style.display='none'
        for(let i = 0; i < circulobtn.length; i++){ //utilizando estrutura de repeticao para selecionar todos os circulos-btn's pois esta utilizando querryselectorall
            circulobtn[i].style.display='none';
        }

        h3SelecProblem.style.display='none';
        selectDanifiList.style.display='none';
        addProblem.style.display='none';

        let danificacaoSelect = document.getElementById('problema');
        danificacaoSelect.removeAttribute('required'); // removendo a necessidade de preencimento do campo
        
    }
    
}
    
//-----------------SELECIONE O PROBLEMA-------------------



function selecioneProblem(botaoselecionado){    
    problemList = document.getElementById('problema'); // select dos problemas
    problemValue = problemList.options[problemList.selectedIndex].value; // valores do select dos problemas
    
    
    veiculo1Btn1 = document.querySelector('veiculo1-btn-1');
    veiculo1BTN2 = document.querySelector('veiculo1-btn-2');
    veiculo1BTN3 = document.querySelector('veiculo1-btn-3');
    veiculo1BTN4 = document.querySelector('veiculo1-btn-4');
    

    if(botaoselecionado == '1'){
        veiculo1Btn1.style.background='green';
    }else if(botaoselecionado == '2'){
        veiculo1BTN2.style.background='blue';
    }


   
    
    
}
//------------------------IN-PROGRESS--------------------------------//

