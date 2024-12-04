const colors = ["red","blue","lightgreen","yellow","pink","orange","purple","green"]
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const colorSpan = document.querySelector("#color");
const colorButton = document.querySelector("#get-color");
const randomButton = document.querySelector("#random-color")

colorButton.addEventListener("click", function() {
    let pickedColor = Math.floor(getRandomNumber() * colors.length)
    document.body.style.backgroundColor = colors [pickedColor]
    colorSpan.innerText = colors [pickedColor]
})

randomButton.addEventListener("click", function() {
    console.log ("clicked random")
    let pickedColor = "#";
    for(let el=0; el<6; el++) {
        pickedColor += hex[getRandomNumber(hex)];
        console.log(pickedColor)
    }
    document.body.style.backgroundColor = pickedColor
    colorSpan.innerText = pickedColor;
})

function getRandomNumber(list) {
    console.log(list)
    return Math.floor (Math.random() * list.length)
}