let button = document.getElementById("Add");
let notiz;
let text = document.getElementById("text");
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

function get() {
    const URL = "https://api.endpoint.get.com"; 
    const fetchData = {
        method: "Post", 
        body: input_text,
         headers: { 
         "Content-type": "application/json",
         charset : "UTF-8" 
     } 
     };
    
    
    fetch(URL, fetchData) 
    .then((response) => { 
        return response.json(); 
    }) 
    .then((fetchData) => { 
         text.innerHTML = fetchData;
    }).catch((error)=>{
        console.log(error);
    }); 
}

function push(){
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({"notiz": notiz});
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response
        fetch("https://api.endpoint.post.com", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));

}