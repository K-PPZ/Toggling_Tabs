let divs = document.getElementsByClassName("options");
let opt = document.getElementById("liste");
let t = ["Sort by price", "Sort by name", "Sort by relevance"];
let option = document.getElementById("sort");

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", () => {
        option.innerText = t[i];
        for (let y = 0; y < divs.length; y++) {
            divs[y].style.backgroundColor = "white";
        }
        divs[i].style.backgroundColor = "#5796FF";
    });
}

opt.addEventListener("change", () => {
    let id;
    for (let i = 0; i < opt.children.length; i++) {
        id = opt.value === opt.children[i].value ? i : id;
    }
    console.log(id);
    for (let y = 0; y < divs.length; y++) {
        divs[y].style.backgroundColor = "white";
    }
    divs[id].style.backgroundColor = "#5796FF";
});