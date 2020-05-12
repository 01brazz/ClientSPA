/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showList2(address) {
    document.getElementById("commentiGrezzi").innerHTML = "";

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            formatta2(this.responseText);

        } else
            document.getElementById("doingC").innerHTML = "doing..";

    }
    xmlhttp.open("GET", address, true);
    xmlhttp.send();
}

function formatta2(json) {
    document.getElementById("commentiGrezzi").innerHTML = json;
    var parsedJson = JSON.parse(json);
    out = "";
    for (i = 0; i < parsedJson.length; i++) {
        out += "<div class=\"list-group-item list-group-item-action active\" style=\"width: 300px\">";
        out += "<div class=\"d-flex w-100 justify-content-between\">";
        out += "<small>" + parsedJson[i].dataOra + "</small>";
        out += "</div>";
        out += "<p class=\"mb-1\">" + parsedJson[i].contenuto + "</p>";
        out += "<small>" + parsedJson[i].autore + "</small>";
        out += "</div>";
        out += "</a>";
        out += "<br>";
    }
    document.getElementById("commentiFormattati").innerHTML = out;
    document.getElementById("doingC").innerHTML = "";
}

function postCommento(address) {
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
                    document.getElementById("esitoC").innerHTML = codice + ": " + stato;
                    getPost(parsedJson.response);
                    break;
                case 404:
                    document.getElementById("esitoC").innerHTML = "Error 404 ";
                    break;
                default:
                    document.getElementById("esitoC").innerHTML = "Failure";
            }
        }
    };

    var autore = document.getElementById("autoreC");
    var contenuto = document.getElementById("contenutoC");
    var dataOra = document.getElementById("dataOraC");

    xmlhttp.open("POST", address, true);
    var post = JSON.stringify({"autore": autore, "contenuto": contenuto, "dataOra": dataOra});
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(post);
}

function showSingle2(address) {
    document.getElementById("commentoGrezzo").innerHTML = "";

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            formattaSingle2(this.responseText);

        } else
            document.getElementById("doingCS").innerHTML = "doing..";

    }

    var id = document.getElementById("idCommento").value;
    xmlhttp.open("GET", address + id, true);
    xmlhttp.send();
}

function formattaSingle2(json) {
    document.getElementById("commentoGrezzo").innerHTML = json;
    var parsedJson = JSON.parse(json);
    out = "";

    out += "<div class=\"list-group-item list-group-item-action active\" style=\"width: 300px\">";
    out += "<div class=\"d-flex w-100 justify-content-between\">";
    out += "<small>" + parsedJson.dataOra + "</small>";
    out += "</div>";
    out += "<p class=\"mb-1\">" + parsedJson.contenuto + "</p>";
    out += "<small>" + parsedJson.autore + "</small>";
    out += "</div>";
    out += "<br>";

//    out += "<a href=\"#\" class=\"list-group-item list-group-item-action\" style=\"width: 400px\">";
//    out += "<div class=\"d-flex w-100 justify-content-between\">";
//    out += "<h4 class=\"mb-1\">" + parsedJson.titolo + "</h4>";
//    out += "<small>" + parsedJson.dataOra + "</small>";
//    out += "</div>";
//    out += "<p class=\"mb-1\">" + parsedJson.contenuto + "</p>";
//    out += "<small>" + parsedJson.autore + "</small>";
//    out += "<br>";
//    out += "</a>";
//    out += "<br>";

    document.getElementById("commentoFormattato").innerHTML = out;
    document.getElementById("doingCS").innerHTML = "";
}
