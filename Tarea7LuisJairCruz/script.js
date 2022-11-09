function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "equipo.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("equipo");
    let table="<tr><th>Modelo</th><th>Marca</th><th>Precio</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("modelo")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("precio")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }