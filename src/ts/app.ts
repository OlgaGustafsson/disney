/* From API https://api.disneyapi.dev */


const url = "https://api.disneyapi.dev/characters";

const imgElem = document.querySelector('#img') as HTMLImageElement;
//const imageSec = document.querySelector("#image") as HTMLElement;

let button = document.querySelector("#button-image") as HTMLButtonElement;
// const buttonSearch = document.querySelector('#search-btn') as HTMLButtonElement;
// const inputNumber = document.querySelector("#id-number") as HTMLInputElement;
const infoSec = document.querySelector('#info') as HTMLElement;



//____________get all characters__________


getAllCharacters();
async function getAllCharacters() {
    //button.addEventListener("click", async (event) => {
        //event.preventDefault();
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    
        //const randomElem = Math.floor(Math.random() * data.length + 1);

        //imgElem.src = randomElem.imageUrl;
        //console.log(randomElem.imageUrl);
    //})
};

//_______show character/ random__________

button.addEventListener("click", async (event) => {
    event.preventDefault();

    async function showImage() {
        const response = await fetch(url);
        const data = await response.json();
        
        const arrlength = data.length;
        const randomElem = Math.floor(Math.random() * arrlength + 1);

        imgElem.src = data[randomElem].imageUrl;

        console.log(data[randomElem].imageUrl);

        // const randomElem = Math.floor(Math.random() * data.length + 1);
        
        // imgElem.src = randomElem.imageUrl;
        // console.log(randomElem.imageUrl);

        
	//     let length: number = data.length;
    //     for (let i = 0; i < length; i++) {
    //         const infoDiv = document.createElement(".info") as HTMLDivElement;
    //         infoDiv.innerHTML = "";
    //         infoDiv.innerHTML = `Hi! My name is ${data.results[i].name}`;
    //         infoSec.append(infoDiv);
            
    //         console.log(data.results[i].name);
    // };
    
}
showImage();

});






//________________search character by id___________________


// buttonSearch.addEventListener("click", async (event) => {
//     event.preventDefault();

//     const response = await fetch(urlSearch + inputNumber.value);
//     const data = await response.json();

    // const elementById = data.results.url;
    // imgElem.src = elementById;
      
// });








    
