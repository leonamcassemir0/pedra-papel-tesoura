var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";


/*--------------------------- RESULTADO -------------------------*/
function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');          
    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Resultado: O jogo foi empatado";
            }else if(inimigoOpt == "tesoura"){   
                vencedor.innerHTML = "Resultado: O inimigo ganhou";
            }else if(inimigoOpt == "pedra"){         
                vencedor.innerHTML = "Resultado: O player ganhou";
            }
    }
    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){                        
            vencedor.innerHTML = "Resultado: O player ganhou";
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Resultado: O jogo foi empatado";
        }else if(inimigoOpt == "pedra"){                    
            vencedor.innerHTML = "Resultado: O inimigo ganhou";
        }       
    }
    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){         
            vencedor.innerHTML = "Resultado: O inimigo ganhou";
        }else if(inimigoOpt == "tesoura"){       
            vencedor.innerHTML = "Resultado: O player ganhou";
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Resultado: O jogo foi empatado"; 
        }
    }
}
/*---------------------------------------------------------------------*/


/*----------------------------- RESETAR -------------------------------*/
function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){               
        enemyOptions[i].childNodes[0].style.opacity = 0.3;            
    }
}
function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}
/*-----------------------------------------------------------------------*/


/*--------------------------------- JOGO -------------------------------*/
function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
}
for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        inimigoJogar();
    });
}
/*------------------------------------------------------------------------*/