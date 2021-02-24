function biggerfunc() {
    document.getElementById("txtarea").style.fontSize= "24pt";
}

function style() {
    document.getElementById("txtarea").style.backgroundColor= "grey";
}

function unstyle() {
    document.getElementById("txtarea").style.backgroundColor = "white";
}


function alertfuncfancy() {
    document.getElementById("txtarea").style.fontWeight = "bold";
    document.getElementById("txtarea").style.color = "blue";
    document.getElementById("txtarea").style.textDecoration = "underline";
}

function alertfuncboring() {
    document.getElementById("txtarea").style.fontWeight = "normal";
}

function capitalize() {
    document.getElementById("txtarea").style.textTransform = "uppercase";
    var str = document.getElementById("txtarea").value; 
    const newstr = str.split(".");
    str = newstr.join("-Moo");
    document.getElementById("txtarea").value = str;
}
