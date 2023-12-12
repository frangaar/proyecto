document.addEventListener('DOMContentLoaded', function() {
    let currentRow = 6;
    let currentCol = 3;
    const numRows = 21;
    const numCols = 33;
    let missio1 = false;
    let missio2 = false;
    let missio3 = false;
    let gamePaused = false;
    let hasBall = false; 
    let hasReloj = false;
    let hasClave = false;
    let postBienvenidaModalOpen = true; // Variable de control
    const modalBienvenida = document.getElementById('modal-bienvenida');
    const closeBienvenida = document.getElementById('close-bienvenida');
    const modalPostBienvenida = document.getElementById('modal-post-bienvenida');
    const closePostBienvenida = document.getElementById('close-post-bienvenida');
    let tiempoRestante = 120;  // 2 minutos en segundos
    const countdown = document.getElementById("countdown");
    const botonSalir = document.querySelector('.botonSalir');
    
/*----------------------------------TIMER----------------------------------------------*/

    // Función para actualizar el temporizador
    function actualizarTemporizador() {
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        countdown.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }

    // Función de inicio del temporizador
    function iniciarTemporizador() {
        actualizarTemporizador();
        const temporizador = setInterval(function () {
            tiempoRestante--;
            if (tiempoRestante < 0) {
                clearInterval(temporizador);
                // Agregar código para manejar el fin del juego aquí
                countdown.textContent = "0:00";
                location.reload();  // Otra acción si el tiempo se agota
            } else {
                actualizarTemporizador();
            }
        }, 1000);
    }    


    botonSalir.addEventListener('click', function() {
        // Redirige a la página especificada
        window.location.href = '../action_page.php';
    });

/*----------------------------------Modals----------------------------------------------*/

    modalBienvenida.style.display = 'block';

    closeBienvenida.onclick = function() {
        modalBienvenida.style.display = 'none';
        postBienvenidaModalOpen = false; 
        iniciarTemporizador();
        modalPostBienvenida.style.display = 'block';

        setTimeout(function() {
            modalPostBienvenida.style.display = 'none';
            postBienvenidaModalOpen = false; 
        }, 10000);
        
    };

    closePostBienvenida.onclick = function() {
        modalPostBienvenida.style.display = 'none';
        postBienvenidaModalOpen = false; 

    };

    window.onclick = function(event) {
        if (event.target === modalBienvenida) {
            modalBienvenida.style.display = 'none';
            postBienvenidaModalOpen = false; 
        }
        if (event.target === modalPostBienvenida) {
            modalPostBienvenida.style.display = 'none';
            postBienvenidaModalOpen = false; 
            
        }
    };

/*----------------------------------MOVIMENT----------------------------------------------*/

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveCharacterUp();
            break;
        case 'ArrowLeft':
            moveCharacterLeft();
            break;

        case 'ArrowRight':
            moveCharacterRight();
            break;

        case 'ArrowDown':
            moveCharacterDown();
            break;
    }
});

    function moveCharacterUp() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newRow = currentRow - 1;
        if (!missio1) {
            handleMovement(newRow, currentCol);
        } else if(!missio2){
            handleMovement2(newRow, currentCol);
        } else {
            handleMovement3(newRow, currentCol);
        }
    }

    function moveCharacterLeft() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newCol = currentCol - 1;
        if (!missio1) {
            handleMovement(currentRow, newCol);
        } else if(!missio2){
            handleMovement2(currentRow, newCol);
        }else{
            handleMovement3(currentRow, newCol);
        }
    }

    function moveCharacterRight() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newCol = currentCol + 1;
        if (!missio1) {
            handleMovement(currentRow, newCol);
        } else if(!missio2){
            handleMovement2(currentRow, newCol);
        }else{
            handleMovement3(currentRow, newCol);
        }
    }

    function moveCharacterDown() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newRow = currentRow + 1;
        if (!missio1) {
            handleMovement(newRow, currentCol);
        } else if(!missio2){
            handleMovement2(newRow, currentCol);
        }else{
            handleMovement3(newRow, currentCol);
        }
        
    }



