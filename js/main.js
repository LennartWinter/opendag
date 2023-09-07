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

function reload(url){
    if(url == ""){
        location.reload();
    }
    else{
        location.href = url;
    }
}

function study() {
    replaceTextWithFileContent("docs/study.txt", "text");
}
function home() {
    replaceTextWithFileContent("docs/home.txt", "text");
}
function about() {
    replaceTextWithFileContent("docs/about.txt", "text");
}
function teachers() {
    replaceTextWithFileContent("docs/teachers.txt", "text");
}
function opinion() {
    replaceTextWithFileContent("docs/opinion.txt", "text");
}