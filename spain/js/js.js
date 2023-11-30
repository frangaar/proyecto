document.addEventListener('DOMContentLoaded', function() {
    let currentRow = 6;
    let currentCol = 3;
    const numRows = 21;
    const numCols = 33;
    let gamePaused = false;
    let hasBall = false; 
    let postBienvenidaModalOpen = true; // Variable de control
    const modalBienvenida = document.getElementById('modal-bienvenida');
    const closeBienvenida = document.getElementById('close-bienvenida');
    const modalPostBienvenida = document.getElementById('modal-post-bienvenida');
    const closePostBienvenida = document.getElementById('close-post-bienvenida');
    let tiempoRestante = 120;  // 2 minutos en segundos
    const countdown = document.getElementById("countdown");

    
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

    function moveCharacterUp() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newRow = currentRow - 1;
        handleMovement(newRow, currentCol);
    }

    function moveCharacterLeft() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newCol = currentCol - 1;
        handleMovement(currentRow, newCol);
    }

    function moveCharacterRight() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newCol = currentCol + 1;
        handleMovement(currentRow, newCol);
    }

    function moveCharacterDown() {
        if (postBienvenidaModalOpen) {
            return;
        }
        const newRow = currentRow + 1;
        handleMovement(newRow, currentCol);
    }

    document.addEventListener('keydown', function(event) {
        switch (event.which) {
            case 38:
                moveCharacterUp();
                break;
    
            case 37:
                moveCharacterLeft();
                break;
    
            case 39:
                moveCharacterRight();
                break;
    
            case 40:
                moveCharacterDown();
                break;
        }
    });

/*----------------------------------FUNCIO ENTREGUES----------------------------------------------*/

    function handleMovement(newRow, newCol) {
        if (isValidMove(newRow, newCol)) {
            if (gameMap[newRow][newCol] === 3) {
                if (hasBall) {
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
                    reemplazarElementos(gameMap, gameMap2);
                    displayNextTask(nextTaskContent);
                    showAllElements();
                } else {
                    alert("No tens la pilota per entregarla!!");
                }
            } else if (gameMap[newRow][newCol] === 4) {
                if (hasBall) {
                    alert("No pots entregar la pilota a una persona incorrecte. Has perdut. :(");
                    location.reload(); // Reload the page on an incorrect action
                }
                return; // Stop further movement
            } else if (gameMap[newRow][newCol] === 4) {
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

/*----------------------------------FUNCIONS MAPA----------------------------------------------*/

    function clearMap() {
        for (let i = 0; i < gameMap.length; i++) {
            for (let j = 0; j < gameMap[i].length; j++) {
                if (gameMap[i][j] !== 0 && gameMap[i][j] !== 1 && gameMap[i][j] !== 5 && gameMap[i][j] !== 6 && gameMap[i][j] !== 7) {
                    gameMap[i][j] = 0;
                }
            }
        }
    }   

    function checkForBall() {
        if (gameMap[currentRow][currentCol] === 2 && !hasBall) {
            hasBall = true;
            $(".pelota").hide();
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

    /*----------------------------------MATRIUS----------------------------------------------*/

    let gameMap = [
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 7, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    let gameMap2 = [
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
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
                // element.style.display = 'none';
                persona2.className = "persona2";
                gridCell.appendChild(persona2);
                persona2.addEventListener("click", function () {
                });
            } else if (gameMap[i][j] === 6) {
                let personaExtra2 = document.createElement("img");
                personaExtra2.src = "../spain/media/persona-extra2.png";
                personaExtra2.className = "persona-extra2";
                gridCell.appendChild(personaExtra2);
                personaExtra2.addEventListener("click", function () {
                });
            // } else if (gameMap[i][j] === 7) {
            //     let libro = document.createElement("img");
            //     libro.src = "../spain/media/clave.webm";
            //     libro.className = "libro";
            //     gridCell.appendChild(libro);
            //     libro.addEventListener("click", function () {
            //     });
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

    function reemplazarElementos(gameMap, gameMap2) {
        // Verifica que ambas matrices tengan las mismas dimensiones
        if (gameMap.length === gameMap2.length && gameMap[0].length === gameMap2[0].length) {
            // Recorre las filas
            for (let i = 0; i < gameMap.length; i++) {
                // Recorre las columnas
                for (let j = 0; j < gameMap[i].length; j++) {
                    // Reemplaza el elemento de matrizOriginal con el correspondiente de nuevaMatriz
                    gameMap[i][j] = gameMap2[i][j];
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
                    } else {
                        gridCell.className = "empty";
                    }
                }
            }

        } else {
            console.error("Las matrices tienen dimensiones diferentes.");
        }
    }

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