document.addEventListener('DOMContentLoaded',function(){

    
    getParams(this);
    

    let container = document.getElementsByClassName('container')[0];

    resize();

    let niveles = document.querySelectorAll('.nivel');
    let lineas = document.querySelectorAll('.linea');
    let bocadillos = document.querySelectorAll('.bocadillo-cuadrado');
    let audios = document.querySelectorAll('.audio');
    let botonesCerrar = document.querySelectorAll('.audio-close');


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

        let jugable = "true";
        let detener = false;
        let index = 0;
        let nivelesLongitud = niveles.length-1;

        
        while(!detener){

            niveles[index].setAttribute('data-jugable',jugable);

            if(niveles[index].getAttribute('data-jugable') == "true"){

                niveles[index].style.opacity = 1;

                let juego = niveles[index];
                let linea = lineas[index];
                let bocadillo = bocadillos[index];
                let audio = audios[index];
                let cerrar = botonesCerrar[index];


                if(juego.getAttribute('data-status') == "completado"){
                    
                    linea.style.display = "block";
                }

                let tmpFile = juego.getAttribute('data-audio')
                let file = new Audio(tmpFile);
                
                audio.addEventListener('click',function(){

                    file.play();
                });

                cerrar.addEventListener('click',function(){

                    bocadillo.style.display="none";
                });

                juego.addEventListener('mouseover', function(){
            
                    linea.style.display="block";
                    if(window.innerWidth > 540){
                        bocadillo.style.display="block";
                        juego.style.zIndex=1001;
                    }
                    
        
                    this.addEventListener('mouseout', function(){
                        
                        if(this.getAttribute('data-status') == "completado"){
                            linea.style.display="block";
                        }else{
                            linea.style.display="none";
                            
                        }

                        if(window.innerWidth > 540){
                            //bocadillo.style.display="none";
                            juego.style.zIndex=999;
                        }
                        
                    });

                    

                    this.addEventListener('click',function(){
            
                        let pais = this.getAttribute('name');
            
                        switch(pais){
                            case 'spain':
                                detener = false;

                                window.location.replace("spain/index.php");

                                break;
                            case 'india':
                                detener = false;

                                window.location.replace("india/index.php");
                                
                                break;
                            case 'kenia':
                                detener = false;
                                
                                window.location.replace("kenia/index.php");
                                
                                break;
                            case 'brasil1':
                                detener = false;
                                
                                window.location.replace("brasil1/index.php");
                                
                                break;
                            case 'brasil2':
                                detener = false;
                                
                                window.location.replace("brasil2/index.php");
                                
                                break;
                        }           
                        
                    })
                    
                });

                if((niveles[index].getAttribute('data-status') == "noCompletado") || (index == nivelesLongitud)){
                    detener = true;
                }
            }
            index++;
        }
    }

    function playAudio(){
        
    }
    
    function getParams(document){

        let paramsTmp = document.URL.split('?');
        let items = new Array();
        let params = new Array();

        
        items=paramsTmp[1].split('&');
        
        if(items[0] != ""){
            for (let index = 0; index < items.length; index++) {
                paramsTmp=items[index].split('=');
                params[paramsTmp[0]]=paramsTmp[1];
            }
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

    function interactDOM(){
        document.getElementById('bocadillo-cuadrado1').focus();
    }

    repaintLines();
    setGamesLines();    
    interactDOM();
});