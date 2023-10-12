document.addEventListener('DOMContentLoaded',function(){

    
    getParams(this);
    

    let container = document.getElementsByClassName('container')[0];

    resize();

    let niveles = document.querySelectorAll('.nivel');
    let lineas = document.querySelectorAll('.linea');


    function repaintLines(){

        repaintLine('nivel1','nivel2','linea1');
        repaintLine('nivel2','nivel3','linea2');
        repaintLine('nivel3','nivel4','linea3');
        repaintLine('nivel4','nivel5','linea4');
        repaintLine('nivel5','nivel1','linea5');
    }
    

    function resize(punto1,punto2,linea1){
        container.style.height = window.innerHeight + 'px';
    }

    function repaintLine(p1,p2,lin){

        const point1 = document.getElementById(p1);
        const point2 = document.getElementById(p2);
        const line = document.getElementById(lin);

        // Find the points based off the elements left and top
        var p1 = {x: point1.offsetLeft, y: point1.offsetTop};
        var p2 = {x: point2.offsetLeft, y: point2.offsetTop};

        // Get distance between the points for length of line
        var a = p1.x - p2.x;
        var b = p1.y - p2.y;
        var length = Math.sqrt( a*a + b*b );

        // Get angle between points
        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;

        // Get distance from edge of point to center
        var pointWidth = point1.clientWidth / 2;
        var pointHeight = point1.clientWidth / 2;

        // Set line distance and position
        // Add width/height from above so the line starts in the middle instead of the top-left corner
        line.style.width = length + 'px';
        line.style.left = (p1.x + pointWidth)+ 'px';
        line.style.top = (p1.y + pointHeight) + 'px';

        // Rotate line to match angle between points
        line.style.transform = "rotate(" + angleDeg + "deg)";
    }

    window.addEventListener('resize', function(){

        resize();
        repaintLines();
    });


    function setGamesLines(){

        const juego1 = document.getElementById('nivel1');
        const linea1 = document.getElementById('linea1');
        const juego2 = document.getElementById('nivel2');
        const linea2 = document.getElementById('linea2');
        const juego3 = document.getElementById('nivel3');
        const linea3 = document.getElementById('linea3');
        const juego4 = document.getElementById('nivel4');
        const linea4 = document.getElementById('linea4');
        const juego5 = document.getElementById('nivel5');
        const linea5 = document.getElementById('linea5');

        let jugable = "true";
        let detener = false;
        let index = 0;
        let nivelesLongitud = niveles.length-1;

        
        while(!detener){

            niveles[index].setAttribute('data-jugable',jugable);

            if(niveles[index].getAttribute('data-jugable') == "true"){

                //if(niveles[index].getAttribute('data-jugable') == "true"){
                    niveles[index].style.opacity = 1;
                //}

                let juego = niveles[index];
                let linea = lineas[index];

                juego.addEventListener('mouseover', function(){
            
                    linea.style.display="block"
        
                    this.addEventListener('mouseout', function(){
                        
                        linea.style.display="none"
                        
                    });

                    

                    this.addEventListener('click',function(){
            
                        let pais = this.getAttribute('name');
            
                        switch(pais){
                            case 'spain':

                                detener = false;

                                //playCountry(niveles,lineas,0,jugable)

                                

                                //setGamesLines(); 
                                window.location.replace("spain/index.html");


                                break;
                            case 'india':
                                detener = false;
                                
                                
                                //playCountry(niveles,lineas,1,jugable)
                                
                                //setGamesLines();
                                window.location.replace("india/index.html");
                                
                                
                                break;
                            case 'kenia':
                                detener = false;
                                
                                
                                //playCountry(niveles,lineas,2,jugable)
                                
                                //setGamesLines();
                                window.location.replace("kenia/index.html");
                                
                                break;
                            case 'brasil1':
                                detener = false;
                                
                                
                                //playCountry(niveles,lineas,3,jugable)
                                
                                //setGamesLines();
                                window.location.replace("brasil1/index.html");
                                
                                break;
                            case 'brasil2':
                                detener = false;
                                
                                
                                //playCountry(niveles,lineas,4,jugable)
                                
                                //setGamesLines();
                                window.location.replace("brasil2/index.html");
                                
                                break;
                        }           
                        
                    })
                    
                });

                //jugable = "true";
                if((niveles[index].getAttribute('data-status') == "noCompletado") || (index == nivelesLongitud)){
                    detener = true;
                }
            }
            index++;
        }
    }
    
    function getParams(document){

        let paramsTmp = document.URL.split('?');
        let items = new Array();
        let params = new Array();

        
        items=paramsTmp[1].split('&');
        
        for (let index = 0; index < items.length; index++) {
            paramsTmp=items[index].split('=');
            params[paramsTmp[0]]=paramsTmp[1];
        }
        
        changeAttributes(params);
    }

    function changeAttributes(niveles){

        let levelsList = document.querySelectorAll('.nivel');
        let levelsNames = new Array();
        let lastItem = levelsList.length-1;

        for (let index = 0; index < levelsList.length; index++) {
            
            levelsNames[index] = levelsList[index].getAttribute('id');
        }

        
        let idx = 0;
        for (const key in niveles) {
            if (Object.hasOwnProperty.call(niveles, key)) {
                let nivelName = key;
                let nivelStatus = niveles[key];
                let nivelDiv = document.getElementById(nivelName);
                
                nivelDiv.setAttribute('data-status',nivelStatus);
                nivelDiv.setAttribute('data-jugable',"true");
            }
            idx++;
        }

        if(idx < lastItem){
            levelsList[idx].setAttribute('data-jugable',"true");
        }
        
    }

    function playCountry(niveles,lineas,index,jugable){

        let detener = false;

        while(!detener){

            niveles[index].setAttribute('data-jugable',jugable);
            //niveles[index-1].setAttribute('data-status',"completado");
            if(niveles[index].getAttribute('data-status') == "noCompletado"){

                if(niveles[index].getAttribute('data-jugable') == "true"){
                    niveles[index].style.opacity = 1;
                }

                let juego = niveles[index];
                let linea = lineas[index];

                juego.addEventListener('mouseover', function(){
            
                    linea.style.display="block"
        
                    this.addEventListener('mouseout', function(){
                        
                        linea.style.display="none"
                        
                    });                                            
                    
                });

                jugable = true;
                detener = true;
                
            }

        }
    }

    repaintLines();
    setGamesLines();    

});