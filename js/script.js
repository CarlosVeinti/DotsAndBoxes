
// Some Global Variables.
const numberOfPlayers = 3;
const scores = [0,0,0];
let currentPlayer = 0;
// Will help me know when the game is over.
let numberofBoxesLeft = 25;

const defaultGray = '#D3D3D3';

// To load name typed in from index.html
document.addEventListener("DOMContentLoaded", function() {
    const player1Name = localStorage.getItem('player1Name') || 'Player 1';
    const player1Div = document.getElementById('player1');
    player1Div.textContent = `${player1Name} (Blue): 0`;

    // For player 2
    const player2Name = localStorage.getItem('player2Name') || 'Player 2';
    const player2Div = document.getElementById('player2');
    player2Div.textContent = `${player2Name} (Red): 0`;

    // For player 3
    const player3Name = localStorage.getItem('player3Name') || 'Player 3';
    const player3Div = document.getElementById('player3');
    player3Div.textContent = `${player3Name} (Yellow): 0`;
});

function setUpDotBoxes(){

const svg = document.querySelector(".theDots");
// Useful source that helped with JS and SVG elements creation:
// https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/
// making a simple rectangle.

// The interpreter should use it as a string once we are inside 
// setAttribute.
var x = 10;
var y = 10;
// another source:
// https://stackoverflow.com/questions/34201318/trying-to-make-a-for-loop-to-draw-an-svg

// For the first row.
var ID = 11;
for(let i=0; i< 6; i++){
    
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "10");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    appendedRec.setAttribute('id',ID);
    svg.appendChild(appendedRec);

    x = x + 110;
    ID++;
}

var x = 10; // reset it to 10 again.
var IDrow2 = 21;
var y = 120; 
// Loop for the second row.
for(let i=0; i< 6; i++){
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "120");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    // I will at some point need the ID 🤔 how do we set that?
    appendedRec.setAttribute('id',IDrow2);
    svg.appendChild(appendedRec);
    x = x + 110;
    IDrow2++;
}


var x = 10; // reset it to 10 again.
var y = 230;
var IDrow3 = 31;
// Loop for the third row.
for(let i=0; i< 6; i++){
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "230");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    appendedRec.setAttribute('id',IDrow3);
    svg.appendChild(appendedRec);
    x = x + 110;
    IDrow3++;
}

var x = 10; // reset it to 10 again.
var y = 340;
var IDrow4 = 41;
// Loop for the fourth row.
for(let i=0; i< 6; i++){
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "340");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    appendedRec.setAttribute('id',IDrow4);
    svg.appendChild(appendedRec);
    x = x + 110;
    IDrow4++;
}

var x = 10; // reset it to 10 again.
var y = 450;
var IDrow5 = 51;
// Loop for the fifth row.
for(let i=0; i< 6; i++){
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "450");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    // I will at some point need the ID 🤔 how do we set that?
    appendedRec.setAttribute('id',IDrow5);
    svg.appendChild(appendedRec);
    x = x + 110;
    IDrow5++;
}


var x = 10; // reset it to 10 again.
var IDrow6 = 61;
// Loop for the sixth row.
for(let i=0; i< 6; i++){
    var appendedRec = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // The second x is actually a number.
    appendedRec.setAttribute("x",x);
    // All the y's will remain the same for the same row.
    appendedRec.setAttribute("y", "560");
    // Width of small box.
    appendedRec.setAttribute("width", "10");
    // Height of small box.
    appendedRec.setAttribute("height","10");
    // Setting the color of the square
    appendedRec.setAttribute("fill", "#000000");
    appendedRec.setAttribute('id',IDrow6);
    svg.appendChild(appendedRec);
    x = x + 110;
    IDrow6++;
}
    
}

setUpDotBoxes();

// Goes up to line 383
function setUpLines(){

// Not exactly sure what the zero at the end does.
const svg = document.querySelector(".theLines");
// Useful source that helped with JS and SVG elements creation:
// https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/
// making a simple rectangle.

// The interpreter should use it as a string once we are inside 
// setAttribute.
var x = 10;
var y = 10;
// another source:
// https://stackoverflow.com/questions/34201318/trying-to-make-a-for-loop-to-draw-an-svg

// For the first row.
var ID = 11;
for(let i=0; i< 6; i++){
    //For column line
    var aColumnLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // x would remain the same for the column.
    aColumnLine.setAttribute("x",x);
    // the y should now be y+10.
    aColumnLine.setAttribute("y", y+10);
    aColumnLine.setAttribute("width", "10");
    aColumnLine.setAttribute("height","100");
    aColumnLine.setAttribute("fill", "#D3D3D3");
    var idColumns = 'c'+ID + 'to' + (ID+10);
    aColumnLine.setAttribute('id', idColumns);
    svg.appendChild(aColumnLine);


    // We don't need a line in the last iteration.
    // For horizontal lines.
    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "10");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+ID + 'to' + (ID+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }

    // Update for next iteration.
    x = x + 110;
    ID++;
}

