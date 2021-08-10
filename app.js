var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var divOutput = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslated(input){
     return serverURL+"?"+"text="+input;
}
function errorHandler(error){
    console.log("Something went wrong in sever",error);
    alert("something went wrong at sever, try after sometime");
}
function onClick(){
    var inputTxt = txtInput.value;
    fetch(getTranslated(inputTxt))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click",onClick);
