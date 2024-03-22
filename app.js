let button = document.getElementById("Add");
let notiz;
button.addEventListener('click', function() {
    newSite();
});

function newSite(){
    let parent = document.getElementById("pop-up");
    let text = document.createElement("p")
    text.innerHTML = "Geben Sie ins untere Feld ihre Notiz ein.";
    let input = document.createElement("input");
    let save = document.createElement("button");
    save.innerHTML ="save";
    save.id = "save";
    
    parent.insertBefore(save, parent.firstChild);
    parent.insertBefore(input, parent.firstChild);
    parent.insertBefore(text, parent.firstChild);

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
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({"id":1,"notiz":Halllo});
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("arn:aws:execute-api:us-east-1:891377119806:m7v0lwnbed/*/POST/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));

}