var x = 10; // reset it to 10 again.
var IDrow2 = 21;
var y = 120; 
// Loop for the second row.
for(let i=0; i< 6; i++){

    //For column line
    var aColumnLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // x would remain the same for the column.
    aColumnLine.setAttribute("x",x);
    // the y should now be y+10.
    aColumnLine.setAttribute("y", y+10);
    aColumnLine.setAttribute("width", "10");
    aColumnLine.setAttribute("height","100");
    aColumnLine.setAttribute("fill", "#D3D3D3");
    // Id numbering resembles a mathematical matrix.
    // Each edge is then a connection between two nodes, hence numbers to the left and right of "to" are
    // the id of nodes (boxes in our diagram)
    var idColumns = 'c'+IDrow2 + 'to' + (IDrow2+10);
    aColumnLine.setAttribute('id',idColumns);
    svg.appendChild(aColumnLine);

    // We don't need a line in the last iteration.
    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "120");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+IDrow2 + 'to' + (IDrow2+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }
    
    x = x + 110;
    IDrow2++;
}


var x = 10; // reset it to 10 again.
var y = 230;
var IDrow3 = 31;
// Loop for the third row.
for(let i=0; i< 6; i++){
    
    //For column line
    var aColumnLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // x would remain the same for the column.
    aColumnLine.setAttribute("x",x);
    // the y should now be y+10.
    aColumnLine.setAttribute("y", y+10);
    aColumnLine.setAttribute("width", "10");
    aColumnLine.setAttribute("height","100");
    aColumnLine.setAttribute("fill", "#D3D3D3");
    var idColumns = 'c'+IDrow3 + 'to' + (IDrow3+10);
    aColumnLine.setAttribute('id', idColumns);
    svg.appendChild(aColumnLine);

    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "230");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+IDrow3 + 'to' + (IDrow3+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }
    x = x + 110;
    IDrow3++;
}

var x = 10; // reset it to 10 again.
var y = 340;
var IDrow4 = 41;
// Loop for the fourth row.
for(let i=0; i< 6; i++){
    
    //For column line
    var aColumnLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // x would remain the same for the column.
    aColumnLine.setAttribute("x",x);
    // the y should now be y+10.
    aColumnLine.setAttribute("y", y+10);
    aColumnLine.setAttribute("width", "10");
    aColumnLine.setAttribute("height","100");
    aColumnLine.setAttribute("fill", "#D3D3D3");
    var idColumns = 'c'+IDrow4 + 'to' + (IDrow4+10);
    aColumnLine.setAttribute('id', idColumns);
    svg.appendChild(aColumnLine);
    // For horizontal lines.
    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "340");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+IDrow4 + 'to' + (IDrow4+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }
    x = x + 110;
    IDrow4++;
}

var x = 10; // reset it to 10 again.
var y = 450;
var IDrow5 = 51;
// Loop for the fifth row.
for(let i=0; i< 6; i++){
    //For column line
    var aColumnLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
    // x would remain the same for the column.
    aColumnLine.setAttribute("x",x);
    // the y should now be y+10.
    aColumnLine.setAttribute("y", y+10);
    aColumnLine.setAttribute("width", "10");
    aColumnLine.setAttribute("height","100");
    aColumnLine.setAttribute("fill", "#D3D3D3");
    var idColumns = 'c'+IDrow5 + 'to' + (IDrow5+10);
    aColumnLine.setAttribute('id', idColumns);
    svg.appendChild(aColumnLine);

    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "450");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+IDrow5 + 'to' + (IDrow5+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }
    x = x + 110;
    IDrow5++;
}

var x = 10; // reset it to 10 again.
var IDrow6 = 61;
// Loop for the sixth row.
// dont need columns for this one.
for(let i=0; i< 6; i++){
 
    if(i!=5){
        var aLine = document.createElementNS("http://www.w3.org/2000/svg","rect");
        // The line should start right where the box grid ends.
        aLine.setAttribute("x",x+10);
        aLine.setAttribute("y", "560");
        // The lines will be 100 in length. Is this units in pixels?
        aLine.setAttribute("width", "100");
        aLine.setAttribute("height","10");
        aLine.setAttribute("fill", "#D3D3D3");
        var idHorizontal_Lines = 'h'+IDrow6 + 'to' + (IDrow6+1);
        aLine.setAttribute('id',idHorizontal_Lines);
        svg.appendChild(aLine);
    }
    x = x + 110;
    IDrow6++;
}
}

setUpLines();


