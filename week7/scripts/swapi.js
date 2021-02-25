let url = "https://swapi.dev/api/people/";
getUrl();

function getUrl(){
    let main = document.querySelector('main');
    main.innerHTML = '';
    
fetch(url)
    .then(result => result.json())
    .then(jsonResult => {
        console.log(jsonResult);
        //Show count
        main.innerHTML += `<h2>There are ${jsonResult.count} people</h2>`
        jsonResult.results.forEach(
            person => {
                main.innerHTML +=
                    `<div>${person.name}</div>`;
                // console.log(person.name);
            }

        )
        
        const button = document.createElement("button");
        button.innerHTML = "next page";
        main.appendChild(button);
        url = jsonResult.next;

        button.addEventListener("click", getUrl);
        })
    });