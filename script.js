function getFilmes() {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'http://localhost/git/XML_Learn_About/filmes.xml');

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let XMLFilmes = xmlhttp.responseText
            console.log(XMLFilmes)

            let parser = new DOMParser() // Criando objeto para converter string em dom
            domFilmes = parser.parseFromString(XMLFilmes, 'text/xml') // convertendo xml em uma árvore de elementos
            console.log(domFilmes)

            jsonFilmes = xmlToJson(domFilmes)
            console.log(jsonFilmes)
            
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            //...
        }
    }
    
    xmlhttp.send();
}