// The boxes in here will be filled once the square is completed.
function setUpColorableBoxes(){

    var box_DefaultColor = "#F5F5DC";

    const svg = document.querySelector(".theColorableBoxes");
    // For first row of boxes.
    var x = 20;
    var y = 20;
    var boxID = "";
    var topLeft_nodeID = 11;
    var topRight_nodeID = 12;
    var bottomLeft_nodeID = 21;
    var bottomRight_nodeID = 22;
    for(let i=0; i < 5; i++){
        var aBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        aBox.setAttribute("x",x); // will start at 20 since "lines" went from 10 to 20.
        aBox.setAttribute("y", y); // y will also start at 20.
        aBox.setAttribute("width", "100");
        aBox.setAttribute("height","100");
        aBox.setAttribute("fill",box_DefaultColor);
        aBox.setAttribute('stroke','#000000');
        boxID = 'b'+ topLeft_nodeID + topRight_nodeID + '-' + bottomRight_nodeID + bottomLeft_nodeID;
        aBox.setAttribute('id', boxID);

        svg.appendChild(aBox);
        topLeft_nodeID++;
        topRight_nodeID++;
        bottomLeft_nodeID++;
        bottomRight_nodeID++;
        x+=110;
    }


    // For second row of boxes.
    var x = 20;
    var y = 130;
    var boxID = "";
    var topLeft_nodeID = 21;
    var topRight_nodeID = 22;
    var bottomLeft_nodeID = 31;
    var bottomRight_nodeID = 32;
    for(let i=0; i < 5; i++){
        var aBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        aBox.setAttribute("x",x); // will start at 20 since "lines" went from 10 to 20.
        aBox.setAttribute("y", y); // y will also start at 20.
        aBox.setAttribute("width", "100");
        aBox.setAttribute("height","100");
        aBox.setAttribute("fill", box_DefaultColor);
        aBox.setAttribute('stroke','#000000');
        boxID = 'b'+ topLeft_nodeID + topRight_nodeID + '-' + bottomRight_nodeID + bottomLeft_nodeID;
        aBox.setAttribute('id', boxID);

        topLeft_nodeID++;
        topRight_nodeID++;
        bottomLeft_nodeID++;
        bottomRight_nodeID++;

        svg.appendChild(aBox);
        x+=110;
    }

    //For third row of boxes.
    var x = 20;
    var y = 240;
    var topLeft_nodeID = 31;
    var topRight_nodeID = 32;
    var bottomLeft_nodeID = 41;
    var bottomRight_nodeID = 42;
    for(let i=0; i < 5; i++){
        var aBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        aBox.setAttribute("x",x); // will start at 20 since "lines" went from 10 to 20.
        aBox.setAttribute("y", y); // y will also start at 20.
        aBox.setAttribute("width", "100");
        aBox.setAttribute("height","100");
        aBox.setAttribute("fill", box_DefaultColor);
        aBox.setAttribute('stroke','#000000');
        boxID = 'b'+ topLeft_nodeID + topRight_nodeID + '-' + bottomRight_nodeID + bottomLeft_nodeID;
        aBox.setAttribute('id', boxID);

        topLeft_nodeID++;
        topRight_nodeID++;
        bottomLeft_nodeID++;
        bottomRight_nodeID++;

        svg.appendChild(aBox);
        x+=110;
    } 
    
    // For the fourth row of boxes
    var x = 20;
    var y = 350;
    var topLeft_nodeID = 41;
    var topRight_nodeID = 42;
    var bottomLeft_nodeID = 51;
    var bottomRight_nodeID = 52;
    for(let i=0; i < 5; i++){
        var aBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        aBox.setAttribute("x",x); // will start at 20 since "lines" went from 10 to 20.
        aBox.setAttribute("y", y); // y will also start at 20.
        aBox.setAttribute("width", "100");
        aBox.setAttribute("height","100");
        aBox.setAttribute("fill", box_DefaultColor);
        aBox.setAttribute('stroke','#000000');
        boxID = 'b'+ topLeft_nodeID + topRight_nodeID + '-' + bottomRight_nodeID + bottomLeft_nodeID;
        aBox.setAttribute('id', boxID);

        topLeft_nodeID++;
        topRight_nodeID++;
        bottomLeft_nodeID++;
        bottomRight_nodeID++;

        svg.appendChild(aBox);
        x+=110;
    }

    // For the fifth row of boxes
    var x = 20;
    var y = 460;
    var topLeft_nodeID = 51;
    var topRight_nodeID = 52;
    var bottomLeft_nodeID = 61;
    var bottomRight_nodeID = 62;
    for(let i=0; i < 5; i++){
        var aBox = document.createElementNS("http://www.w3.org/2000/svg","rect");
        aBox.setAttribute("x",x); // will start at 20 since "lines" went from 10 to 20.
        aBox.setAttribute("y", y); // y will also start at 20.
        aBox.setAttribute("width", "100");
        aBox.setAttribute("height","100");
        aBox.setAttribute("fill", box_DefaultColor);
        aBox.setAttribute('stroke','#000000');
        boxID = 'b'+ topLeft_nodeID + topRight_nodeID + '-' + bottomRight_nodeID + bottomLeft_nodeID;
        aBox.setAttribute('id', boxID);

        topLeft_nodeID++;
        topRight_nodeID++;
        bottomLeft_nodeID++;
        bottomRight_nodeID++;

        svg.appendChild(aBox);
        x+=110;
    }

}

setUpColorableBoxes();

