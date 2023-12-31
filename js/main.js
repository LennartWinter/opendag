var currentPage = "home";

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
    currentPage = "study";
    replaceTextWithFileContent("docs/study.txt", "text");
    replaceText("Study's program", "title");
}
function home() {
    currentPage = "home";
    replaceTextWithFileContent("docs/home.txt", "text");
    replaceText("Home", "title");
}
function about() {
    currentPage = "about";
    replaceTextWithFileContent("docs/about.txt", "text");
    replaceText("About the study", "title");
    replaceImg(locations[4], "image");
}
function teachers() {
    currentPage = "teachers";
    replaceTextWithFileContent("docs/teachers.txt", "text");
    replaceText("The teachers", "title");
}
function opinion() {
    currentPage = "opinion";
    replaceTextWithFileContent("docs/opinion.txt", "text");
    replaceText("What do I think of the study?", "title");
}

var i = 0;
setInterval(function() {
    if(currentPage=="about"){
        locations = ["https://cdn.discordapp.com/attachments/1090980363993612412/1151055371885097000/Sanne_Bas_-_Curio_-_Knipplein_11-1.jpg", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055380772827136/Sanne_Bas_-_Curio_-_Knipplein_11-2.jpg", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055372291936276/Sanne_Bas_-_Curio_-_Knipplein_11-3.jpg", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055372833013760/Sanne_Bas_-_Curio_-_Terheijdenseweg_350-1.jpg", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055373244043324/Sanne_Bas_-_Curio_-_Terheijdenseweg_350-2.jpg"];
        texts = ["Knipplein 11, Roosendaal", "Knipplein 11, Roosendaal", "Knipplein 11, Roosendaal", "Terheijdenseweg 350, Breda", "Terheijdenseweg 350, Breda"];
        replaceImg(locations[i], "image");
        replaceText(texts[i], "imagehead");
        i++;
        if (i >= locations.length) {
            i = 0;
        }
    }
    else if(currentPage=="teachers"){
        names = ["Elton Boekhoudt", "Wicher Hulzebosch", "Bart Roos", "Joep van Gils", "Mustafa Kasar", "Michel Meeuwsen", "Bart Kouwenberg", "Tim Lutt"]
        locations = ["https://cdn.discordapp.com/attachments/1090980363993612412/1151055371453087835/elton.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055373642514502/wicher.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055380361789450/bart.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055371222396928/default.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055371222396928/default.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055371222396928/default.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055371222396928/default.png", "https://cdn.discordapp.com/attachments/1090980363993612412/1151055371222396928/default.png"]
        replaceImg(locations[i], "image");
        replaceText(names[i], "imagehead");
        i++;
        if (i >= locations.length) {
            i = 0;
        }
    }
    else{
        image = "https://cdn.discordapp.com/attachments/1090980363993612412/1151055370387722250/curio-01-zwart-logo-rgb.png"
        replaceImg(image, "image");
        replaceText("Curio logo", "imagehead");
    }
}, 2000);