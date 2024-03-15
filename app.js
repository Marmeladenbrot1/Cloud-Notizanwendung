let button = document.getElementById("Add");
let notiz;
button.addEventListener('click', function() {
    newSite();
   
});

function newSite(){
    let parent = document.getElementById("pop-up");
    let text = document.createElement("h1")
    text.innerHTML = "Geben Sie ins untere Feld ihre Notiz ein.";
    let input = document.createElement("input");
    let save = document.createElement("button");
    save.innerHTML ="save";
    save.id = "save";
    parent.appendChild(text);
    parent.appendChild(input);
    parent.appendChild(save);

    save.addEventListener("click", function() {
        notiz = input.value;
        console.log(notiz);
        text.remove();
        input.remove();
        save.remove();
        push();
    })
}

function push(){

}