function isItaBorderLine(aLineClicked){
    var theID = aLineClicked.id;
    // I need to manipulate it as a string.
    // This is for columns.-> it's at the border.
    /* The strict comparison might not actually work for this, a char might be represented as '' while a number is an int/number
    // thus the type would actually restrict us.
    if( ((theID.charAt(2) === 1) && (theID.charAt(6) === 1)) || ((theID.charAt(2) === 6) && (theID.charAt(6) === 6))){
        console.log("This is a column line at the border");
        return true;
    }
    if( ((theID.charAt(1) === 1) && (theID.charAt(5) === 1)) || ((theID.charAt(1) === 6) && (theID.charAt(5) === 6))){
        return true;
    }
    */ 
    if( ((theID.charAt(2) === '1') && (theID.charAt(6) === '1')) || ((theID.charAt(2) === '6') && (theID.charAt(6) === '6'))){
        //console.log("This is a column line at the border");
        return true;
    }
    if( ((theID.charAt(1) === '1') && (theID.charAt(5) === '1')) || ((theID.charAt(1) === '6') && (theID.charAt(5) === '6'))){
        //console.log("This is a horizontal line at the border");
        return true;
    }
    else{
        return false;
    }
}

function buildLineIDs(columnOrHorizontal, from, arrival){
    var idBuilt= columnOrHorizontal + from  + 'to' + arrival;
    return idBuilt;
}


function line_ClickedB4(columnOrHorizontal, from, arrival){
    var idBuilt= columnOrHorizontal + from  + 'to' + arrival;
    if(document.getElementById(idBuilt).getAttribute('fill') != defaultGray){
        return true;
    }
    else{
        return false;
    }
}

function sixLinesToCheck(aLineClicked){
    // I think we could break it into columns or horizontal lines again.
    // remember we only reached here, if the line clicked was not a border line.
    if(aLineClicked.id.charAt(0) === 'c'){
        // Basically the two points the line will give are center points.
        // two other columns to check, two horizontal lines at the top
        // two horizontal lines at the bottom
        var topMid_node = aLineClicked.id.substring(1,3);
        var topLeft_node = parseInt(topMid_node)-1;
        var topRight_node = parseInt(topMid_node)+1;

        var bottomMid_node = aLineClicked.id.substring(5,7);
        var bottomLeft_node = parseInt(bottomMid_node)-1;
        var bottomRight_node = parseInt(bottomMid_node)+1;

        var boxToBeColoredID_left ="";
        // Assume no box was made on the left side.
        var bool_LeftBox = false;
        // Checking if a box was made on the LEFT SIDE.
        if(line_ClickedB4('h', topLeft_node,topMid_node) &&
           line_ClickedB4( 'c', topLeft_node,bottomLeft_node) &&
           line_ClickedB4('h', bottomLeft_node,bottomMid_node)){
            var boxToBeColoredID_left = 'b'+ topLeft_node+topMid_node+'-'+bottomMid_node+bottomLeft_node;
            bool_LeftBox = true;
        }

        var boxToBeColoredID_right ="";
        var bool_RightBox = false;
        // Checking if a box was made on the right side.
        if(line_ClickedB4('h', topMid_node,topRight_node) &&
           line_ClickedB4('c', topRight_node, bottomRight_node) &&
           line_ClickedB4('h', bottomMid_node,bottomRight_node))
           {
            var boxToBeColoredID_right = 'b'+topMid_node+topRight_node+'-'+bottomRight_node+bottomMid_node;
            var bool_RightBox = true;
           }

        if(bool_LeftBox || bool_RightBox){
            if(bool_LeftBox && bool_RightBox){
                // console.log("There are two boxes to be filled in.")
                return [true, boxToBeColoredID_left, boxToBeColoredID_right];
            }
            if(bool_LeftBox){
                return [true,boxToBeColoredID_left];
            }
            if(bool_RightBox){
                return [true,boxToBeColoredID_right];
            }
            
        }
        // no box was completed.
        return [false];
        
        
    }
    // If the line clicked is a horizontal line.
    if(aLineClicked.id.charAt(0) === 'h'){
        // When the line clicked is a horizontal line. -> We'll have to check 4 columns -> whether they've been clicked before.

        var midLeft_node = aLineClicked.id.substring(1,3);
        var midRight_node = aLineClicked.id.substring(5,7);

        var topLeft_node = parseInt(midLeft_node)-10;
        var topRight_node = parseInt(midRight_node)-10;

        var bottomLeft_node = parseInt(midLeft_node)+10;
        var bottomRight_node = parseInt(midRight_node)+10;

        // To check if a box was completed above.
        var boxToBeColoredID_abv = "";
        var bool_aboveBox = false;
        if(line_ClickedB4('c', topLeft_node, midLeft_node) &&
           line_ClickedB4('h', topLeft_node,topRight_node) &&
           line_ClickedB4('c', topRight_node, midRight_node))
           {
            var boxToBeColoredID_abv = 'b'+topLeft_node + topRight_node+ '-' + midRight_node + midLeft_node;
            bool_aboveBox = true;
           }

        // To check if a box was completed below.
        var boxToBeColoredID_below = "";
        var bool_belowBox = false;
        if(line_ClickedB4('c', midLeft_node, bottomLeft_node) &&
           line_ClickedB4('h', bottomLeft_node, bottomRight_node) &&
           line_ClickedB4('c', midRight_node, bottomRight_node))
           {
            var boxToBeColoredID_below = 'b' + midLeft_node + midRight_node + '-' + bottomRight_node + bottomLeft_node;
            var bool_belowBox = true;
           }

        if(bool_aboveBox || bool_belowBox){

            if(bool_aboveBox && bool_belowBox){
                return [true, boxToBeColoredID_abv, boxToBeColoredID_below];
            }
            if(bool_aboveBox){
                return [true, boxToBeColoredID_abv];
            }
            if(bool_belowBox){
                return [true, boxToBeColoredID_below];
            }
        }

        // no box was completed.
        return [false];



    }



}

