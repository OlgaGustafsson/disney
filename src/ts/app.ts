/* From API https://api.disneyapi.dev/character */


const url = "https://api.disneyapi.dev/character";
const urlSearch = "https://api.disneyapi.dev/characters";
//const urlSearch = "https://api.disneyapi.dev/character/search?query="
//const urlName = "https://api.disneyapi.dev/character?name="

const imgElem = document.querySelector('#img') as HTMLImageElement;
//const imageSec = document.querySelector("#image") as HTMLElement;

const buttonSearch = document.querySelector('#search-btn') as HTMLButtonElement;
const inputNumber = document.querySelector("#id-number") as HTMLInputElement;
//const infoSec = document.querySelector('#info') as HTMLElement;


//______________show character/ random______________

const char = fetch(url)
    .then(response => {
        return response.json();
    })
    .then(charsArray => {
        printChar(charsArray);

        console.log(charsArray);
    });

function printChar(chars: any) {
    let button = document.querySelector("#button") as HTMLButtonElement;
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let randomN = Math.floor(Math.random() * chars.length + 1);
         
        
        imgElem.src = chars[randomN].imageUrl;

    });
};

console.log(("hej"));


//________________search character by id___________________


buttonSearch.addEventListener("click", async (event) => {
    event.preventDefault();

    const response = await fetch(urlSearch + inputNumber.value);
    const data = await response.json();

    // const elementById = data.results.url;
    // imgElem.src = elementById;
    

   
   
});








    
