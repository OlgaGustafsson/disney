/* From API https://api.disneyapi.dev */


const url = "https://api.disneyapi.dev/characters";

const imgElem = document.querySelector('#img') as HTMLImageElement;
//const imageSec = document.querySelector("#image") as HTMLElement;

const button = document.querySelector("#button-image") as HTMLButtonElement;
// const buttonSearch = document.querySelector('#button-search') as HTMLButtonElement;
// const inputNumber = document.querySelector("#id-number") as HTMLInputElement;
const infoSec = document.querySelector('#info') as HTMLElement;

//____________get all characters__________


getAllCharacters();
async function getAllCharacters() {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);    
};

//_______show character/ random__________

button.addEventListener("click", async (event) => {
    event.preventDefault();

    async function showImage() {
        const response = await fetch(url);
        const data = await response.json();

        //console.log(data.data[1]);
        
        const randomElem = Math.floor(Math.random() * data.data.length + 1);
        imgElem.src = data.data[randomElem].imageUrl;

        console.log(data.data[randomElem].imageUrl);
    
}
showImage();
});









    