function wasBoxCompleted(aLineClicked, colorToFill, currentPlayer){
    // For Debugging only.
    //console.log("We are inside wasBoxCompleted");
    //console.log("The line clicked ID is " + aLineClicked.id);

    if(isItaBorderLine(aLineClicked)){
        //console.log("This is a line at the border");
        // In here, I need to check for the 3 other lines, that would make the box.
        // it would help to know, whether this is a horizontal line or a column.
        if(aLineClicked.id.charAt(0) === 'c'){
            // it is either in column 1 or column 6.
                // Determining the line above is actually important.

            // If column is at the left border.    
            if(aLineClicked.id.charAt(2) === '1'){
                var topLeft_node = aLineClicked.id.substring(1,3);
                // horizontal line only increases by 1. so if the node we obtained is "2,1" == 21 , we need
                // node "2,2" == 22. 
                // This node will also form part of the column that's across from column clicked.
                var topRight_node = (parseInt(topLeft_node)+1);
                var bottomRight_node =  (parseInt(topRight_node)+10);
                var bottomLeft_node = (parseInt(bottomRight_node)-1);

                // Building the ID's for the lines
                var top_HLine_ID = buildLineIDs('h', topLeft_node, topRight_node);
                var insideColumn_ID = buildLineIDs('c', topRight_node, bottomRight_node);
                var bottom_HLine_ID = buildLineIDs('h', bottomLeft_node, bottomRight_node);

                // If none of those line are gray, then this click would complete the box.
                if( (document.getElementById(top_HLine_ID).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(insideColumn_ID).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(bottom_HLine_ID).getAttribute('fill') != defaultGray))
                    {
                    // return an array of values.
                    var boxToBeColoredID = 'b'+topLeft_node+topRight_node+'-'+bottomRight_node+bottomLeft_node;
                    return [true,boxToBeColoredID];
                    }
                 else{
                    return [false, null];
                 }    


            }
            // if the column is at the right border
            if(aLineClicked.id.charAt(2) === '6'){
                // This is now the top right node
                var topRight_node = aLineClicked.id.substring(1,3);
                var topLeft_node = (parseInt(topRight_node)-1);
                var bottomLeft_node = (parseInt(topLeft_node)+10);
                var bottomRight_node = (parseInt(bottomLeft_node)+1);
                
                // Building the ID's for the lines:
                // Remember that we always go grom left to right and from top to bottom.
                var top_HLine_ID = buildLineIDs('h', topLeft_node,topRight_node);
                var insideColumn_ID = buildLineIDs('c', topLeft_node, bottomLeft_node);
                var bottom_HLine_ID = buildLineIDs('h', bottomLeft_node, bottomRight_node);

                // If none of those line are gray, then this click would complete the box.
                if( (document.getElementById(top_HLine_ID).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(insideColumn_ID).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(bottom_HLine_ID).getAttribute('fill') != defaultGray)){
                    var boxToBeColoredID = 'b'+topLeft_node+topRight_node+'-'+bottomRight_node+bottomLeft_node;
                    return [true,boxToBeColoredID];
                 }
                 else{
                    return [false,null];
                 }

            }
            /* For debugging purposes only.
            console.log("The string for the top horizontal line we built is: " + top_HLine)
            console.log("The element we get is: ");
            console.log(document.getElementById(top_HLine));*/

        }
        // When the LINE AT THE BORDER IS A HORIZONTAL LINE.
        // Again, we'll only have two cases. Either the line make up the top "frame"
        // or it makes the bottom frame.
        if(aLineClicked.id.charAt(0) === 'h'){
            
            // For lines that are rows, we can usually tell by looking at index 1.
            // If they contain a 1 or a 6 then they are at the frame.
            // The 1 means they are at the top of the frame.
            if(aLineClicked.id.charAt(1) === '1'){
            
                var topLeft_node = aLineClicked.id.substring(1,3);
                // The string is length 7, index goes up to 6.
                var topRight_node = aLineClicked.id.substring(5,7);
                var bottomRight_node = (parseInt(topRight_node)+10);
                var bottomLeft_node = (parseInt(bottomRight_node)-1);

                //Builing the ID's for the lines
                var bottom_HLine_ID = buildLineIDs('h', bottomLeft_node, bottomRight_node);
                var leftColumn = buildLineIDs('c',topLeft_node, bottomLeft_node);
                var rightColumn = buildLineIDs('c', topRight_node, bottomRight_node);

                // If none of the boxes remain gray, then this click indeed completed a box.
                if( (document.getElementById(leftColumn).getAttribute('fill') != defaultGray) &&
                (document.getElementById(bottom_HLine_ID).getAttribute('fill') != defaultGray) &&
                (document.getElementById(rightColumn).getAttribute('fill') != defaultGray)
                ){  // As in box was indeed completed.
                    //console.log("Indeed, this click did complete a box");
                    var boxToBeColoredID = 'b'+topLeft_node+topRight_node+'-'+bottomRight_node+bottomLeft_node;
                    return [true,boxToBeColoredID];
                }
                else{
                    return [false, null];
                }
            
            }
            // When the line is at the bottom of the frame.
            if(aLineClicked.id.charAt(1) === '6'){
                // We shold have the bottom line, therefore we retrieve bottom left and bottom right node.
                var bottomLeft_node = aLineClicked.id.substring(1,3);
                var bottomRight_node = aLineClicked.id.substring(5,7);
                var topLeft_node = (parseInt(bottomLeft_node)-10);
                var topRight_node = (parseInt(bottomRight_node)-10);

                // Building the ID's for the lines -> bottom line was the one clicked.
                var top_HLine_ID = buildLineIDs('h', topLeft_node,topRight_node);
                var leftColumn = buildLineIDs('c', topLeft_node, bottomLeft_node);
                var rightColumn = buildLineIDs('c', topRight_node, bottomRight_node);

                if((document.getElementById(leftColumn).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(rightColumn).getAttribute('fill') != defaultGray) &&
                    (document.getElementById(top_HLine_ID).getAttribute('fill') != defaultGray))
                    {
                        var boxToBeColoredID = 'b'+topLeft_node+topRight_node+'-'+bottomRight_node+bottomLeft_node;
                        return [true,boxToBeColoredID];
                        
                    }
                else{
                    return [false,null];
                }

            }



        } // END OF: // When the LINE AT THE BORDER IS A HORIZONTAL LINE.
    }
    // not a line at the border
    else{
        // THERE ARE 6 LINES THAT WE ARE GOING TO HAVE TO CHECK.
        // since a line clicked could actually complete two boxes.
        var values = sixLinesToCheck(aLineClicked);
        return values;

    }


}

