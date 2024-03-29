/* API https://api.disneyapi.dev */

const url = "https://api.disneyapi.dev/character/";
const urlPage = "https://api.disneyapi.dev/character?page=";
const urlName = "https://api.disneyapi.dev/character?name=";

const imgElem = document.querySelector('#img') as HTMLImageElement;
const buttonImage = document.querySelector("#button-image") as HTMLButtonElement;
const nameElem = document.querySelector("#name") as HTMLElement;
const infoSec = document.querySelector("#videogames") as HTMLElement;
const buttonId = document.querySelector('#button-id') as HTMLButtonElement;
const inputNumber = document.querySelector("#id-number") as HTMLInputElement;
const messegeElem = document.querySelector(".messege-number") as HTMLParagraphElement;
const buttonPage = document.querySelector("#button-page") as HTMLButtonElement;
const inputNumberPage = document.querySelector("#page-number") as HTMLInputElement;
const pageInfo = document.querySelector(".page-info") as HTMLParagraphElement;
const buttonName = document.querySelector("#button-name") as HTMLButtonElement;
const inputName = document.querySelector("#name-search") as HTMLInputElement;
const nameInfo = document.querySelector(".name-info") as HTMLElement;


//____________get all characters___________

getAllCharacters();
async function getAllCharacters() {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);    
};

//_______________search page_____________

buttonPage.addEventListener("click", async (event) => {
async function getPage() {
    if (inputNumberPage.value.length > 0) {
    const response = await fetch(urlPage + inputNumberPage.value);
    const data = await response.json();
    
    console.log(data);

    //__________show character from page/ random_________
    
    const randomElem = Math.floor(Math.random() * data.data.length + 1);
    imgElem.src = data.data[randomElem].imageUrl;
    nameElem.innerHTML = `Hello! My name is ${data.data[randomElem].name}`;
    infoSec.innerHTML = `Here are video games with ${data.data[randomElem].name}: 
                        ${data.data[randomElem].videoGames}`;

    //___________show page info____________

    pageInfo.innerHTML = "";
    pageInfo.innerHTML = `Page number ${inputNumberPage.value} has characters 
                    with ID from ${data.data[0]._id} to ${data.data[49]._id}.`;
    } else {
        pageInfo.innerHTML = `Please choose a number`;
    }
}
getPage();
//inputNumberPage.value = ""; 
});

//___________search character by id____________

buttonId.addEventListener("click", async (event) => {
    async function getCharacterById() {
        if (inputNumber.value.length > 0) {
        const response = await fetch(url + inputNumber.value);
        const data = await response.json();

        console.log(data);
        
        messegeElem.innerHTML = "";
        imgElem.src = data.data.imageUrl;

        console.log(data.data.imageUrl);
        
        nameElem.innerHTML = `Hello! My name is ${data.data.name}`;
        infoSec.innerHTML = `Here are video games with 
            ${data.data.name}: ${data.data.videoGames}`; 
        } else {
            messegeElem.innerHTML = `Please choose a number`;
        }         
    }
    getCharacterById();
    inputNumber.value = "";
});

//_______________search character by name_____________

buttonName.addEventListener("click", async (event) => {
        const response = await fetch(urlName + inputName.value);
        const data = await response.json();

        console.log(data);
        nameInfo.innerHTML = "";
        data.data.forEach((element: any) => {
            if (inputName.value.length > 0) {
            nameInfo.innerHTML += `<li>Name: ${element.name} (id: ${element._id}) 
                                from movie: ${element.films}</li>`;
            } else {
                nameInfo.innerHTML = `Please enter a name`;
            }
            
            console.log(element.name);

        });
    inputName.value = "";
});

//___________show image/ random__________

buttonImage.addEventListener("click", async (event) => {
    event.preventDefault();
    async function showImage() {
        const response = await fetch(url);
        const data = await response.json();

        const randomElem = Math.floor(Math.random() * data.data.length + 1);
        imgElem.src = data.data[randomElem].imageUrl;

        nameElem.innerHTML = "";
        nameElem.innerHTML = `Hello! My name is ${data.data[randomElem].name}`;
        infoSec.innerHTML = "";
        infoSec.innerHTML = `Here are video games with ${data.data[randomElem].name}: 
                                ${data.data[randomElem].videoGames}`;

        console.log(data.data[randomElem].imageUrl);  

}
showImage();
nameElem.innerHTML ="";
infoSec.innerHTML = "";
});

