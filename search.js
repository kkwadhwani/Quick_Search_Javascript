let a = ["Amber", "Jack", "Rone", "Anjum", "Amar"]
let name = "jack"

let ul = document.getElementById("ul")

let s = document.getElementById("input")
s.addEventListener("keyup", (e)=>{
let a = e.target.value
filterSearch(a)
})
function filterSearch(s){
    let b = a.filter((i)=>{return i.toUpperCase().includes(s.toUpperCase())})
   list(b)
}

function list(names){
    ul.innerHTML=""
console.log(names)
let allList = []

    for(let i = 0; i<names.length; i++){

        let li = document.createElement("li")
        li.textContent=names[i]
       
        ul.append(li)
    }


    console.log(ul.innerHTML)
}

list(a)



