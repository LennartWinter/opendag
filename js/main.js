function replaceTextWithFileContent(file, id) {
    var element = document.getElementById(id);
  
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch content from " + file + " : " + response.status);
        }
        return response.text();
      })
      .then(text => {
        element.textContent = text;
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
}

function replaceText(text, id){
    var element = document.getElementById(id);
    element.textContent = text;
}

function replaceImg(img, id){
    var element = document.getElementById(id);
    element.src = img;
}

function reload(url){
    if(url == "" || url == null){
        location.reload();
    }
    else{
        location.href = url;
    }
}

function study() {
    replaceTextWithFileContent("docs/study.txt", "text");
    replaceText("Opleiding's traject", "title");
}
function home() {
    replaceTextWithFileContent("docs/home.txt", "text");
    replaceText("Home", "title");
}
function about() {
    replaceTextWithFileContent("docs/about.txt", "text");
    replaceText("Over de opleiding", "title");
    locations = ["img/Sanne Bas - Curio - Knipplein 11-1.jpg", "img/Sanne Bas - Curio - Knipplein 11-2.jpg", "img/Sanne Bas - Curio - Knipplein 11-3.jpg", "img/Sanne Bas - Curio - Terheijdenseweg 350-1.jpg", "img/Sanne Bas - Curio - Terheijdenseweg 350-2.jpg"];
    // loop through the images every 2 seconds
    var i = 0;
    setInterval(function() {
        replaceImg(locations[i], "image");
        i++;
        if (i == locations.length) {
            i = 0;
        }
    }, 2000);
}
function teachers() {
    replaceTextWithFileContent("docs/teachers.txt", "text");
    replaceText("De docenten", "title");
}
function opinion() {
    replaceTextWithFileContent("docs/opinion.txt", "text");
    replaceText("Wat vind ik van de opleiding?", "title");
}