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

  function showF(){
    document.getElementById("display").innerHTML = "<h1>mijn foto.</h1><img src = img/stijnfot.jpg width = 10% height=10%>";
  }
  function showop() {
    document.getElementById("display").innerHTML = "<h1>Opleidingen</h1><br><p>de opleiding die ik nu doe = software developer op het Techniek college Rotterdam Janlichthardstraat 250.</p>";
  }
  function showpro() {
    document.getElementById("display").innerHTML = "<h1>Programmeer talen</h1><br><p>talen waar ik goed in ben : PHP,HTML,CSS. en talen die ik nog lastig vind: javascript en SQL</p>";
  }
  function showcon() {
    document.getElementById("display").innerHTML = "<h1>Contact</h1><br><p>Email:9022729@student.zadkine.nl</p><p></p>";
  }


  function showFotodorian(){
    document.getElementById("display").innerHTML = "<h1>mijn foto.</h1><img src = img/dorian.jpg width = 10% height=10%>";
  }
  function showopdorian() {
    document.getElementById("display").innerHTML = "<h1>Opleidingen</h1><br><p>ik doe nu de opleiding: software development op het Techniek college Rotterdam Janlichthardstraat 250.</p>";
  }
  function showprodorian() {
    document.getElementById("display").innerHTML = "<h1>Programmeer talen</h1><br><p>ik ben goed in met deze progammeertalen : PHP,HTML,CSS. ik nog wat minder goed met de talen : javascript</p>";
  }
  function showcondorian() {
    document.getElementById("display").innerHTML = "<h1>Contact</h1><br><p>Email:9022369@student.zadkine.nl</p><p></p>";
  }