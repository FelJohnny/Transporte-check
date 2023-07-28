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
let selectDanifiList = document.querySelector('.c-problema');

function veiculoDanificado(){
    let danificacaoValues = danificacaoList.options[danificacaoList.selectedIndex].value;    
    let h3SelecProblem = document.querySelector('.desc-select-problem');
    let addProblem = document.querySelector('.cont-add-remove');

    if (danificacaoValues == 1){ //-----------SIM---------------
        h3BoxImg.style.display='initial';
        for(let i = 0; i < circulobtn.length; i++){ //utilizando estrutura de repeticao para selecionar todos os circulos-btn's pois esta utilizando querryselectorall
            circulobtn[i].style.display='initial';
        }

        h3SelecProblem.style.display='block';
        selectDanifiList.style.display='block';
        addProblem.style.display='flex';
        

    }else if(danificacaoValues == 2){//-----------NÃO---------------
        h3BoxImg.style.display='none'
        for(let i = 0; i < circulobtn.length; i++){ //utilizando estrutura de repeticao para selecionar todos os circulos-btn's pois esta utilizando querryselectorall
            circulobtn[i].style.display='none';
        }

        h3SelecProblem.style.display='none';
        selectDanifiList.style.display='none';
        addProblem.style.display='none';

        let danificacaoSelect = document.querySelector('.c-problema');
        danificacaoSelect.removeAttribute('required'); // removendo a necessidade de preencimento do campo
        
    }
    
}
    
//---------------------------------SELECIONE AREA DO PROBLEMA--------------------------------------

let botaoClicado = document.querySelectorAll("[data-btn-principal]");


botaoClicado.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        
        manipulaLista(evento.target.dataset.btn)
        
    })
        
})
    
    
    //let problemaOptionaAll = document.querySelectorAll('.c-problema option'); //nao sera usado pois so aplica no primeiro select, não nos clones
    
function limpaHiddenTrue(){ //desabilita visualização de todos options ao ser chamado
    for(let i = 1; i < 42; i++){
            //problemaOptionaAll[i].hidden = true;
            AllSelectProblema[cont].options[i].hidden = true;
    }
}


function manipulaLista(btnClicado){
    AllSelectProblema = document.querySelectorAll('.c-problema');

    if(btnClicado === "btn1"){
        
        limpaHiddenTrue();
        for(let i = 1; i < 10; i++){
            AllSelectProblema[cont].options[i].hidden = false
            //problemaOptionaAll[i].hidden = false;
        }
        
        
        
    }else if(btnClicado ==="btn2"){
        
        limpaHiddenTrue();
        for(let i = 11; i < 20; i++){
            AllSelectProblema[cont].options[i].hidden = false
            //problemaOptionaAll[i].hidden = false;
        }
        
        
    }else if(btnClicado ==="btn3"){
        
        limpaHiddenTrue();
        for(let i = 20; i < 30; i++){
            //problemaOptionaAll[i].hidden = false;
            AllSelectProblema[cont].options[i].hidden = false
        }
        

    }else if(btnClicado ==="btn4"){
        
        limpaHiddenTrue();
        for(let i = 30; i < 42; i++){
            //problemaOptionaAll[i].hidden = false;
            AllSelectProblema[cont].options[i].hidden = false
        }

    }
    
    
   // problemaOptionaAll = document.querySelectorAll('.c-problema option');
}


   
    
    

//------------------------ADD NEW PROBLEM--------------------------------//



let add = document.querySelector('.add');

add.addEventListener('click',addNewProblem); //ao clicar chama funcao

let cont = 0; // conta a quantidade de vezes que e adicionado um novo problema, para ser usado no AllSelectProblema(identifica quem foi adicionado e aplica o if btnclicado no exato adicionado)

function addNewProblem(){
    let selectDanifiList = document.querySelectorAll('.c-problema'); //alocando a tag <select> problema
    let containerSelectProblema = document.querySelector('.containerSelectProblema'); //alocando container do select, finalidade: adicionar o clone abaixo
    let cloneSelectProblema = selectDanifiList[cont].cloneNode(true); //alocando clone do primeiro item do array na variavel
    for(let i = 0; i < 43; i++){ // deixando todos os options do clone invisiveis ao executar a funcao addnew, obrigando o usuario a apertar o botao informando o local do problema novamente
        cloneSelectProblema.options[i].hidden = true;

    }
    containerSelectProblema.appendChild(cloneSelectProblema); //posicionando clone abaixo do original    
    selectDanifiList[cont].disabled = true; //desabilitando o select anterior ao adicionar um novo, utilizando o contador antes de cont++
    
    cont++; //adiciona +1 no contador ao ser executado
    console.log('numero de problemas adicionais: ',cont);
    let contif = cont; // variavel criada para usar na condicional(cont não é encontrado dentro pois foi declarada fora da chave)
    if(contif >= 1){ // se contador for maior que 1 desabilita questionario de danificacao
        danificacaoList.disabled = true;
        veiculoList.disabled = true;
    }else {

        alert('Um erro inesperado aaconteceu, se possivel reinicie o sistema');

    }
    
}


//------------------------REMOVE PROBLEM--------------------------------//

let remove  = document.querySelector('.remove');

remove.addEventListener('click',removeProblem);

function removeProblem(){
    let selectDanifiList = document.querySelectorAll('.c-problema'); //alocando a tag <select> problema em um variavel
    cont = cont -1;
    if(cont >= 0){
        selectDanifiList[cont].remove();
        console.log('foi removido 1 problema ficando:',cont);
    }else{
        alert('Todos problemas adicionais já foram removidos. Caso não exista problemas com o veiculo, informar "NÃO" no campo acima');
        cont++;
    }
    if(cont === 0){
        danificacaoList.disabled = false;
        veiculoList.disabled = false;
    }
    
}
