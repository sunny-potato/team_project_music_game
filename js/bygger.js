// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');

// Associate color names to RGB values
let colors = {
  White: 'rgb(255, 255, 255)',
  Black: 'rgb(0, 0, 0)',
  Blue: 'rgb(0, 0, 255)',
};

let firkant = 19260;
let row = 0;
let colum = 0;
let inn_row1;
let inn_row2;

let plassering = 0;
let del = 4;

let fjern;

let squares = [];

// Create the drawingBoard squares:
function load() {
    for (let i = 0; i < firkant; i++) {

        // Create new drawingBoard square
        let square = document.createElement('div');
        squares.push(square);

        colum +=1

        inn_row1 = String(row)
        inn_row2 = inn_row1.padStart(5,0);


        square.setAttribute("id", inn_row2 +" "+ colum);
        
        square.style.height = '10.5px';
        square.style.width = '23px';
        square.style.float = 'left';
        square.style.border = "1px solid black";

        //kan legge til en allerede eksisterende note
        if (colum == 1 && bane_venstre.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Black'];
        } else if (colum == 2 && bane_opp.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Black'];
        } else if (colum == 3 && bane_ned.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Black'];
        } else if (colum == 4 && bane_hoyre.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Black'];
        } 
        //kan legge til en allerede eksisterende hold
        else if (colum == 1 && bane_hold_venstre.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Blue'];
        } else if (colum == 2 && bane_hold_opp.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Blue'];
        } else if (colum == 3 && bane_hold_ned.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Blue'];
        } else if (colum == 4 && bane_hold_hoyre.indexOf(row/del) != -1) {
            square.style.backgroundColor = colors['Blue'];
        } else {
            square.style.backgroundColor = colors['White'];
        }

        if (colum == 4) {
            colum = 0;
            row += 1;
        }
        
            square.onmousedown = () => {
                // the magic
                row = parseInt(square.id.slice(0,5));
                colum = parseInt(square.id[6]);
            
                //setter note i bane
                if (colorSelection.value == 'Black') {
                    if (square.style.backgroundColor == 'rgb(255, 255, 255)') {
                        if (colum== 1) {
                                //legger til i en array
                            bane_venstre.push(row/del);
                        } else  if (colum == 2) {
                            bane_opp.push(row/del);
                        } else if (colum == 3) {
                            bane_ned.push(row/del);
                        } else if (colum == 4) {
                            bane_hoyre.push(row/del);
                        }
                    } 
                //setter hold i bane 
                } if (colorSelection.value == 'Blue') {
                    if (square.style.backgroundColor == 'rgb(255, 255, 255)') {
                        if (colum== 1) {
                            bane_hold_venstre.push(row/del);
                        } else  if (colum == 2) {
                            bane_hold_opp.push(row/del);
                        } else if (colum == 3) {
                            bane_hold_ned.push(row/del);
                        } else if (colum == 4) {
                            bane_hold_hoyre.push(row/del);
                        }
                    }
                //fjerner note i bane   
                }  if (colorSelection.value == 'White') {
                    if (square.style.backgroundColor == 'rgb(0, 0, 0)') {
                        if (colum == 1) {
                                //finner posisjonen i arrayen
                            fjern = bane_venstre.indexOf(row/del)
                                //fjerner verdien
                            bane_venstre.splice(fjern,1);
                        } else  if (colum == 2) {
                            fjern = bane_opp.indexOf(row/del)
                            bane_opp.splice(fjern,1);
                        } else if (colum == 3) {
                            fjern = bane_ned.indexOf(row/del)
                            bane_ned.splice(fjern,1);
                        } else if (colum == 4) {
                            fjern = bane_hoyre.indexOf(row/del)
                            bane_hoyre.splice(fjern,1);
                        }
                    }
                //fjerner hold i bane 
                } if (colorSelection.value == 'White') {
                    if (square.style.backgroundColor == 'rgb(0, 0, 255)') {
                        if (colum == 1) {
                            fjern = bane_hold_venstre.indexOf(row/del)
                            bane_hold_venstre.splice(fjern,1);
                        } else  if (colum == 2) {
                            fjern = bane_hold_opp.indexOf(row/del)
                            bane_hold_opp.splice(fjern,1);
                        } else if (colum == 3) {
                            fjern = bane_hold_ned.indexOf(row/del)
                            bane_hold_ned.splice(fjern,1);
                        } else if (colum == 4) {
                            fjern = bane_hold_hoyre.indexOf(row/del)
                            bane_hold_hoyre.splice(fjern,1);
                        }
                    }
                }
                //sorterer banene
                bane_venstre = bane_venstre.sort(function(a,b){return a - b})
                bane_opp = bane_opp.sort(function(a,b){return a - b})
                bane_ned = bane_ned.sort(function(a,b){return a - b})
                bane_hoyre = bane_hoyre.sort(function(a,b){return a - b})

                bane_hold_venstre = bane_hold_venstre.sort(function(a,b){return a - b})
                bane_hold_opp = bane_hold_opp.sort(function(a,b){return a - b})
                bane_hold_ned = bane_hold_ned.sort(function(a,b){return a - b})
                bane_hold_hoyre = bane_hold_hoyre.sort(function(a,b){return a - b})

                 //setter farge der du trykker
                square.style.backgroundColor = colors[colorSelection.value];
            };

        // Add square as child to drawingBoard element
        drawingBoard.appendChild(square);
    };
    //legger til indikasjon på hva firkanten betyr
    for (let i = 0; i < (9600/del); i++) {
        let text1 = document.createElement('div');

        text1.innerText = i/2;
        text1.style.position = 'absolute';
        text1.style.left = '120px';
        text1.style.float = 'right';

        text1.style.top +=  plassering + 'px';
        plassering += 12.5*del/2;

        tekst.appendChild(text1);
    }
}