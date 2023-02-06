/* From API https://api.disneyapi.dev */

const url = "https://api.disneyapi.dev/characters/";
const urlPage = "https://api.disneyapi.dev/characters?page=";

const imgElem = document.querySelector('#img') as HTMLImageElement;
const buttonImage = document.querySelector("#button-image") as HTMLButtonElement;
const nameElem = document.querySelector("#name") as HTMLElement;
const buttonGames = document.querySelector("#button-games") as HTMLButtonElement;
const infoSec = document.querySelector("#videogames") as HTMLElement;
const buttonSearch = document.querySelector('#button-search') as HTMLButtonElement;
const inputNumber = document.querySelector("#id-number") as HTMLInputElement;
const buttonPage = document.querySelector("#button-page") as HTMLButtonElement;
const inputNumberPage = document.querySelector("#page-number") as HTMLInputElement;
const pageInfo = document.querySelector(".page-info") as HTMLParagraphElement;


//____________get all characters__________

getAllCharacters();
async function getAllCharacters() {
        const response = await fetch(url);
        const data = await response.json();
        

        console.log(data);    
};

//_______________choice page___________

buttonPage.addEventListener("click", async (event) => {
async function getPage() {
    const response = await fetch(urlPage + inputNumberPage.value);
    const data = await response.json();
    
    console.log(data);

    //pageInfo.innerHTML = "";
    pageInfo.innerHTML = `Page number ${inputNumberPage.value} have characters 
                    with ID from ${data.data[0]._id} to ${data.data[49]._id}.`;
    console.log("pages");
    
}
getPage();
//inputNumberPage.value = ""; // tar bort för att kunna visa page number i pageInfo
});

//___________search character by id____________

buttonSearch.addEventListener("click", async (event) => {
    async function getCharacterById() {
        const response = await fetch(url + inputNumber.value);
        const data = await response.json();

        console.log(data);

        nameElem.innerHTML ="";
        infoSec.innerHTML = "";
        imgElem.src = "";
        imgElem.src = data.imageUrl;

        console.log(data.imageUrl);
        
        nameElem.innerHTML = `Hello! My name is ${data.name}`;
        infoSec.innerHTML = `Here are video games with 
            ${data.name}: ${data.videoGames}`;          
    }
    getCharacterById();
    inputNumber.value = "";
});

//___________show image/ random__________

buttonImage.addEventListener("click", async (event) => {
    event.preventDefault();

    async function showImage() {
        const response = await fetch(url);
        const data = await response.json();

        //console.log(data.data[1]);
        
        const randomElem = Math.floor(Math.random() * data.data.length + 1);
        imgElem.src = data.data[randomElem].imageUrl;

        console.log(data.data[randomElem].imageUrl);  

//___________show name of random image_________
      
const butElement = imgElem as HTMLImageElement;
    butElement.addEventListener("click", async (event) => {
        event.preventDefault();
        async function showName() {
            const response = await fetch(url);
            const data = await response.json();
            nameElem.innerHTML = "";
            nameElem.innerHTML = `Hello! My name is ${data.data[randomElem].name}`;
            
            console.log(nameElem);
                        
        }
        showName();
    });
//______________show video games______________

    buttonGames.addEventListener("click", async (event) => {
        event.preventDefault();
        async function showInfo() {
            const response = await fetch(url);
            const data = await response.json();
            
            console.log(data);

            infoSec.innerHTML = "";
            infoSec.innerHTML = `Here are video games with ${data.data[randomElem].name}: 
                                ${data.data[randomElem].videoGames}`;
            
            console.log(infoSec);
        }
        showInfo();
    }); 

}
showImage();
nameElem.innerHTML ="";
infoSec.innerHTML = "";
});

