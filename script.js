function getFilmes() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'http://localhost/git/XML_Learn_About/filmes.xml');

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let XMLFilmes = xmlhttp.responseText
            console.log(XMLFilmes)
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            //...
        }
    }
    
    xmlhttp.send();
}