console.log(hello)

let names= document.querySelectorAll("li")
let target=document.querySelector("#reciver")

console.log(names)

names.forEach(item => {
    let newEl = document.createElement("li")
    newEl.innerText ="hi" + item.innerText;
    target.appendChild(newEl)
})

