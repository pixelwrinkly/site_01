function randomColor() {
    function randomComponent() {
        return Math.floor(Math.random() * 255) + 1; // 0-255 inclusive
    }
    return `rgb(${randomComponent()},${randomComponent()},${randomComponent()})`;
}
function handleButtonClick() {
    console.log('handling a button click event');
    for(let t=0; t<tiles.length; t++){
        tiles[t].style.background = randomColor();
    }
    bod.style.background = randomColor();
}

// function handleTileClick(){
//     console.log('handling a tile click');
//     this.style.backgroundColor = "white";
// }
const tiles = document.getElementsByClassName('tile');
const bod = document.body;
console.log(`there are ${tiles.length} tiles`);
// for(let t=0; t<tiles.length; t++){
//     tiles[t].addEventListener("click",handleTileClick);
// }

const btn = document.getElementById('btn');
btn.addEventListener('click', handleButtonClick);

handleButtonClick();

// todo - have a grid of spans, and give each of them a random color when the button is clicked
