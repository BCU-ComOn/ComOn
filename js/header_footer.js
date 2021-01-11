window.addEventListener('DOMContentLoaded', function() {
    // header, footer 생성.
    let docuBody = document.getElementsByTagName('body')[0];
    let docuHeader = document.createElement('header');
    let docuFooter = document.createElement('footer');

    docuHeader.className = "mainPage-Header";
    docuHeader.id = 'header';
    docuFooter.className = "mainPage-footer";
    docuFooter.id = 'footer';

    docuBody.prepend(docuHeader);
    docuBody.appendChild(docuFooter);

    let header = document.getElementById('header');
    let footer = document.getElementById('footer');

    var request = new XMLHttpRequest();

    request.open('GET', 'https://bcu-comon.github.io/ComOn/structure.html', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
        console.log(resp);

        //docuHeader.innerHTML = resp.split("id='header'>")[1];//.split("</header>")[0];
        console.log(resp.split('<header class="mainPage-Header" id="header">')[1].split("</header>")[0]);
        header.innerHTML = resp.split('<header class="mainPage-Header" id="header">')[1].split("</header>")[0];
        
        console.log(resp.split('<footer class="mainPage-footer"> id="footer"')[1].split('</footer>')[0]);
        footer.innerHTML = resp.split('<footer class="mainPage-footer" id="footer">')[1].split('</footer>')[0];
        //document.querySelector('body').innerHTML = resp;
      }
    }
    request.send();
});