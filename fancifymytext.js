function makeTextBigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function FancyShmancy(){
    document.getElementById("text").style.border = "2px solid black";  
    document.getElementById("text").style.borderRadius = "10px"; 
    document.getElementById("text").style.borderColor = "red"; 
    document.getElementById("text").style.fontFamily = "Arial, sans-serif"; 
    document.getElementById("text").style.fontWeight = "bold"; 
    document.getElementById("text").style.fontStyle = "italic"; 
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textAlign = "center";
    document.getElementById("text").style.textDecoration = "underline"; 
     
    document.getElementById("text").style.backgroundColor = "lightyellow";
}

function BoringBetty(){
    document.getElementById("text").style.border = "";  
    document.getElementById("text").style.borderRadius = ""; 
    document.getElementById("text").style.borderColor = ""; 
    document.getElementById("text").style.fontFamily = ""; 
    document.getElementById("text").style.fontWeight = ""; 
    document.getElementById("text").style.fontStyle = ""; 
    document.getElementById("text").style.color = "";
    document.getElementById("text").style.textAlign = "";
    document.getElementById("text").style.textDecoration = ""; 
    document.getElementById("text").style.textTransform = "";   
    document.getElementById("text").style.backgroundColor = "";
}

function moo(){
    const textArea = document.getElementById("text");  
    let text = textArea.value;
    text = text.toUpperCase();
    var parts = text.split(" "); 
    text = parts.join("_");  
    text = text + "-Moo";  
    textArea.value = text  ;
}