/*----------------------------------FUNCIO ENTREGUES----------------------------------------------*/

    function handleMovement(newRow, newCol) {
        if (isValidMove(newRow, newCol)) {
            if (gameMap[newRow][newCol] === 3) {
                if (hasBall) {
                    missio1=true;
                    hasBall = false;
    
                    // Hide the characters first
                    document.querySelectorAll('.persona').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.persona-extra').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.pelota').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    
                    // Clear the map
                    clearMap();
                     
                    // Display a modal with the next task
                    const nextTaskContent = "Porta la pilota al noi de la samarreta blava.";
                    // reemplazarElementos(gameMap, gameMap2);
                    displayNextTask(nextTaskContent);
                    showAllElements();
                    handleMovement2(newRow,newCol);
                } else {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9) {
                if (hasBall) {
                    alert("No pots entregar la pilota a una persona incorrecte. Has perdut. :(");
                    location.reload(); // Reload the page on an incorrect action
                }
                return; // Stop further movement
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9 || gameMap[newRow][newCol] === 3) {
                if (!hasBall) {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 2 && !hasBall) {
                hasBall = true;
                $(".pelota").hide();
            }
    
            currentRow = newRow;
            currentCol = newCol;
            updateCharacterPosition();
        }
    }

    function handleMovement2(newRow,newCol){
        if (isValidMove(newRow, newCol)) {
            if (gameMap[newRow][newCol] === 5) {
                if (hasReloj) {
                    hasReloj = false;
                    missio2 = true;
    
                    // Hide the characters first
                    document.querySelectorAll('.persona2').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.persona-extra2').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.libro').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    
                    // Clear the map
                    clearMap2();
                    
                    // Display a modal with the next task
                    const nextTaskContent = "Porta la pilota al noi de la samarreta blava.";
                    // reemplazarElementos(gameMap, gameMap2);
                    displayNextTask(nextTaskContent);
                    showAllElements2();
                    handleMovement3(newRow,newCol);
                } else {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9) {
                if (hasReloj) {
                    alert("No pots entregar la pilota a una persona incorrecte. Has perdut. :(");
                    location.reload(); // Reload the page on an incorrect action
                }
                return; // Stop further movement
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9 || gameMap[newRow][newCol] === 5) {
                if (!hasReloj) {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 7 && !hasReloj) {
                hasReloj = true;
                $(".reloj").hide();
            }
    
            currentRow = newRow;
            currentCol = newCol;
            updateCharacterPosition();
        }
    }

    function handleMovement3(newRow,newCol){
        if (isValidMove(newRow, newCol)) {
            if (gameMap[newRow][newCol] === 8) {
                if (hasClave) {
                    hasClave = false;
                    missio3 = true;
    
                    // Hide the characters first
                    document.querySelectorAll('.persona3').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.persona-extra').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    document.querySelectorAll('.persona-extra2').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    document.querySelectorAll('.persona-extra3').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    document.querySelectorAll('.clave').forEach(function(element) {
                        element.style.display = 'none';
                    });
                    
                    
                    // Clear the map
                    // clearMap2();
                    
                    // Display a modal with the next task
                    // const nextTaskContent = "Porta la pilota al noi de la samarreta blava.";
                    // reemplazarElementos(gameMap, gameMap2);
                    // displayNextTask(nextTaskContent);
                    // showAllElements();
                    // encarrec2
                } else {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9) {
                if (hasClave) {
                    alert("No pots entregar la pilota a una persona incorrecte. Has perdut. :(");
                    location.reload(); // Reload the page on an incorrect action
                }
                return; // Stop further movement
            } else if (gameMap[newRow][newCol] === 4 || gameMap[newRow][newCol] === 6 || gameMap[newRow][newCol] === 9 || gameMap[newRow][newCol] === 8) {
                if (!hasClave) {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 10 && !hasClave) {
                hasClave = true;
                $(".clave").hide();
            }
    
            currentRow = newRow;
            currentCol = newCol;
            updateCharacterPosition();
        }
    }

/*----------------------------------FUNCIONS MAPA----------------------------------------------*/

    function clearMap() {
        for (let i = 0; i < gameMap.length; i++) {
            for (let j = 0; j < gameMap[i].length; j++) {
                if (gameMap[i][j] == 2 || gameMap[i][j] == 3) {
                    gameMap[i][j] = 0;
                }
            }
        }
    }   

    function clearMap2() {
        for (let i = 0; i < gameMap.length; i++) {
            for (let j = 0; j < gameMap[i].length; j++) {
                if (gameMap[i][j] == 5 || gameMap[i][j] == 7) {
                    gameMap[i][j] = 0;
                }
            }
        }
    } 
    
    function displayNextTask(task) {
        const modalNextTask = document.getElementById('modal-next-task');
        const nextTaskContent = document.getElementById('next-task-content');
        nextTaskContent.innerText = task;
        modalNextTask.style.display = 'block';
    
        setTimeout(function() {
            modalNextTask.style.display = 'none';
        }, 5000); // Hide the modal after 5 seconds
    }

    function showAllElements() {
        // Tu código existente para mostrar otros elementos
        
        // Mostrar los elementos con las clases "persona2" y "persona-extra2"
        document.querySelectorAll(".persona2").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });

        document.querySelectorAll(".persona-extra").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });
        
        document.querySelectorAll(".persona-extra2").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });

        document.querySelectorAll(".persona-extra3").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });

        document.querySelectorAll(".reloj").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });
    }
    
    function showAllElements2() {
        // Tu código existente para mostrar otros elementos
        
        // Mostrar los elementos con las clases "persona2" y "persona-extra2"
        document.querySelectorAll(".persona3").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });

        document.querySelectorAll(".persona-extra").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });
        
        document.querySelectorAll(".persona-extra2").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });

        document.querySelectorAll(".persona-extra3").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });


        document.querySelectorAll(".clave").forEach(function (element) {
            element.style.display = 'block'; // o 'inline' según el estilo original
        });
    }
    



