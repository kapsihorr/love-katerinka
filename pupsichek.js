console.log("JS работает ❤️");

const mainText = document.getElementById("mainText");
const counterText = document.getElementById("counterText");
const loveBtn = document.getElementById("loveBtn");

let count = 0;

loveBtn.addEventListener("click", () => {
  count++;

  mainText.textContent = "Я тебя люблю ❤️";
  counterText.textContent = `Я сказал это ${count} раз`;

  // Анимация текста
  mainText.style.transform = "scale(1.1)";
  setTimeout(() => {
    mainText.style.transform = "scale(1)";
  }, 150);

  // Сердечко
  createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