// This might have to execute AFTER loading the results window.

    
    // EVENT HANDLER FOR ALL CLICKS DURING THE GAME ------------------------------------------//
    document.querySelector('.theLines').addEventListener('click', (ev) => {
        
        // This is only for debugging.
        theLineClicked = ev.target;
        //console.log(ev.target.id + ' was clicked');
        //console.log('Current color of this line is: ' + theLineClicked.getAttribute('fill'));

        if(currentPlayer == 0){

            var steelBlue = '#4682B4';
            
            // currentLineColor = theLineClicked.getAttribute('fill');
            if(theLineClicked.getAttribute('fill') ===defaultGray){
                // Only if it was gray, then change it to steel blue.
                // This is for the line.
                theLineClicked.setAttribute('fill',steelBlue); 

                var aBoxFilled = wasBoxCompleted(theLineClicked, steelBlue, currentPlayer);

                /* For debugging only.
                console.log("contents of Box to info returned: ");
                console.log("First element is [0]: " + aBoxFilled[0]);
                console.log("Second element is [1]: " + aBoxFilled[1]);
                console.log("Third element is [2]: " + aBoxFilled[2]);*/

                if(aBoxFilled[0]){
                    // might need to be strict.
                    if(aBoxFilled.length == 2){
                        // update player's score
                        scores[0]++;
                        // Get element where the score is stored in the HTML.
                        const text_element = document.getElementById('player1');
                        // Build string that we'll go in place.
                        let html = 'Player 1 (Blue): '+ scores[0];
                        // placing built string into HTML.
                        text_element.innerHTML = html;
                        // color that box or boxes.
                        var boxToBeColored = document.getElementById(aBoxFilled[1]);
                        boxToBeColored.setAttribute('fill',steelBlue);
                        boxToBeColored.setAttribute('stroke','#000000');
                        
                        numberofBoxesLeft--;
                        
                    }
                    // If two boxes were found complete.
                    if(aBoxFilled.length == 3){
                        scores[0]++;
                        scores[0]++;
                        // Get element where the score is stored in the HTML.
                        const text_element = document.getElementById('player1');
                        // Build string that we'll go in place.
                        let html = 'Player 1 (Blue): '+ scores[0];
                        text_element.innerHTML = html;

                        var boxToBeColoredL = document.getElementById(aBoxFilled[1]);
                        boxToBeColoredL.setAttribute('fill','#4682B4');
                        boxToBeColoredL.setAttribute('stroke','#000000');

                        var boxToBeColoredR = document.getElementById(aBoxFilled[2]);
                        boxToBeColoredR.setAttribute('fill','#4682B4');
                        boxToBeColoredR.setAttribute('stroke','#000000');

                        numberofBoxesLeft = numberofBoxesLeft-2;
                        

                    }

                    // Given the clicked line
                    // We could make it a square, and then do the fill of that square once the box has been completed.
                    // Do not increase current player counter, as the current player would get another chance.
                }
                else{
                    // nothing to update, give turn to next player.
                    currentPlayer++;
                }
            }
            // else, nothing will happen.
        }
        // If it's player's 2 turn (red player)
        if(currentPlayer == 1){

            if(theLineClicked.getAttribute('fill') ===defaultGray){

                theLineClicked.setAttribute('fill','red');
                // before we increment, we need to check that if they completed a box
                // if they did, then they get an extra turn.
                var aBoxFilled = wasBoxCompleted(theLineClicked, 'red', currentPlayer);
                if(aBoxFilled[0]){


                    if(aBoxFilled.length == 2){
                        // For player 2, the index is 1.
                        scores[1]++;
                        const text_element = document.getElementById('player2');
                        let html = 'Player 2 (Red): '+ scores[1];
                        text_element.innerHTML = html;
    
                        var boxToBeColored = document.getElementById(aBoxFilled[1]);
                        boxToBeColored.setAttribute('fill','red');
                        boxToBeColored.setAttribute('stroke','#000000');

                        numberofBoxesLeft--;
                        
                    }
                    // two boxes were close.
                    if(aBoxFilled.length == 3){
                        scores[1]++;
                        scores[1]++;
                        const text_element = document.getElementById('player2');
                        let html = 'Player 2 (Red): '+ scores[1];
                        text_element.innerHTML = html;

                        var boxToBeColoredL = document.getElementById(aBoxFilled[1]);
                        boxToBeColoredL.setAttribute('fill','red');
                        boxToBeColoredL.setAttribute('stroke','#000000');

                        var boxToBeColoredR = document.getElementById(aBoxFilled[2]);
                        boxToBeColoredR.setAttribute('fill','red');
                        boxToBeColoredR.setAttribute('stroke','#000000');

                        numberofBoxesLeft = numberofBoxesLeft-2;
                        
                    }
     
                }
                else{
                    // nothing to update, give turn to next player.
                    currentPlayer++;
                }
            }

        }
        if(currentPlayer == 2){

            if(theLineClicked.getAttribute('fill') === defaultGray){
                theLineClicked.setAttribute('fill','yellow');
                var aBoxFilled = wasBoxCompleted(theLineClicked, 'yellow', currentPlayer);
                if(aBoxFilled[0]){

                    if(aBoxFilled.length == 2){
                        // Index for player 3 is 2.
                        scores[2]++;
                        const text_element = document.getElementById('player3');
                        let html = 'Player 3 (Yellow): '+ scores[2];
                        text_element.innerHTML = html;
    
                        /* To be done inside wasBoxCompleted && sixLinesToCheck() functions.*/
                        var boxToBeColored = document.getElementById(aBoxFilled[1]);
                        boxToBeColored.setAttribute('fill','yellow');
                        boxToBeColored.setAttribute('stroke','#000000');

                        numberofBoxesLeft--;
                        
                    }

                    if(aBoxFilled.length == 3){
                        scores[2]++;
                        scores[2]++;
                        const text_element = document.getElementById('player3');
                        let html = 'Player 3 (Yellow): '+ scores[2];
                        text_element.innerHTML = html;


                        var boxToBeColoredL = document.getElementById(aBoxFilled[1]);
                        boxToBeColoredL.setAttribute('fill','yellow');
                        boxToBeColoredL.setAttribute('stroke','#000000');

                        var boxToBeColoredR = document.getElementById(aBoxFilled[2]);
                        boxToBeColoredR.setAttribute('fill','yellow');
                        boxToBeColoredR.setAttribute('stroke','#000000');

                        numberofBoxesLeft = numberofBoxesLeft-2;
                        //console.log("Number of Uncolored boxes left are: " + numberofBoxesLeft);
                        
                    }
                }
                else{
                    // nothing to update, give turn to next player.
                    currentPlayer++;
                }
            }


        }
        
        // ensures the turn is always either player 1 2 or 3.
        currentPlayer = (currentPlayer) % numberOfPlayers;
        var currPlayerDisplay = document.getElementById("player_Display");
        var messageToDisplay = "It's ";
        if(currentPlayer == 0){
            messageToDisplay += "Blue's (Player 1) turn";
        }
        if(currentPlayer == 1){
            messageToDisplay += "Red's (Player 2) turn";
        }
        if(currentPlayer == 2){
            messageToDisplay += "Yellow's (Player 3) turn";
        }

        //console.log(messageToDisplay);
        currPlayerDisplay.innerHTML = messageToDisplay;
        //console.log('Current player is [0,1,2]: ' + currentPlayer);
        if(numberofBoxesLeft==0){
            var currPlayerDisplay = document.getElementById("player_Display");
            currPlayerDisplay.innerHTML = "Game Over";
            whoWon();
        }
        
        
    } 
    ); // END OF EVENT HANDLER-----------------------------------------------------------//

   

    // See results event handler.
    document.querySelector('.seeResults').addEventListener('click', (ev) => {
        if(numberofBoxesLeft==0){
            var currPlayerDisplay = document.getElementById("player_Display");
            currPlayerDisplay.innerHTML = "Game Over";
            whoWon();
        }
        else{
            window.alert("Game is not over yet");
        }
    });


    function whoWon(){

        //console.log("Inside whoWon function");
    
       
        var play1Score = scores[0];
        var play2Score = scores[1];
        var play3Score = scores[2];
    
        //var resultText = document.getElementById('whereResultGoes');
    
        if((play1Score > play2Score) && (play1Score > play3Score)){
            // Player 1 is the winner.
            window.alert("Player 1 (Blue) wins \n"
             + "Player 1 (Blue) score: " + play1Score + "\n" 
             + "Player 2 (Red) score: " + play2Score + "\n"
             + "Player 3 (Yellow) score: " + play3Score + "\n"
            );
        }
        if((play2Score > play1Score) && (play2Score > play3Score)){
            window.alert("Player 2 (Red) wins \n"
            + "Player 1 (Blue) score: " + play1Score + "\n" 
            + "Player 2 (Red) score: " + play2Score + "\n"
            + "Player 3 (Yellow) score: " + play3Score + "\n"
           );
        }
        if((play3Score > play1Score) && (play3Score > play2Score)){
            window.alert("Player 3 (Yellow) wins \n"
            + "Player 1 (Blue) score: " + play1Score + "\n" 
            + "Player 2 (Red) score: " + play2Score + "\n"
            + "Player 3 (Yellow) score: " + play3Score + "\n"
            );
        }
    
        // since there are 25 boxes, there can't be a tie among the three.
        // but two of the three could tie.
        if( (play1Score === play2Score) && (play1Score > play3Score)){
            window.alert("Player 1(Blue) and 2(Red) tie for a win \n"
            + "Player 1 (Blue) score: " + play1Score + "\n" 
            + "Player 2 (Red) score: " + play2Score + "\n"
            + "Player 3 (Yellow) score: " + play3Score + "\n");
        }
        if( (play2Score === play3Score) && (play2Score > play1Score)){
            window.alert("Player 2(Red) and 3(Yellow) tie for a win \n"
            + "Player 1 (Blue) score: " + play1Score + "\n" 
            + "Player 2 (Red) score: " + play2Score + "\n"
            + "Player 3 (Yellow) score: " + play3Score + "\n");
        }
        if( (play3Score === play1Score) && (play3Score > play2Score)){
            window.alert("Player 3(Yellow) and 3(Blue) tie for a win\n"
            + "Player 1 (Blue) score: " + play1Score + "\n" 
            + "Player 2 (Red) score: " + play2Score + "\n"
            + "Player 3 (Yellow) score: " + play3Score + "\n");
        }
    
    
    }




    // EVENT HANDLER FOR RESTARTING GAME.
    document.querySelector('.restartButton').addEventListener('click', (ev) => {

        // must start with blue again.
        
        //console.log('Restart button was pressed');
        
        let all_Columns = $('[id^=c]');
        //Grab all the columns
        Array.from(all_Columns).forEach(element => {
            element.setAttribute('fill','#D3D3D3');
        });

        let all_HorizontalLines = $('[id^=h]');
        Array.from(all_HorizontalLines).forEach(element => {
            element.setAttribute('fill','#D3D3D3');
        });

        let all_colorableBoxes = $('[id^=b]');
        Array.from(all_colorableBoxes).forEach(element => {
            element.setAttribute('fill','#F5F5DC');
        })


        // Reset the Scores
        var currentScore1 = document.getElementById('player1');
        var p1Reset = "Player 1 (Blue): 0";
        currentScore1.innerHTML = p1Reset;

        var currentScore2 = document.getElementById('player2');
        var p2Reset = "Player 2 (Red): 0";
        currentScore2.innerHTML = p2Reset;

        var currentScore3 = document.getElementById('player3');
        var p3Reset = "Player 3 (Yellow): 0";
        currentScore3.innerHTML = p3Reset;

        // Reseting actual memory of scores.
        scores[0] = 0;
        scores[1] = 0;
        scores[2] = 0;
        // Make Blue Player go first again (not necessary.)

        currentPlayer = 0;
        var currPlayer_Displayed = document.getElementById('player_Display');
        currPlayer_Displayed.innerHTML = "It's Blue's (Player 1) turn";

        // reseting
        numberofBoxesLeft = 25; // trigger to open results.html
    }); // END OF RESTART GAME - EVENT HANDLER.

    