/*----------------------------------COLISIONS----------------------------------------------*/

    function isValidMove(row, col) {
        return (
            row >= 0 &&
            row < numRows &&
            col >= 0 &&
            col < numCols &&
            gameMap[row][col] !== 1
        );
    }    

    function updateCharacterPosition() {
        const topPosition = (currentRow * 100) / numRows + '%';
        const leftPosition = (currentCol * 100) / numCols + '%';
        $(".personaje").animate({ "top": topPosition, "left": leftPosition }, "fast");
    }

/*----------------------------------CREACIO GRID----------------------------------------------*/
    const gridContainer = document.getElementById('grid-container');

    function createGrid(cols) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            gridContainer.appendChild(cell);
        }
    }

    createGrid(numCols);

/*----------------------------------MATRIU----------------------------------------------*/

    /* 4-6-9 (personas extra) / 3-5-8 (personas) / 2-7-10 (objectes)*/
    let gameMap = [
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,20, 1, 1, 1, 1, 1,21, 1, 1, 1, 1,22, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 0,19, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,10, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,23, 1, 1],
        [1, 1, 0, 0, 7, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1,12, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 9, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1,16, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,24, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1,11, 0, 1, 1, 1, 1, 1, 0, 0,18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0,14, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1,13, 1, 1, 1, 1, 1,15, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0,17, 0, 2, 0, 0, 0, 0, 8, 0, 0, 0,25, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

/*----------------------------------CREACIO OBJECTES----------------------------------------------*/

    const gridcontenedor = document.querySelector(".grid-container");

    for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
            const gridCell = document.createElement("div");
    
            if (gameMap[i][j] === 1) {
                gridCell.className = "wall";
            } else if (gameMap[i][j] === 2) {
                let pelota = document.createElement("img");
                pelota.src = "../spain/media/pelota.png";
                pelota.className = "pelota";
                gridCell.appendChild(pelota);
                pelota.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 3) {
                let persona = document.createElement("img");
                persona.src = "../spain/media/persona1.png";
                persona.className = "persona";
                gridCell.appendChild(persona);
                persona.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 4) {
                let personaExtra = document.createElement("img");
                personaExtra.src = "../spain/media/persona-extra1.png";
                personaExtra.className = "persona-extra";
                gridCell.appendChild(personaExtra);
                personaExtra.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 5) {
                let persona2 = document.createElement("img");
                persona2.src = "../spain/media/persona2.png";
                persona2.className = "persona2 hidden"; // Agrega la clase "hidden"
                gridCell.appendChild(persona2);
                persona2.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 6) {
                let personaExtra2 = document.createElement("img");
                personaExtra2.src = "../spain/media/persona-extra2.png";
                personaExtra2.className = "persona-extra2"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra2);
                personaExtra2.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 7) {
                let reloj = document.createElement("img");
                reloj.src = "../spain/media/reloj.png";
                reloj.className = "reloj hidden";
                gridCell.appendChild(reloj);
                reloj.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 8) {
                let persona3 = document.createElement("img");
                persona3.src = "../spain/media/persona3.png";
                persona3.className = "persona3 hidden"; // Agrega la clase "hidden"
                gridCell.appendChild(persona3);
                persona3.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 9) {
                let personaExtra3 = document.createElement("img");
                personaExtra3.src = "../spain/media/persona-extra3.png";
                personaExtra3.className = "persona-extra3"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra3);
                personaExtra3.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 10) {
                let clave = document.createElement("img");
                clave.src = "../spain/media/clave.png";
                clave.className = "clave hidden";
                gridCell.appendChild(clave);
                clave.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 11) {
                let personaExtra4 = document.createElement("img");
                personaExtra4.src = "../spain/media/persona-extra4.png";
                personaExtra4.className = "persona-extra4"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra4);
                personaExtra4.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 12) {
                let personaExtra5 = document.createElement("img");
                personaExtra5.src = "../spain/media/persona-extra5.png";
                personaExtra5.className = "persona-extra5"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra5);
                personaExtra5.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 13) {
                let personaExtra6 = document.createElement("img");
                personaExtra6.src = "../spain/media/persona-extra6.png";
                personaExtra6.className = "persona-extra6"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra6);
                personaExtra6.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 14) {
                let personaExtra7 = document.createElement("img");
                personaExtra7.src = "../spain/media/persona-extra7.png";
                personaExtra7.className = "persona-extra7"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra7);
                personaExtra7.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 15) {
                let personaExtra8 = document.createElement("img");
                personaExtra8.src = "../spain/media/persona-extra8.png";
                personaExtra8.className = "persona-extra8"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra8);
                personaExtra8.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 16) {
                let personaExtra9 = document.createElement("img");
                personaExtra9.src = "../spain/media/persona-extra9.png";
                personaExtra9.className = "persona-extra9"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra9);
                personaExtra9.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 17) {
                let personaExtra10 = document.createElement("img");
                personaExtra10.src = "../spain/media/persona-extra10.png";
                personaExtra10.className = "persona-extra10"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra10);
                personaExtra10.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 18) {
                let personaExtra11 = document.createElement("img");
                personaExtra11.src = "../spain/media/persona-extra11.png";
                personaExtra11.className = "persona-extra11"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra11);
                personaExtra11.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 19) {
                let personaExtra12 = document.createElement("img");
                personaExtra12.src = "../spain/media/persona-extra12.png";
                personaExtra12.className = "persona-extra12"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra12);
                personaExtra12.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 20) {
                let personaExtra13 = document.createElement("img");
                personaExtra13.src = "../spain/media/persona-extra13.png";
                personaExtra13.className = "persona-extra13"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra13);
                personaExtra13.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 21) {
                let personaExtra14 = document.createElement("img");
                personaExtra14.src = "../spain/media/persona-extra14.png";
                personaExtra14.className = "persona-extra14"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra14);
                personaExtra14.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 22) {
                let personaExtra15 = document.createElement("img");
                personaExtra15.src = "../spain/media/persona-extra15.png";
                personaExtra15.className = "persona-extra15"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra15);
                personaExtra15.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 23) {
                let personaExtra16 = document.createElement("img");
                personaExtra16.src = "../spain/media/persona-extra16.png";
                personaExtra16.className = "persona-extra16"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra16);
                personaExtra16.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 24) {
                let personaExtra17 = document.createElement("img");
                personaExtra17.src = "../spain/media/persona-extra17.png";
                personaExtra17.className = "persona-extra17"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra17);
                personaExtra17.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 25) {
                let personaExtra18 = document.createElement("img");
                personaExtra18.src = "../spain/media/persona-extra18.png";
                personaExtra18.className = "persona-extra18"; // Agrega la clase "hidden"
                gridCell.appendChild(personaExtra18);
                personaExtra18.addEventListener("click", function () {
                });
            } else {
                gridCell.className = "empty";
            }
    
            gridContainer.appendChild(gridCell);
        }
    }   

    function hideAllElements() {
        document.querySelectorAll('.persona2').forEach(function(element) {
            element.style.display = 'block'; // o el valor que corresponda a tu diseño
        });
        
        document.querySelectorAll('.persona-extra2').forEach(function(element) {
            element.style.display = 'block'; // o el valor que corresponda a tu diseño
        });
        
        document.querySelectorAll('.libro').forEach(function(element) {
            element.style.display = 'block'; // o el valor que corresponda a tu diseño
        });
        // Agregar aquí cualquier otro elemento que debas mostrar
    }

