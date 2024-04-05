const joke_generator = document.querySelector('#joke');
const btn = document.querySelector("button");
let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = () => {
    fetch(url)
    .then(niyati => niyati.json())
    .then(jokeapi => {
        joke_generator.textContent = `${jokeapi.joke}`;
    });
}
btn.addEventListener("click", () => {
    getjoke();
}) ;