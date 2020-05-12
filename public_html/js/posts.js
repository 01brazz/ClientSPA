/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showList(address) {
    document.getElementById("postsGrezzi").innerHTML = "";

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            formatta(this.responseText);

        } else
            document.getElementById("doingP").innerHTML = "doing..";

    }
    xmlhttp.open("GET", address, true);
    xmlhttp.send();
}

function formatta(json) {
    document.getElementById("postsGrezzi").innerHTML = json;
    var parsedJson = JSON.parse(json);
    out = "";
    for (i = 0; i < parsedJson.length; i++) {
        out += "<a href=\"#\" class=\"list-group-item list-group-item-action active\" style=\"width: 400px\">";
        out += "<div class=\"d-flex w-100 justify-content-between\">";
        out += "<h4 class=\"mb-1\">" + parsedJson[i].titolo + "</h4>";
        out += "<small>" + parsedJson[i].dataOra + "</small>";
        out += "</div>";
        out += "<p class=\"mb-1\">" + parsedJson[i].contenuto + "</p>";
        out += "<small>" + parsedJson[i].autore + "</small>";
        out += "<br>";
        out += "</a>";
        out += "<br>";
    }
    document.getElementById("postsFormattati").innerHTML = out;
    document.getElementById("doingP").innerHTML = "";
}

function postPost(address) {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            switch (this.status) {
                case 201:
                    var parsedJson = JSON.parse(this.responseText);
                    //var selfUrl = this.getResponseHeader("location");
                    var codice = parsedJson.server;
                    var stato = 'Created';
                    //var location = 'location: ' + selfUrl;
                    document.getElementById("esitoP").innerHTML = codice + ": " + stato;
                    getPost(parsedJson.response);
                    break;
                case 404:
                    document.getElementById("esitoP").innerHTML = "Error 404 ";
                    break;
                default:
                    document.getElementById("esitoP").innerHTML = "Failure";
            }
        }
    };

    var titolo = document.getElementById("titoloP");
    var autore = document.getElementById("autoreP");
    var contenuto = document.getElementById("contenutoP");
    var dataOra = document.getElementById("dataOraP");

    xmlhttp.open("POST", address, true);
    var post = JSON.stringify({"titolo": titolo, "autore": autore, "contenuto": contenuto, "dataOra": dataOra});
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(post);
}

function showSingle(address) {
    document.getElementById("postGrezzo").innerHTML = "";

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            formattaSingle(this.responseText);
        } else
            document.getElementById("doingPS").innerHTML = "doing..";
    }
    
    var id = document.getElementById("idPost").value;
    xmlhttp.open("GET", address + id, true);
    xmlhttp.send();
}

function formattaSingle(json) {
    document.getElementById("postGrezzo").innerHTML = json;
    var parsedJson = JSON.parse(json);
    out = "";
    out += "<a href=\"#\" class=\"list-group-item list-group-item-action active\" style=\"width: 400px\">";
    out += "<div class=\"d-flex w-100 justify-content-between\">";
    out += "<h4 class=\"mb-1\">" + parsedJson.titolo + "</h4>";
    out += "<small>" + parsedJson.dataOra + "</small>";
    out += "</div>";
    out += "<p class=\"mb-1\">" + parsedJson.contenuto + "</p>";
    out += "<small>" + parsedJson.autore + "</small>";
    out += "<br>";
    out += "</a>";
    out += "<br>";

    document.getElementById("postFormattato").innerHTML = out;
    document.getElementById("doingPS").innerHTML = "";
}