/*----------------------------------CAMBIAR MATRIU----------------------------------------------*/

    // function reemplazarElementos(gameMap, gameMap2) {
    //     // Verifica que ambas matrices tengan las mismas dimensiones
    //     if (gameMap.length === gameMap2.length && gameMap[0].length === gameMap2[0].length) {
    //         // Recorre las filas
    //         for (let i = 0; i < gameMap.length; i++) {
    //             // Recorre las columnas
    //             for (let j = 0; j < gameMap[i].length; j++) {
    //                 // Reemplaza el elemento de matrizOriginal con el correspondiente de nuevaMatriz
    //                 gameMap[i][j] = gameMap2[i][j];
    //                 if (gameMap[i][j] === 1) {
    //                     gridCell.className = "wall";
    //                 } else if (gameMap[i][j] === 2) {
    //                     let pelota = document.createElement("img");
    //                     pelota.src = "../spain/media/pelota.png";
    //                     pelota.className = "pelota";
    //                     gridCell.appendChild(pelota);
    //                     pelota.addEventListener("click", function () {
    //                     });
    //                 } else if (gameMap[i][j] === 3) {
    //                     let persona = document.createElement("img");
    //                     persona.src = "../spain/media/persona1.png";
    //                     persona.className = "persona";
    //                     gridCell.appendChild(persona);
    //                     persona.addEventListener("click", function () {
    //                     });
    //                 } else if (gameMap[i][j] === 4) {
    //                     let personaExtra = document.createElement("img");
    //                     personaExtra.src = "../spain/media/persona-extra1.png";
    //                     personaExtra.className = "persona-extra";
    //                     gridCell.appendChild(personaExtra);
    //                     personaExtra.addEventListener("click", function () {
    //                     });
    //                 } else {
    //                     gridCell.className = "empty";
    //                 }
    //             }
    //         }

    //     } else {
    //         console.error("Las matrices tienen dimensiones diferentes.");
    //     }
    // }

/*----------------------------------CREACIO OBJECTES----------------------------------------------*/

    const caja = document.getElementById("caja");

    window.addEventListener("resize", function() {
        const personaje = document.querySelector(".personaje");
        const maxLeft = caja.offsetWidth - personaje.offsetWidth;
        const maxTop = caja.offsetHeight - personaje.offsetHeight;
        const left = parseInt(window.getComputedStyle(personaje).left);
        const top = parseInt(window.getComputedStyle(personaje).top);

        if (left > maxLeft) {
            personaje.style.left = maxLeft + "px";
        }

        if (top > maxTop) {
            personaje.style.top = maxTop + "px";
        }
    });
    
});