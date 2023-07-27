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

let botaoClicado = document.querySelectorAll("[data-btn-principal]");

botaoClicado.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        
        manipulaLista(evento.target.dataset.btn)
        
    })
})

let problemaOption = selectDanifiList.options;

function manipulaLista(btnClicado){

    if(btnClicado === "btn1"){
        
        limpaHiddenTrue();
        for(let i = 1; i < 10; i++){
            selectDanifiList.options[i].hidden = false;
        }
        
        
    }else if(btnClicado ==="btn2"){
        
        limpaHiddenTrue();
        for(let i = 11; i < 20; i++){
            selectDanifiList.options[i].hidden = false;
        }

    }else if(btnClicado ==="btn3"){
        
        limpaHiddenTrue();
        for(let i = 20; i < 30; i++){
            selectDanifiList.options[i].hidden = false;
        }

    }else if(btnClicado ==="btn4"){
        
        limpaHiddenTrue();
        for(let i = 30; i < 42; i++){
            selectDanifiList.options[i].hidden = false;
        }

    }

    function limpaHiddenTrue(){
        for(let i = 1; i < 42; i++){
            selectDanifiList.options[i].hidden = true;
        }
    }

}


   
    
    

//------------------------IN-PROGRESS--------------------------------//

