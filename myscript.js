let play = document.getElementById("play");
let contenitore = document.querySelector(".tabella");

play.addEventListener(`click`, function(){
    
    let livelli = document.getElementById("livelli");
    let livello = livelli.value;
    contenitore.innerHTML = " ";
    

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

                console.log( contenuto );

        })
    }
    // let bombeTotali = 16
    // const posizioneBombe = [];
    // while (posizioneBombe.length < bombeTotali){
    //     const nuovaPosizioneBombe = generaRandomInt(1, celleTotali);
    //     if(!arrayIncludeValore(posizioneBombe,nuovaPosizioneBombe)){
    //         bombeGenerate.push(nuovaPosizioneBombe);
    //     }
    // }
    //generiamo le bombe

});

function creaBox( numeroRighe );
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
    

