//https://api.blablagues.net/?rub=blagues
const app = document.querySelector("body > div");
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();

app.addEventListener("click", getJoke);
