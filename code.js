function openNav() {
    var sidebar = document.getElementById("mysidebar")
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
}



function laatzienfoto() {
    document.getElementById("display").innerHTML = "<h1>Foto van Koen.</h1><img src=img/fotokoen.jpg width=10% height=10%>";
}
function laatzienwerk() {
    document.getElementById("display").innerHTML = "<h1>Werkervaring.</h1><br><p>Ik heb voor 7 maanden bij de Jumbo gewerkt als vakkenvuller.</p>";
  }
function laatzienop() {
    document.getElementById("display").innerHTML = "<h1>Opleidingen</h1><br><p>Ik heb een vmbo diploma.</p><p>Ik doe nu een opleing voor software devloper op het Techniek college Rotterdam Janlichthardstraat 250.</p>";
  }
function laatzienpro() {
    document.getElementById("display").innerHTML = "<h1>Programmeer vaardigheden</h1><br><p>Ik ben een beginner in de talen: PHP,Javascript,HTML,CSS en SQL.</p>";
  }
function laatziencon() {
    document.getElementById("display").innerHTML = "<h1>Contact</h1><br><p>Email:9023005@student.zadkine.nl</p><p>Telefoonnummer:063432652</p>";
  }