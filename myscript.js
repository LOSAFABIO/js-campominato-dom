let play = document.getElementById("play");
let contenitore = document.querySelector(".tabella");

play.addEventListener(`click`, function(){
    
    let livelli = document.getElementById("livelli");
    let livello = livelli.value;
    contenitore.innerHTML = " ";
    
    const gameOver = false;

    const bombeTotali      = 16;

    const listaPosizioniBombe = generaBombe(16);
    
    if(livello == "vuoto"){
        contenitore.innerHTML = " ";
    } else if (livello == "facile") {
        creaBox( 10 );
    } else if (livello == "medio") {
        creaBox( 9 );
    } else if (livello == "difficile") {
        creaBox( 7 );
    }  
    
    let boxes = document.querySelectorAll('.box');
    
    for( let cont = 0; cont < boxes.length; cont++ )
    {
        boxes[ cont ].addEventListener('click', function(){
            
            const contenuto = this.innerHTML
            
            this.classList.add("blu");
            
            console.log( contenuto );
            if(!gameOver){
                const valoreCella = parseInt(this.querySelector("box").textContent);
                if(arrayIncludeValore(listaPosizioniBombe, boxes)){
                    this.classList.add("rosso");

                    fineGioco();
                }else{
                    this.classList.add("blu");
                }
            }
        });
        console.log(boxes);
    }
    
});

function inizioGioco(){
    console.log("INIZIO");
}

function fineGioco(){
    gameOver = true
    const listaCelle = document.querySelectorAll(".sqare") //modificare
    for(let i=0; i<listaCelle.length; i++){
        const cella = listaCelle[i];
        const valoreCella = parseInt(cella.querySelector("box").textContent);
        if(arrayIncludeValore(listaPosizioniBombe, valoreCella)){
            cella.classList.add("rosso");
        }
    }
    const gameOverElement = document.createElement("div");
    gameOverElement.className = "game_over";
    document.getElementsByTagName("body")[0].append(gameOverElement);
    console.log("FINE");
}

tentativiPossibili = creaBox() - 16;


    // generiamo le bombe

function generaBombe(){
    const posizioneBombeGenerate = [];
    
    while (posizioneBombeGenerate.length < 16){
        const nuovaPosizioneBombe = generaRandomInt(1, creaBox());
        if(!arrayIncludeValore(posizioneBombeGenerate,nuovaPosizioneBombe)){
            posizioneBombeGenerate.push(nuovaPosizioneBombe);
            console.log(nuovaPosizioneBombe);
        }
    }
    console.log(posizioneBombeGenerate);
    return posizioneBombeGenerate
}

function arrayIncludeValore(arrayValori, valore){
    for(let i=0; i<arrayValori.length; i++){
        if(arrayValori[i] == valore){
            return true;
        }
    }
    return false;
}

function generaRandomInt(min, max){
   let result = Math.floor(Math.random()* (max-min +1)) + min;
    return result
}
 // ciao


function creaBox( numeroRighe )
{
    let contatore = 1;

    for (let i=0; i<numeroRighe; i++)
        {
            const riga = document.createElement('div');           
            riga.classList.add('row');
            
            contenitore.appendChild( riga );

            for (let l=0; l<numeroRighe; l++ )
            {
                riga.innerHTML += `<div class="box col box-${contatore}"> `+ contatore +` </div>`; 
                contatore++;
            }
        }
};
    

