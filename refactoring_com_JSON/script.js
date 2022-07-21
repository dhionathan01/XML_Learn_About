function getFilmes() {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'http://localhost/git/XML_Learn_About/refactoring_com_JSON/filmes.json');

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let JSONFilmes = xmlhttp.responseText
            //console.log(JSONFilmes)
            let objJSONFilmes = JSON.parse(JSONFilmes)
            
            console.log(objJSONFilmes)


            for (let i in objJSONFilmes.filmes){
                let item = objJSONFilmes.filmes[i]
                console.log(item)
                
                let divRow = document.createElement('div')
                divRow.className = 'row'

                let divCol = document.createElement('div')
                divCol.className = 'col'

                let p1 = document.createElement('p')
                p1.innerHTML = '<strong>Título:</strong> ' + item.titulo

                let p2 = document.createElement('p')
                p2.innerHTML = '<strong>Resumo:</strong> ' + item.resumo

                let genero = ''
                for (let g in item.generos) {
                    // Adicionando uma espaço e uma vírgula para cada gênero
                    if (genero) genero += ', '
                    genero += (item.generos[g].genero)
                }
                let p3 = document.createElement('p')
                p3.innerHTML = '<strong>Gênero:</strong> ' + genero

                let elenco = ''
                for (let e in item.elenco) {
                    // Adicionando uma espaço e uma vírgula para cada gênero
                    if (elenco) elenco += ', '
                    elenco += (item.elenco[e].ator)
                }

                let p4 = document.createElement('p')
                p4.innerHTML = '<strong>Elenco:</strong> Elenco do filme: ' + elenco



                let p5 = document.createElement('p')
                p5.innerHTML = '<strong>Data de lançamento:</strong> ' + item.dataLancamento.data + ' (' + item.dataLancamento.pais + ')'

                let hr = document.createElement('hr')

                divRow.appendChild(divCol)
                divCol.appendChild(p1)
                divCol.appendChild(p2)
                divCol.appendChild(p3)
                divCol.appendChild(p4)
                divCol.appendChild(p5)
                divCol.appendChild(hr)

                document.getElementById('lista').appendChild(divRow)
                
            }
            
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            //...
        }
    }
    
    xmlhttp.send();
}