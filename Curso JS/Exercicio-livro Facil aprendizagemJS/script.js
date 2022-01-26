var canvas=document.getElementById("myCanvas");
        var context=canvas.getContext("2d");
            context.beginPath();     // Esta linha inicia um caminho na tela  
            context.moveTo(20,100); // o caminho se incia do 20 ate 0 100
            context.lineTo(200,100);
            context.stroke();
          /*
            context.fillStyle="#0000ff";
            context.fillRect(250,50,100,50); - caixa azul 
          */
            
            /*context.fillStyle="#0ff000";
            context.fillRect(200,50,100,50);
            faz um retangulo na cor verde na posião x = 200 e y = 50 , com largura e altura de 100 e 50
            */

            //context.strokeRect(100,150,100,5)
            var time=setInterval("drawProgressBar()",200); // esta linha é o intervalo em milisegundos da barra de progresso 200milissegundos 
            var width = 0;
            function drawProgressBar(){      //Esta função cria uma caixa e uma animação de barra de progresso
                context.fillStyle="#0000ff";
                context.fillRect(100,50,width,5);
                width = width+10;
                if(width>100){
                    clearInterval(time);
                }
            }
        